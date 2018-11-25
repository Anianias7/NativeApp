import React from 'react'
import { View, StatusBar } from 'react-native';

import ItemsList from '../../Components/ListView/ItemsList/ItemsList'


const ListScreen = ({
    onShowDetails,
    titles,
    images,
    ids,
    subtitles
}) => (
        <View style={{ backgroundColor: 'white', zIndex:200}}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
                <ItemsList
                    onShowDetails={onShowDetails}
                    titles={titles}
                    images={images}
                    ids={ids}
                    subtitles={subtitles} />
        </View>

    );

export default ListScreen;
