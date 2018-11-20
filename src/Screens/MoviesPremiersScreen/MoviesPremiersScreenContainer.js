import { connect } from 'react-redux'

import MoviesPremiersScreen from './MoviesPremiersScreen'

// const data = [
//     {
//         title: 'Tytanic',
//         year: '2018',
//         premiereDate: '18.11.2018',
//         image: {
//             uri: require('../../../assets/images/titanic.jpg'),
//         },
//     },
//     {
//         title: 'Ciekawy przypadek Benjamina Buttona',
//         year: '2017',
//         premiereDate: '25.12.2018',
//         image: {
//             uri: require('../../../assets/images/benjaminButton.jpg'),
//         }
//     },
// ]

const getSelectedData = (data) => {
    return data.reduce((selectedData, item) =>
        selectedData.concat({
            id: item.id,
            title: item.title,
            premiereDate: item.release_date,
            year: item.release_date.split('-')[0],
            image: {
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`
            }
        })
        , [])
    }

const mapStateToProps = state => ({
    moviesPremiers: getSelectedData(state.moviesPremiers.data)


});


export default connect(mapStateToProps)(MoviesPremiersScreen)