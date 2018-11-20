import { connect } from 'react-redux'

import ShowsPremiersScreen from './ShowsPremiersScreen'

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
            title: item.name,
            premiereDate: item.first_air_date,
            year: item.first_air_date.split('-')[0],
            image: {
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`
            }
        })
        , [])
}

const mapStateToProps = state => ({
    showsPremiers: getSelectedData(state.showsPremiers.data)
});


export default connect(mapStateToProps)(ShowsPremiersScreen)