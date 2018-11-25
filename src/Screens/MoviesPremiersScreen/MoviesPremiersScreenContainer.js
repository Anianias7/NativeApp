import { connect } from 'react-redux'

import MoviesPremiersScreen from './MoviesPremiersScreen'

// const getSelectedData = (data) => {
//     return data.reduce((selectedData, item) =>
//         selectedData.concat({
//             id: item.id,
//             title: item.title,
//             premiereDate: item.release_date,
//             year: item.release_date.split('-')[0],
//             image: {
//                 uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`
//             }
//         })
//         , [])
// }

const mapStateToProps = state => ({
    moviesPremiers: state.moviesPremiers.data


});


export default connect(mapStateToProps)(MoviesPremiersScreen)