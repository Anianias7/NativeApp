import React, { Component } from 'react'
import { View, StatusBar, ScrollView, Text, TouchableOpacity, Keyboard, BackHandler } from 'react-native';

import styles from './SearchScreen.style'

import SearchField from '../../Components/SearchView/SearchField/SearchField'
import SectionParagraph from '../../Components/Fields/SectionParagraph/SectionParagraph'
import PosterCardsList from '../../Components/Cards/PosterCardsList/PosterCardsList'
import PremiersListButton from '../../Components/PremiersListButton/PremiersListButton'
import ListScreen from '../ListScreen/ListScreen'
import {
    getPremiersIds,
    getPremiersImages,
    getPremiersPremieresDates,
    getPremiersTitles,
} from '../MoviesPremiersScreen/MoviesPremiersUtils'



const images = [{ image: require('../../assets/images/movie.png') }, { image: require('../../assets/images/tv.png') }];
const texts = ['Premiery filmowe', 'Premiery telewizyjne'];

class SearchView extends Component {

    state = {
        showAutocomplite: false,
        searchString: ''
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }


    handleBackPress = () => {
        if (this.state.showAutocomplite) {
            this.setState({
                showAutocomplite: false
            })

            return true;
        }
        return false;
    }


    onInputFocus = () => {
        this.setState({
            showAutocomplite: true
        })
    }

    onInputEndEditing = () => {
        Keyboard.dismiss();
        this.setState({
            showAutocomplite: false
        })
    }

    handleInputChange = (event) => {
        this.setState({
            searchString: event
        })
    }

    getAutocompliteSuggestions = () => {
        const searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            return this.props.allPremiers.filter(item => item.title.toLowerCase().match(searchString))
        }
    }


    onShowDetails = (premiereId) => {
        Keyboard.dismiss();
        this.props.navigation.navigate('PremiereDetailsScreen', {
            type: this.props.allPremiers.find(item => premiereId === item.id).type,
            id: premiereId
        })
    }


    onShowMoviePremiers = () => {
        this.props.navigation.navigate('MoviesPremiersScreen')
    }

    onShowTVPremiers = () => {
        this.props.navigation.navigate('ShowsPremiersScreen')
    }

    onShowMovieDetails = (movieId) => {
        this.props.navigation.navigate('PremiereDetailsScreen', {
            type: 'movie',
            id: movieId
        })
    }

    onShowSeriesDetails = (seriesId) => {
        this.props.navigation.navigate('PremiereDetailsScreen', {
            type: 'tv',
            id: seriesId
        })
    }

    onShowDetails = (premiereId) => {
        this.props.navigation.navigate('PremiereDetailsScreen', {
            type: this.props.allPremiers.find(item => premiereId === item.id).type,
            id: premiereId
        })
    }

    render() {

        const moviesPosters = this.props.moviesPremiers.reduce((acc, val) =>
            acc.concat({ image: { uri: `https://image.tmdb.org/t/p/w200${val.poster_path}` } })
            , []);

        const moviesIds = this.props.moviesPremiers.reduce((acc, val) =>
            acc.concat({ id: val.id })
            , []);

        const showsPosters = this.props.tvPremiers.reduce((acc, val) =>
            acc.concat({ image: { uri: `https://image.tmdb.org/t/p/w200${val.poster_path}` } })
            , []);

        const showsIds = this.props.tvPremiers.reduce((acc, val) =>
            acc.concat({ id: val.id })
            , []);


        const autoComp = this.getAutocompliteSuggestions()
        console.log(autoComp)

        return (
            <View style={styles.SearchScreenContainer}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                <View style={styles.SearchScreenHeader}>
                    <SearchField

                        onInputFocus={this.onInputFocus}
                        handleInputChange={this.handleInputChange}
                    />
                    <Text
                        style={styles.SearchScreenHeaderText}
                        numberOfLines={3}>
                        Start typing the desired title and always be up to date with upcoming premieres of your favorite movies and series
                </Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.SearchScreenContentContainer}>
                    <SectionParagraph>What kind of premieres are you looking for?</SectionParagraph>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <PremiersListButton
                            imageUri={images[0].image}
                            title={texts[0]}
                            onPress={this.onShowMoviePremiers} />
                        <PremiersListButton
                            imageUri={images[1].image}
                            title={texts[1]}
                            onPress={this.onShowTVPremiers} />

                    </View>
                    <SectionParagraph>Movie premieres of the month</SectionParagraph>
                    <PosterCardsList
                        imagesUris={moviesPosters}
                        ids={moviesIds}
                        onShowDetails={this.onShowMovieDetails} />
                    <SectionParagraph>TV premieres of the month</SectionParagraph>
                    <PosterCardsList
                        imagesUris={showsPosters}
                        ids={showsIds}
                        onShowDetails={this.onShowSeriesDetails} />
                </ScrollView>
                {this.state.showAutocomplite && autoComp && autoComp.length > 0 &&
                    <TouchableOpacity onPress={this.onInputEndEditing} style={{
                        bottom: 0, zIndex: 20, position: 'absolute', left: 0,
                        right: 0, top: 80, backgroundColor: 'rgba(160,160,160,0.8)', flex: 1
                    }}>
                        <ListScreen
                            onShowDetails={this.onShowDetails}
                            titles={getPremiersTitles(autoComp)}
                            subtitles={getPremiersPremieresDates(autoComp)}
                            ids={getPremiersIds(autoComp)}
                            images={getPremiersImages(autoComp)} />
                    </TouchableOpacity>
                }

            </View>
        );
    }
}

export default SearchView;
