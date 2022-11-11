import { useParams } from "react-router";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './lyric.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../../components/spinner/Spinner';

const Lyric = () => {
    const { id } = useParams();
    const { fetchLyrics, selected_lyrics, selected_track_details, status, fetching } = useContext(GlobalContext);

    useEffect(() => {
        fetchLyrics(id);
    }, []);

    return (
        <>
            {fetching && <Spinner />}
            <Link to="/" className="back-btn">
                Go Back
            </Link>

            <div className="lyric-container">
                <h3 className="lyric-header">
                    {selected_track_details?.track_name} by <span className="text-secondary">{selected_track_details?.artist_name}</span>
                </h3>
                <div className="lyric-body">
                    <p className="lyric-text">{selected_lyrics}</p>
                </div>
                <div className="track-detail">
                    <ul>
                        <li>
                            <strong>Album Name</strong> : {selected_track_details?.album_name}
                        </li>
                        <li>
                            <strong>Song Genre</strong> :{" "}
                            {selected_track_details?.primary_genres?.music_genre_list.length === 0
                            ? "NO GENRE AVAILABLE"
                            : selected_track_details?.primary_genres?.music_genre_list[0]?.music_genre?.music_genre_name}
                        </li>
                        <li>
                            <strong>Explicit Words</strong> :{" "}
                            {selected_track_details?.explicit === 0 ? "No" : "Yes"}
                        </li>
                        <li>
                            <strong>Last Updated</strong> :{" "}
                            <Moment format="DD/MM/YYYY">
                                {selected_track_details?.updated_time}
                            </Moment>
                        </li>
                    </ul>
                </div>
            </div>   
        </>
    );
}

export default Lyric;