import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
   tracks: [],
   selected_track: {}
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const fetchTracks = () => {
    let trackList = [];

    // fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=368b2deb35cda00eba43469e43991489`)
    // .then(res => {
    //     return res.json();
    // })
    // .then(res => {
    //     console.log('response', res);
    //     if (res.message.header.status_code === 200) {
    //       trackList = res.message.body.track_list;
    //     }

    //     dispatch({type: 'FETCH_TRACKS', payload: trackList});
    // })
    // .catch(err => {
    //     console.log('error',err);
    //     dispatch({type: 'FETCH_TRACKS', payload: trackList});
    //   }
    // );

    trackList = [
            {
              "track": {
                  "track_id": 247059621,
                  "track_name": "Varaha Roopam Daiva Va Rishtam",
                  "track_name_translation_list": [],
                  "track_rating": 77,
                  "commontrack_id": 152545963,
                  "instrumental": 0,
                  "explicit": 0,
                  "has_lyrics": 1,
                  "has_subtitles": 1,
                  "has_richsync": 0,
                  "num_favourite": 14,
                  "album_id": 54672150,
                  "album_name": "Kantara (Original Motion Picture Soundtrack) - EP",
                  "artist_id": 55076010,
                  "artist_name": "B. Ajaneesh Loknath feat. Sai Vignesh",
                  "track_share_url": "https://www.musixmatch.com/lyrics/B-Ajaneesh-Loknath-Sai-Vignesh/Varaha-Roopam-Daiva-Va-Rishtam?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "track_edit_url": "https://www.musixmatch.com/lyrics/B-Ajaneesh-Loknath-Sai-Vignesh/Varaha-Roopam-Daiva-Va-Rishtam/edit?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "restricted": 0,
                  "updated_time": "2022-10-29T08:46:58Z",
                  "primary_genres": {
                      "music_genre_list": [
                          {
                              "music_genre": {
                                  "music_genre_id": 16,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "Soundtrack",
                                  "music_genre_name_extended": "Soundtrack",
                                  "music_genre_vanity": "Soundtrack"
                              }
                          }
                      ]
                  }
              }
          },
          {
              "track": {
                  "track_id": 245061713,
                  "track_name": "Baller",
                  "track_name_translation_list": [],
                  "track_rating": 78,
                  "commontrack_id": 151241543,
                  "instrumental": 0,
                  "explicit": 0,
                  "has_lyrics": 1,
                  "has_subtitles": 1,
                  "has_richsync": 0,
                  "num_favourite": 5,
                  "album_id": 54061576,
                  "album_name": "Baller",
                  "artist_id": 55287394,
                  "artist_name": "Shubh feat. Ikky",
                  "track_share_url": "https://www.musixmatch.com/lyrics/Shubh-6/Baller?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "track_edit_url": "https://www.musixmatch.com/lyrics/Shubh-6/Baller/edit?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "restricted": 0,
                  "updated_time": "2022-10-31T15:57:52Z",
                  "primary_genres": {
                      "music_genre_list": [
                          {
                              "music_genre": {
                                  "music_genre_id": 1262,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "Indian",
                                  "music_genre_name_extended": "Indian",
                                  "music_genre_vanity": "Indian"
                              }
                          }
                      ]
                  }
              }
          },
          {
              "track": {
                  "track_id": 243160581,
                  "track_name": "Summer High",
                  "track_name_translation_list": [],
                  "track_rating": 83,
                  "commontrack_id": 149425088,
                  "instrumental": 0,
                  "explicit": 0,
                  "has_lyrics": 1,
                  "has_subtitles": 1,
                  "has_richsync": 1,
                  "num_favourite": 25,
                  "album_id": 53376781,
                  "album_name": "Summer High - Single",
                  "artist_id": 51617343,
                  "artist_name": "AP Dhillon",
                  "track_share_url": "https://www.musixmatch.com/lyrics/AP-Dhillon-1/Summer-High?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "track_edit_url": "https://www.musixmatch.com/lyrics/AP-Dhillon-1/Summer-High/edit?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "restricted": 0,
                  "updated_time": "2022-10-29T09:31:28Z",
                  "primary_genres": {
                      "music_genre_list": [
                          {
                              "music_genre": {
                                  "music_genre_id": 15,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "R&B/Soul",
                                  "music_genre_name_extended": "R&B/Soul",
                                  "music_genre_vanity": "R-B-Soul"
                              }
                          },
                          {
                              "music_genre": {
                                  "music_genre_id": 18,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "Hip Hop/Rap",
                                  "music_genre_name_extended": "Hip-Hop/Rap",
                                  "music_genre_vanity": "Hip-Hop-Rap"
                              }
                          }
                      ]
                  }
              }
          },
          {
              "track": {
                  "track_id": 231895265,
                  "track_name": "Akhiyaan",
                  "track_name_translation_list": [],
                  "track_rating": 77,
                  "commontrack_id": 140500388,
                  "instrumental": 0,
                  "explicit": 0,
                  "has_lyrics": 1,
                  "has_subtitles": 1,
                  "has_richsync": 1,
                  "num_favourite": 13,
                  "album_id": 50065032,
                  "album_name": "Akhiyaan - Single",
                  "artist_id": 44438891,
                  "artist_name": "Mitraz",
                  "track_share_url": "https://www.musixmatch.com/lyrics/Mitraz-1/Akhiyaan?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "track_edit_url": "https://www.musixmatch.com/lyrics/Mitraz-1/Akhiyaan/edit?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "restricted": 0,
                  "updated_time": "2022-08-22T12:57:19Z",
                  "primary_genres": {
                      "music_genre_list": [
                          {
                              "music_genre": {
                                  "music_genre_id": 17,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "Dance",
                                  "music_genre_name_extended": "Dance",
                                  "music_genre_vanity": "Dance"
                              }
                          }
                      ]
                  }
              }
          },
          {
              "track": {
                  "track_id": 243495510,
                  "track_name": "Deva Deva (From \"Brahmastra\")",
                  "track_name_translation_list": [],
                  "track_rating": 79,
                  "commontrack_id": 149689564,
                  "instrumental": 0,
                  "explicit": 0,
                  "has_lyrics": 1,
                  "has_subtitles": 1,
                  "has_richsync": 1,
                  "num_favourite": 11,
                  "album_id": 53490835,
                  "album_name": "Deva Deva (From \"Brahmastra\")",
                  "artist_id": 55114230,
                  "artist_name": "Pritam feat. Arijit Singh, Amitabh Bhattacharya & Jonita Gandhi",
                  "track_share_url": "https://www.musixmatch.com/lyrics/Pritam-Arijit-Singh-Amitabh-Bhattacharya-Jonita-Gandhi/Deva-Deva-From-Brahmastra?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "track_edit_url": "https://www.musixmatch.com/lyrics/Pritam-Arijit-Singh-Amitabh-Bhattacharya-Jonita-Gandhi/Deva-Deva-From-Brahmastra/edit?utm_source=application&utm_campaign=api&utm_medium=None%3A1409622888986",
                  "restricted": 0,
                  "updated_time": "2022-10-12T12:49:39Z",
                  "primary_genres": {
                      "music_genre_list": [
                          {
                              "music_genre": {
                                  "music_genre_id": 16,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "Soundtrack",
                                  "music_genre_name_extended": "Soundtrack",
                                  "music_genre_vanity": "Soundtrack"
                              }
                          },
                          {
                              "music_genre": {
                                  "music_genre_id": 1262,
                                  "music_genre_parent_id": 34,
                                  "music_genre_name": "Indian",
                                  "music_genre_name_extended": "Indian",
                                  "music_genre_vanity": "Indian"
                              }
                          }
                      ]
                  }
              }
          },
      ];

      dispatch({type: 'FETCH_TRACKS', payload: trackList});
  }

  return (
    <GlobalContext.Provider value={
                                    {
                                        tracks: state.tracks,
                                        fetchTracks,
                                    }
                                  }
    >
      {children}
    </GlobalContext.Provider>
  );
}