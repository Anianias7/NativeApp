import { connect } from 'react-redux'

import ShowsPremiersScreen from './ShowsPremiersScreen'

// const getSelectedData = (data) => {
//     return data.reduce((selectedData, item) =>
//         selectedData.concat({
//             id: item.id,
//             title: item.name,
//             premiereDate: item.first_air_date,
//             year: item.first_air_date.split('-')[0],
//             image: {
//                 uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`
//             }
//         })
//         , [])
// }

const mapStateToProps = state => ({
    showsPremiers: state.showsPremiers.data
});


export default connect(mapStateToProps)(ShowsPremiersScreen)