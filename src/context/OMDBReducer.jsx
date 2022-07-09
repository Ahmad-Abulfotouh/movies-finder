function OMDBReducer(state, action) {
  switch (action.type) {
    case 'GET_MOVIES': return {
        ...state,
        movies: action.payload,
        loading: false
    }
    case 'GET_MOVIE': return {
        ...state,
        movie: action.payload,
        loading: false
    }
    case 'SET_LOADING': return {
        ...state,
        loading: true
    }
    default: return state
  }
  return (
    <div>OMDBReducer</div>
  )
}
export default OMDBReducer