import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import './search.css';
import { GlobalContext } from '../../context/GlobalState';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { tracks, searchTracks } = useContext(GlobalContext);

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(searchTerm === '') {
            return alert('Please enter search term');
        }

        searchTracks(searchTerm);
    }

    return (
        <div className="search-container">
            <h1>
                <i className="fas fa-music" /> Search For A Song
            </h1>
            <p>Get the lyrics for any song</p>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={searchTerm} placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit"><FaSearch /></button>
                </form>
            </div>
        </div>
    );
    }

export default Search;