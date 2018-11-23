import movieService from './movieService'
import tvService from './tvService'

export const getPremiersDetails = (type) => {
    switch(type) {
        case 'movie': {
            return movieService
        }
        case 'tv': {
            return tvService
        }
    }
}