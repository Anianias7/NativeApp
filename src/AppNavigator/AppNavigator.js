import { createStackNavigator } from 'react-navigation';

import Navigator from '../Screens/Navigator'
import MoviesPremiersScreen from '../Screens/MoviesPremiersScreen/MoviesPremiersScreenContainer'
import ShowsPremiersScreen from '../Screens/ShowsPremiersScreen/ShowsPremiersScreenContainer'
import CastListScreen from '../Screens/PremiereDetailScreen/CastListScreen/CastListScreen'
import CrewListScreen from '../Screens/PremiereDetailScreen/CrewListScreen/CrewListScreen'
import PremiereDetailsScreen from '../Screens/PremiereDetailScreen/PremiereDetailsScreenContainer'

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
            headerTitle: "Movies Premiers",
            headerStyle: {
                backgroundColor: '#009688',
            },
            headerTintColor: 'white',
        }
    },
    ShowsPremiersScreen: {
        screen: ShowsPremiersScreen,
        navigationOptions: {
            headerTitle: "Shows Premiers",
            headerStyle: {
                backgroundColor: '#FFA000',
            },
            headerTintColor: 'white',
        },
    },
    CastListScreen: {
        screen: CastListScreen,
        navigationOptions: {
            headerTitle: "Cast Members"
        }
    },
    CrewListScreen: {
        screen: CrewListScreen,
        navigationOptions: {
            headerTitle: "Crew Members"
        }
    },
    PremiereDetailsScreen: {
        screen: PremiereDetailsScreen,
        navigationOptions: {
            header: null
        }
    },
})

export default AppNavigator;