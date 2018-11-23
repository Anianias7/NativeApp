import React from 'react'
import ListScreen from '../../ListScreen/ListScreen'

const CastListScreen = (props) => {
    const data = props.navigation.state.params
    return (
        <ListScreen
            titles={data.titles}
            images={data.images}
            ids={data.ids}
            subtitles={data.subtitles} />
    )
}

export default CastListScreen;