import React from 'react'
import { View, StatusBar, ScrollView, Text } from 'react-native';

import styles from './SearchScreen.style'

import SearchField from '../../Components/SearchView/SearchField/SearchField'
import SectionParagraph from '../../Components/Fields/SectionParagraph/SectionParagraph'
import PosterCardsList from '../../Components/Cards/PosterCardsList/PosterCardsList'
import PremiersListButton from '../../Components/PremiersListButton/PremiersListButton'


const SearchView = (props) => {

    const images = [{ image: require('../../assets/images/movie.png') }, { image: require('../../assets/images/tv.png') }];
    const texts = ['Premiery filmowe', 'Premiery telewizyjne'];

    const moviesPosters = props.moviesPremiers.reduce((acc, val) =>
        acc.concat({ image: { uri: `https://image.tmdb.org/t/p/w200${val.poster_path}` } })
        , []);

    const showsPosters = props.tvPremiers.reduce((acc, val) =>
        acc.concat({ image: { uri: `https://image.tmdb.org/t/p/w200${val.poster_path}` } })
        , []);

    const onMoviePremiersPress = () => {
        props.navigation.navigate('MoviesPremiersScreen', { name: "Movies Premiers" })
    }

    const onTVPremiersPress = () => {
        props.navigation.navigate('ShowsPremiersScreen', { name: "Shows Premiers" })
    }

    return (
        <View style={styles.SearchScreenContainer}>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <View style={styles.SearchScreenHeader}>
                <SearchField />
                <Text
                    style={styles.SearchScreenHeaderText}
                    numberOfLines={2}>
                    Zacznij wpisywać pożądany tytuł i bądź na bieżąco ze zbliżającymi się premierami ulubionych filmów i seriali
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.SearchScreenContentContainer}>
                    <SectionParagraph>Jakiego rodzaju premier szukasz?</SectionParagraph>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <PremiersListButton
                            imageUri={images[0].image}
                            title={texts[0]}
                            onPress={onMoviePremiersPress} />
                        <PremiersListButton
                            imageUri={images[1].image}
                            title={texts[1]}
                            onPress={onTVPremiersPress} />

                    </View>
                    <SectionParagraph>Premiery kinowe w tym miesiącu</SectionParagraph>
                    <PosterCardsList imagesUris={moviesPosters} />
                    <SectionParagraph>Premiery telewizyjne w tym miesiącu</SectionParagraph>
                    <PosterCardsList imagesUris={showsPosters} />
                </View>
            </ScrollView>
        </View>
    );
}

export default SearchView;