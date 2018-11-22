import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMoviesPremiers } from './src/store/MoviesPremiers/thunks'
import { getTVPremiers } from './src/store/TVPremiers/thunks'


import Spinner from './src/Components/Spinner/Spinner'
import AppNavigator from './src/AppNavigator/AppNavigator'

class App extends Component {

  componentDidMount() {
    this.props.getMoviesData()
    this.props.getShowsData()
  }

  render() {
    return !this.props.moviesDataLoading && !this.props.showsDataLoading ?
      <AppNavigator />
      : <Spinner />
  }
}

const mapStateToProps = state => ({
  moviesData: state.moviesPremiers.data,
  moviesDataLoading: state.moviesPremiers.loading,
  showsData: state.showsPremiers.data,
  showsDataLoading: state.showsPremiers.loading
})

const mapDispatchToProps = ({
  getMoviesData: getMoviesPremiers,
  getShowsData: getTVPremiers
})



export default connect(mapStateToProps, mapDispatchToProps)(App)