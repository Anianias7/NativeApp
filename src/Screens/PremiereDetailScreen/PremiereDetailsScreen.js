import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types';

import styles from './PremiereDetailsScreen.style'

import PremiereReleaseDateHeader from '../../Components/PremiereDetails/PremiereReleaseDateHeader/PremiereReleaseDateHeader'
import PremiereGeneralInfo from '../../Components/PremiereDetails/PremiereGeneralInfo/PremiereGeneralInfo'
import PremiereRatesSections from '../../Components/PremiereDetails/PremiereRatesSection/PremiereRatesSection'
import DetailsSection from '../../Components/PremiereDetails/DetailsSection/DetailsSection'
import PosterCardList from '../../Components/Cards/PosterCardsList/PosterCardsList'
import Spinner from '../../Components/Spinner/Spinner'
import ItemsList from '../../Components/ListView/ItemsList/ItemsList'

import { getMovieCredits, getMovieImages } from '../../serivices/api/movieApi'
import { getShowCredits, getShowImages } from '../../serivices/api/showsApi'
import {
    getCreditsData,
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
        cast: null,
        crew: null,
        images: null,
        loading: true
    }

    componentDidMount() {
        let credits, images;
        const id = 338952;
        let type = 'movie'
        if (type === 'movie') {
            Promise
                .all([getMovieImages(id), getMovieCredits(id)])
                .then(response => {
                    credits = response[1].data;
                    images = response[0].data
                    this.setState({
                        cast: getSelectedCastData(credits.cast),
                        crew: getSelectedCrewData(credits.crew),
                        images: getSelectedBackdropsData(images.posters),
                        loading: false
                    })
                })
        }

    }

    render() {
        let data = null;
        let type = 'movie'
        if (type === 'movie')
            data = this.props.movieData.filter(item => item.id === 338952)[0];
        else if (this.props.type === 'tv')
            data = this.props.tvData.filter(item => item.id === 338952)[0]

        return (
            this.state.loading ? <Spinner /> :
                <ScrollView style={styles.PremiereDetailsContainer}>
                    <PremiereReleaseDateHeader releaseDate={data.premiereDate} />
                    <PremiereGeneralInfo
                        imageUri={data.image}
                        title={data.title}
                        description={data.overview} />
                    <PremiereRatesSections rate={data.vote_average} />
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
                    </DetailsSection>
                    <DetailsSection sectionTitle='Crew'>
                        <ItemsList
                            titles={getCrewNames(this.state.crew).slice(0, 4)}
                            images={getCrewUris(this.state.crew).slice(0, 4)}
                            subtitles={getCrewJobTitles(this.state.crew).slice(0, 4)} />
                    </DetailsSection>
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