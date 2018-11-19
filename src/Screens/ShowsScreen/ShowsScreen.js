import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native';

import ItemsList from '../../Components/ListView/ItemsList/ItemsList'
import { getMoviesPlayedInCinemasThisMonth } from '../../serivices/api/movieApi'
import moment from 'moment'


class ShowsScreen extends Component {


    // componentDidMount() {
    //     getMoviesPlayedInCinemasThisMonth()

    // }

    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                <View>
                    <ItemsList />
                </View>
            </View>

        );
    }
}

export default ShowsScreen;