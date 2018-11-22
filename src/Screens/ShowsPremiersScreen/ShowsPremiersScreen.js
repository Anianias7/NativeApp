import React from 'react'
import { View, StatusBar } from 'react-native';

import {
    getPremiersIds,
    getPremiersImages,
    getPremiersPremieresDates,
    getPremiersTitles
} from './ShowsPremiersUtils'
import ItemsList from '../../Components/ListView/ItemsList/ItemsList'


const ShowsPremiersScreen = (props) => (
    <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
        <StatusBar
            backgroundColor="black"
            barStyle="light-content"
        />
        <View>
            <ItemsList
                titles={getPremiersTitles(props.showsPremiers)}
                images={getPremiersImages(props.showsPremiers)}
                ids={getPremiersIds(props.showsPremiers)}
                subtitles={getPremiersPremieresDates(props.showsPremiers)} />
        </View>
    </View>

);

export default ShowsPremiersScreen;
