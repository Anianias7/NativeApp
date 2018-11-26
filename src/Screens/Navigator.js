import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from 'react-navigation'
import SearchScreenContainer from '../Screens/SearchScreen/SearchScreenContainer'
import UserMoviesScreen from '../Screens/UserMoviesScreen/UserMoviesScreenContainer'
import UserTVScreen from '../Screens/UserTVScreen/UserTVScreenContainer'

export default createBottomTabNavigator({
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
        screen: UserMoviesScreen,
        navigationOptions: ({
            tabBarLabel: 'MOVIES',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="film" color={tintColor} size={24} />
            ),
        }),
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    },
    Shows: {
        screen: UserTVScreen,
        navigationOptions: {
            tabBarLabel: 'SHOWS',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="tv" color={tintColor} size={26} />
            )
        },
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
            },
        }
    },
)
