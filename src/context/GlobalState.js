import axios from 'axios';
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
   tracks: [],
   selected_lyrics: '',
   selected_track_details: {},
   search: false,
   status: false,
   fetching : false,
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const fetchTracks = () => {
    let trackList = [];
    dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: false, status:true, fetching:true}});

    fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        return res.json();
    })
    .then(res => {
        if (res.message.header.status_code === 200) {
          trackList = res.message.body.track_list;
          dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: false, status:true, fetching:false}});
        } else {
           dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: false, status:false, fetching:false}});
        }
    })
    .catch(err => {
        console.log('fetchTracks-error',err);
        dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: false, status:false, fetching:false}});
    });
  }

  const searchTracks = (searchTerm) => {
      let trackList = [];
      dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: true, status:true, fetching:true}});

      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${searchTerm}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        console.log('response', res);
        if (res.data.message.header.status_code === 200) {
            trackList = res.data.message.body.track_list;
            dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: true, status:true, fetching:false}});
        } else {
            dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: true, status:false, fetching:false}});
        }  
        
      })
      .catch(err => {
        console.log('searchTracks-error', err);
        dispatch({type: 'FETCH_TRACKS', payload: {trackList, search: true, status:false, fetching:false}});
      });
  }

  const fetchLyrics = async (id) => {
    let lyrics = '';
    let trackDetails = {};

    try {
            const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
            const response = await res.json();

            if (response.message.header.status_code === 200) {
              lyrics = response.message.body.lyrics.lyrics_body;
              dispatch({type: 'FETCH_LYRICS', payload: {lyrics, status:true, fetching:false} });
            } else {
              dispatch({type: 'FETCH_LYRICS', payload: {lyrics, status:false, fetching:false} });
            }


            fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                  return res.json();
              })
              .then(res => {
                  if (res.message.header.status_code === 200) {
                    trackDetails = res.message.body.track;
                    dispatch({type: 'FETCH_TRACK_DETAILS', payload: {trackDetails, status:true, fetching:false}});
                  } else {
                     dispatch({type: 'FETCH_TRACK_DETAILS', payload: {trackDetails, status:true, fetching:false}});
                  }

                  
              })
              .catch(err => {
                  console.log('fetchLyrics-error',err);
                  dispatch({type: 'FETCH_TRACK_DETAILS', payload: {trackDetails, status:false, fetching:false}});
              });
    }
    catch (err) {
        console.log('fetchLyrics-error', err);
        dispatch({type: 'FETCH_LYRICS', payload: {lyrics, status:false, fetching:false} });
        dispatch({type: 'FETCH_TRACK_DETAILS', payload: {trackDetails, status:false, fetching:false} });
    }
  }

  return (
    <GlobalContext.Provider value={
                                    {
                                        tracks: state.tracks,
                                        selected_track_details: state.selected_track_details,
                                        selected_lyrics: state.selected_lyrics,
                                        search: state.search,
                                        status: state.status,
                                        fetching: state.fetching,
                                        fetchTracks,
                                        searchTracks,
                                        fetchLyrics,
                                    }
                                  }
    >
      {children}
    </GlobalContext.Provider>
  );
}