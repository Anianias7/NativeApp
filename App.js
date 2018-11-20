import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text } from 'react-native'
import { getMoviesPremiers } from './src/store/MoviesPremiers/thunks'
import { getTVPremiers } from './src/store/TVPremiers/thunks'

import SearchScreenContainer from './src/Screens/SearchScreen/SearchScreenContainer'
// import MoviesScreen from './src/Screens/MoviesScreen/MoviesScreen'
import MoviesPremiersScreen from './src/Screens/MoviesPremiersScreen/MoviesPremiersScreenContainer'
// import ShowsScreen from './src/Screens/ShowsScreen/ShowsScreen'
import ShowsPremiersScreen from './src/Screens/ShowsPremiersScreen/ShowsPremiersScreenContainer'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from 'react-navigation'

class App extends Component {

  componentDidMount() {
    this.props.getMoviesData()
    this.props.getShowsData()

  }

  render() {

    const Navigator = createBottomTabNavigator({
      Search: {
        screen: SearchScreenContainer,
        navigationOptions: {
          tabBarLabel: 'SEARCH',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" color={tintColor} size={24} />
          )
        }
      },
      Movies: {
        screen: MoviesPremiersScreen,
        navigationOptions: {
          tabBarLabel: 'MOVIES',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="film" color={tintColor} size={24} />
          )
        },
      },
      Shows: {
        screen: ShowsPremiersScreen,
        navigationOptions: {
          tabBarLabel: 'SHOWS',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="tv" color={tintColor} size={26} />
          )
        }
      },
    }, {
        tabBarOptions: {
          activeTintColor: '#FFA000',
          inactiveTintColor: '#757575',
          style: {
            height: 60,
            padding: 5,
            borderTopWidth: 0,
            backgroundColor: 'rgba(189,189,189,0.6)',
          }
        }
      })
    return !this.props.moviesDataLoading && !this.props.showsDataLoading ? <Navigator /> : <Text>LOADING...</Text>
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