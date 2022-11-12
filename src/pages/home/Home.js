import { useEffect, useContext } from 'react';
import TrackItem from '../../components/trackItem/TrackItem';
import './home.css';
import { GlobalContext } from '../../context/GlobalState';
import Search from '../../components/search/Search';
import Spinner from '../../components/spinner/Spinner';

function Home() {
  const { tracks, search, status, fetching, fetchTracks } = useContext(GlobalContext);
  
  useEffect(() => {
    fetchTracks();
  }, []);

  return (
      <>
        {fetching && <Spinner />}
        <Search />
        <section className='home'>
          {!search && (
            <div className='top-10'>
                <h2>Top 10 Tracks</h2>
            </div>
            )
          }
          <div className='home-container'>
              {!fetching ? (
                (status && tracks.length > 0 ) ?  tracks?.map(item => (
                      <TrackItem key={item.track.track_id} track={item.track} />
                  )) : (
                <div className='error'>
                  <h4>Data not available</h4>
                </div>
                )
                ) : null
              }
          </div>
        </section>
      </>
  );
}

export default Home;
