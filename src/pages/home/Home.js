import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import TrackItem from '../../components/trackItem/TrackItem';
import './home.css';
import { GlobalContext } from '../../context/GlobalState';

function Home() {
  const { tracks, fetchTracks } = useContext(GlobalContext);
  console.log('tracks outside useEffect', tracks);
  

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <section className='home-container'>
        {tracks?.map(item => (
                <TrackItem key={item.track.track_id} track={item.track} />
            ))}
    </section>
  );
}

export default Home;
