import { Link } from 'react-router-dom';
import './trackItem.css';

const TrackItem = (props) => {
    const { track } = props;

    return (
        <div className="track-item">
            <h3 className="track-heading">
                {(track?.artist_name?.length > 70) ? track.artist_name.substring(0, 70) + '...' : track?.artist_name}
            </h3>
            <div className="track-body">
                <div className="track-details">
                    <div> 
                        <strong> <i className="fas fa-play" /> Track </strong> : {' '}
                        {(track?.track_name?.length > 30) ? track.track_name.substring(0, 50) + '...' : track?.track_name}
                    </div>
                    <div> 
                        <strong> <i className="fas fa-compact-disc" /> Album </strong> : {' '}
                        {(track?.album_name?.length > 30) ? track.album_name.substring(0, 50) + '...' : track?.album_name}
                    </div>
                </div>
                <div>
                    <Link
                        to={`lyric/track/${track.track_id}`}
                    >
                        <span className='track-btn'>View Lyrics</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TrackItem