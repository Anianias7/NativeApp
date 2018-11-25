import React from 'react'
import { ScrollView, ToastAndroid } from 'react-native'
import PropTypes from 'prop-types';

import styles from './PremiereDetailsScreen.style'

import axios from '../../axios/axios-premiers'
import PremiereDetailsHeader from '../../Components/PremiereDetails/PremiereDetailsHeader/PremiereDetailsHeader'
import PremiereGeneralInfo from '../../Components/PremiereDetails/PremiereGeneralInfo/PremiereGeneralInfo'
import PremiereRatesSections from '../../Components/PremiereDetails/PremiereRatesSection/PremiereRatesSection'
import DetailsSection from '../../Components/PremiereDetails/DetailsSection/DetailsSection'
import PosterCardList from '../../Components/Cards/PosterCardsList/PosterCardsList'
import Spinner from '../../Components/Spinner/Spinner'
import ItemsList from '../../Components/ListView/ItemsList/ItemsList'
import PremiereDescriptionPopout from '../../Components/Popup/PremiereDescriptionPopout/PremiereDescriptionPopout'
import ShowMoreButton from '../../Components/ShowMoreButton/ShowMoreButton'
import {
    getSelectedCastData,
    getSelectedCrewData,
    getCastUris,
    getCastNames,
    getCastCharacterNames,
    getCrewUris,
    getCrewNames,
    getCrewJobTitles,
    getSelectedBackdropsData
} from './PremiereDetailsUtils'


class PremiereDetailsScreen extends React.Component {

    state = {
        type: this.props.navigation.state.params.type,
        cast: null,
        crew: null,
        images: null,
        data: null,
        loading: true,
        showPopup: false
    }

    componentDidMount() {
        if (this.props.userPremiersIndexes.includes(this.props.navigation.state.params.id)){
            const premiereData = this.props.userPremiers.find(movie => movie.data.id === this.props.navigation.state.params.id)
            this.setState({
                cast: premiereData.cast,
                crew: premiereData.crew,
                images: premiereData.images,
                data: premiereData.data,
                loading: false
            })
        }
        else {
            let credits, images;
            Promise
                .all([this.props.premiereService.getImages(this.props.navigation.state.params.id),
                this.props.premiereService.getCredits(this.props.navigation.state.params.id)])
                .then(response => {
                    credits = response[1].data;
                    images = response[0].data
                    this.setState({
                        cast: getSelectedCastData(credits.cast),
                        crew: getSelectedCrewData(credits.crew),
                        images: getSelectedBackdropsData(images.posters),
                        data: this.props.data.find(item => item.id === this.props.navigation.state.params.id),
                        loading: false
                    })
                })
        }
    }

    onShowCast = () => {
        this.props.navigation.navigate('CastListScreen', {
            titles: getCastNames(this.state.cast),
            images: getCastUris(this.state.cast),
            subtitles: getCastCharacterNames(this.state.cast),
        })
    }

    onShowCrew = () => {
        this.props.navigation.navigate('CrewListScreen', {
            titles: getCrewNames(this.state.crew),
            images: getCrewUris(this.state.crew),
            subtitles: getCrewJobTitles(this.state.crew),
        })
    }

    onButtonClick = () => {
        const premiereData = {
            cast: this.state.cast,
            crew: this.state.crew,
            images: this.state.images,
            data: this.state.data
        }
        const url = this.state.type === 'movie' ? '/movies.json' : '/tv.json'
        axios.post(url, premiereData)
            .then(() => {
                this.props.movieWasAdded();
                this.props.showWasAdded();
                return ToastAndroid.showWithGravity(
                    'Saved',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                )
            })
            .catch(err => {
                return ToastAndroid.showWithGravity(
                    'Not Saved',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                )
            })
    }

    onDescriptionPress = () => {
        this.setState({
            showPopup: true
        })
    }

    onPopoutClose = () => {
        this.setState({
            showPopup: false
        })
    }

    render() {
        return (
            this.state.loading ?
                <Spinner /> :
                <ScrollView style={styles.PremiereDetailsContainer} showsVerticalScrollIndicator={false}>
                    <PremiereDetailsHeader
                        releaseDate={this.state.data.premiereDate}
                        onButtonPress={this.onButtonClick}
                        showButton={!this.props.userPremiersIndexes.includes(this.props.navigation.state.params.id)}/>
                    <PremiereGeneralInfo
                        imageUri={this.state.data.image}
                        title={this.state.data.title}
                        description={this.state.data.overview}
                        onDescriptionPress={this.onDescriptionPress}
                    />
                    <PremiereRatesSections rate={this.state.data.voteAverage} />
                    <DetailsSection sectionTitle='Posters'>
                        <PosterCardList
                            imagesUris={this.state.images}
                        />
                    </DetailsSection>
                    <DetailsSection sectionTitle='Cast'>
                        <ItemsList
                            titles={getCastNames(this.state.cast).slice(0, 4)}
                            images={getCastUris(this.state.cast).slice(0, 4)}
                            subtitles={getCastCharacterNames(this.state.cast).slice(0, 4)} />
                        <ShowMoreButton onShowMore={this.onShowCast} />
                    </DetailsSection>
                    <DetailsSection sectionTitle='Crew'>
                        <ItemsList
                            titles={getCrewNames(this.state.crew).slice(0, 4)}
                            images={getCrewUris(this.state.crew).slice(0, 4)}
                            subtitles={getCrewJobTitles(this.state.crew).slice(0, 4)} />
                        <ShowMoreButton onShowMore={this.onShowCrew} />
                    </DetailsSection>
                    <PremiereDescriptionPopout
                        visible={this.state.showPopup}
                        onPopoutClose={this.onPopoutClose}
                        title='Overview'
                        description={this.state.data.overview} />
                </ScrollView >
        )
    }
}

PremiereDetailsScreen.PropTypes = {
    movieData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        premiereDate: PropTypes.string,
        year: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        image: PropTypes.shape({
            uri: PropTypes.string
        })
    }),
    tvData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        premiereDate: PropTypes.string,
        year: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        image: PropTypes.shape({
            uri: PropTypes.string
        })
    }),
    type: PropTypes.string,
    id: PropTypes.number,
}

export default PremiereDetailsScreen;