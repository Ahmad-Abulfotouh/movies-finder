import {createContext, useReducer} from 'react'
import OMDBReducer from './OMDBReducer'

const OMDBContext = createContext()

const OMDB_URL = 'https://www.omdbapi.com/'
const OMDB_TOKEN = 'f5c828d3'

export const OMDBProvider = ({children}) => {

	const initialState = {
		movies: [],
		movie: {},
		loading: false
	}

	// Set Loading
	const setLoading = () => dispatch({type: 'SET_LOADING'})

	const [state, dispatch] = useReducer(OMDBReducer, initialState)

	const searchMovies = async (searchValue) => {
		setLoading()

		const response = await fetch(`${OMDB_URL}?s=${searchValue}&apikey=${OMDB_TOKEN}`)
		const data = await response.json()

		dispatch({
			type: 'GET_MOVIES',
			payload: data.Search
		})
	}

	const getMovie = async (id) => {
		setLoading()

		const response = await fetch(`${OMDB_URL}?i=${id}&apikey=${OMDB_TOKEN}`)
		console.log(response)

		if(response.status === 404 ) window.location = '/notfound'
		else {
			const data = await response.json()

			dispatch({
				type: 'GET_MOVIE',
				payload: data
			})
		}
	}

	return <OMDBContext.Provider value={{
		...state,
		searchMovies,
		getMovie
	}}> {children} </OMDBContext.Provider>
}

export default OMDBContext
