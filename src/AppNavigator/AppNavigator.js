import React from 'react'
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native'

import Navigator from '../Screens/Navigator'
import MoviesPremiersScreen from '../Screens/MoviesPremiersScreen/MoviesPremiersScreenContainer'
import ShowsPremiersScreen from '../Screens/ShowsPremiersScreen/ShowsPremiersScreenContainer'

const AppNavigator = createStackNavigator({
    Navigator: {
        screen: Navigator,
        navigationOptions: {
            header: null
        }
    },
    MoviesPremiersScreen: {
        screen: MoviesPremiersScreen,
        navigationOptions: {
            headerTitle: "Movies Premiers"
        }
    },
    ShowsPremiersScreen: {
        screen: ShowsPremiersScreen,
        navigationOptions: {
            headerTitle: "Shows Premiers"
        }
    }

})

export default AppNavigator;