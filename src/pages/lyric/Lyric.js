import { useParams } from "react-router";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Lyric = () => {
    const { id } = useParams();
    const { fetchLyrics, selected_lyrics } = useContext(GlobalContext);

    useEffect(() => {
        fetchLyrics(id);
    }, []);

    return (
        <>
            
        </>
    );
}

export default Lyric;