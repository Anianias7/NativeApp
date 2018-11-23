import React from 'react'

import {
    getPremiersIds,
    getPremiersImages,
    getPremiersPremieresDates,
    getPremiersTitles
} from './ShowsPremiersUtils'
import ListScreen from '../ListScreen/ListScreen'


const ShowsPremiersScreen = (props) => {

    const onShowSeriesDetails = (seriesId) => {
        props.navigation.navigate('PremiereDetailsScreen', {
            type: 'tv',
            id: seriesId
        })
    }

    return (
        <ListScreen
            onShowDetails={onShowSeriesDetails}
            titles={getPremiersTitles(props.showsPremiers)}
            images={getPremiersImages(props.showsPremiers)}
            ids={getPremiersIds(props.showsPremiers)}
            subtitles={getPremiersPremieresDates(props.showsPremiers)} />
    );
}

export default ShowsPremiersScreen;
