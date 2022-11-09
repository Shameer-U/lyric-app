export default (state, action) => {
    switch(action.type) {
      case 'FETCH_TRACKS':
        return {
          ...state, tracks: action.payload
        }
      case 'FETCH_LYRICS':
        return {
          ...state, selected_lyrics: action.payload
        }
      case 'FETCH_TRACK_DETAILS':
        return {
            ...state, selected_track_details: action.payload
        }
      default:
        return state;
    }
}