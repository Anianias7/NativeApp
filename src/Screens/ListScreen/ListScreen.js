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
        <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <View>
                <ItemsList
                    onShowDetails={onShowDetails}
                    titles={titles}
                    images={images}
                    ids={ids}
                    subtitles={subtitles} />
            </View>
        </View>

    );

export default ListScreen;