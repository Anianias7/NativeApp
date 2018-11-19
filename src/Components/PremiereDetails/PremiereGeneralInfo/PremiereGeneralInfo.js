import React from 'react'
import { View, Image, Text} from 'react-native'


const movie = {
    imageUri: '../../../assets/images/titanic.jpg',
    title: 'titanic',
    premiers: '11.12.2018',
    director: 'James Cameron',
}

const PremiereGeneralInfo = () => (
    <View >
        <Image src={require(movie.imageUri)}/>
        <View>
            <View>
                <Text>Tytuł</Text>
                <Text>{movie.title}</Text>
            </View>

        </View>


    </View>
)

export default PremiereGeneralInfo;