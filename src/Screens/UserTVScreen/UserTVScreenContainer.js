import { connect } from 'react-redux'

import UserTVScreen from './UserTVScreen'

const getTVData = (data) => {
    return data.map(movie => movie.data)
}

const mapStateToProps = state => ({
    data: getTVData(state.userShows.usersShowData),
})


export default connect(mapStateToProps)(UserTVScreen)