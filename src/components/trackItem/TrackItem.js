import { Link } from 'react-router-dom';
import './trackItem.css';

const TrackItem = (props) => {
    const { track } = props;

    return (
        <div className="track-item">
            <div className="track-body">
                <h5>{track.artist_name}</h5>
                <div className="track-details">
                    <div> 
                        <strong> <i className="fas fa-play" /> Track </strong> : {track.track_name}
                    </div>
                    <div> 
                        <strong> <i className="fas fa-compact-disc" /> Album </strong> : {track.album_name}
                    </div>
                </div>
                    <span className='track-btn'>View Lyrics</span>
            </div>
        </div>
    )
}

export default TrackItem