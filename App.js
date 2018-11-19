import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text } from 'react-native'
import { getMoviesPremiersIds } from './src/store/MoviesPremiers/thunks'
// import { getMoviesPlayedInCinemasThisMonth } from './src/serivices/api/movieApi'

import SearchScreenContainer from './src/Screens/SearchScreen/SearchScreenContainer'
import MoviesScreen from './src/Screens/MoviesScreen/MoviesScreen'
import ShowsScreen from './src/Screens/ShowsScreen/ShowsScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from 'react-navigation'

class App extends Component {

  componentDidMount() {
    this.props.getMoviesData()
    console.log("OOOOOOOOOOOOOOO", this.props.getMoviesData())

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
        screen: MoviesScreen,
        navigationOptions: {
          tabBarLabel: 'MOVIES',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="film" color={tintColor} size={24} />
          )
        },
      },
      Shows: {
        screen: ShowsScreen,
        navigationOptions: {
          tabBarLabel: 'SHOWS',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="tv" color={tintColor} size={26} />
          )
        }
      },
      Movie: {
        screen: ShowsScreen,
        navigationOptions: {
          tabBarLabel: 'MOVIE',
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
    return !this.props.moviesDataLoading ? <Navigator /> : <Text>LOADING...</Text>
  }
}

const mapStateToProps = state => ({
  moviesData: state.MoviesPremiersReducer.data,
  moviesDataLoading: state.MoviesPremiersReducer.loading
})

const mapDispatchToProps = ({
  getMoviesData: getMoviesPremiersIds
})



export default connect(mapStateToProps, mapDispatchToProps)(App)