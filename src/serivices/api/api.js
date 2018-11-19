export const API_KEY = '969df4a41c3c11dd391c3744c67609b9';
export const BASE_URL = 'https://api.themoviedb.org/3'
export const LANGUAGE = 'pl - PL'
export const createURL = (url, props) => BASE_URL + url + '?' + `api_key=${ API_KEY }` + '&' + props + `&` + `language=${LANGUAGE}`
