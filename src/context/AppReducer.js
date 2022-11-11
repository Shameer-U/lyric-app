export default (state, action) => {
    switch(action.type) {
      case 'FETCH_TRACKS':
        return {
          ...state, tracks: action.payload.trackList, search: action.payload.search, status: action.payload.status, fetching: action.payload.fetching
        }
      case 'FETCH_LYRICS':
        return {
          ...state, selected_lyrics: action.payload.lyrics, status: action.payload.status, fetching: action.payload.fetching
        }
      case 'FETCH_TRACK_DETAILS':
        return {
            ...state, selected_track_details: action.payload.trackDetails, status: action.payload.status, fetching: action.payload.fetching
        }
      default:
        return state;
    }
}