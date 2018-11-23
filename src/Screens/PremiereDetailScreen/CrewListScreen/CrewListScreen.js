import React from 'react'
import ListScreen from '../../ListScreen/ListScreen'

const CrewListScreen = (props) => {
    const data = props.navigation.state.params
    return (
        <ListScreen
            titles={data.titles}
            images={data.images}
            ids={data.ids}
            subtitles={data.subtitles} />
    )
}

export default CrewListScreen;