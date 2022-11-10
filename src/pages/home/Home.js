import { useEffect, useContext } from 'react';
import TrackItem from '../../components/trackItem/TrackItem';
import './home.css';
import { GlobalContext } from '../../context/GlobalState';
import Search from '../../components/search/Search';

function Home() {
  const { tracks, search, fetchTracks } = useContext(GlobalContext);
  
  useEffect(() => {
    fetchTracks();
  }, []);

  return (
      <>
        <Search />
        <section className='home'>
          {!search && (
            <div className='top-10'>
                <h2>Top 10</h2>
            </div>
            )
          }
          <div className='home-container'>
              {tracks?.map(item => (
                      <TrackItem key={item.track.track_id} track={item.track} />
                  ))}
          </div>
        </section>
      </>
  );
}

export default Home;
