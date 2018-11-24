import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMoviesPremiers } from './src/store/MoviesPremiers/thunks'
import { getTVPremiers } from './src/store/TVPremiers/thunks'
import { getUserMoviesPremiers } from './src/store/UserMovies/thunks'
import { getUserTVPremiers } from './src/store/UserShows/thunks'


import Spinner from './src/Components/Spinner/Spinner'
import AppNavigator from './src/AppNavigator/AppNavigator'

class App extends Component {

  componentDidMount() {
    this.props.getMoviesData();
    this.props.getShowsData();
    this.props.getUserMoviesData();
    this.props.getUserTVData();
  }

  componentDidUpdate() {
    if (this.props.shouldUpdateUserMoviesList || this.props.shouldUpdateUserTVList) {
      this.props.getUserMoviesData();
      this.props.getUserTVData();
    }
  }

  render() {
    return !this.props.moviesDataLoading &&
      !this.props.showsDataLoading &&
      !this.props.userMoviesDataLoading &&
      !this.props.userTVDataLoading
      ?
      <AppNavigator />
      : <Spinner />
  }
}

const mapStateToProps = state => ({
  shouldUpdateUserMoviesList: state.userMovies.shouldUpdateList,
  userMoviesDataLoading: state.userMovies.loading,
  shouldUpdateUserTVList: state.userShows.shouldUpdateList,
  userTVDataLoading: state.userShows.loading,
  moviesData: state.moviesPremiers.data,
  moviesDataLoading: state.moviesPremiers.loading,
  showsData: state.showsPremiers.data,
  showsDataLoading: state.showsPremiers.loading
})

const mapDispatchToProps = ({
  getMoviesData: getMoviesPremiers,
  getShowsData: getTVPremiers,
  getUserMoviesData: getUserMoviesPremiers,
  getUserTVData: getUserTVPremiers,
})



export default connect(mapStateToProps, mapDispatchToProps)(App)