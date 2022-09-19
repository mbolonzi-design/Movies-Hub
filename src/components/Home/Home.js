import React, {useEffect, useState} from 'react';
import LikeButton from '../LikeButton';

import './Home.css';


const Home = () => {

    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/tv_shows')
        .then(response => response.json())
        .then(data => setTvShows(data));
    }, []);



    return(
        <div>
            <div id='intro'>
                <h3>Welcome to the Movie Database</h3>
            </div>
            <div id='show_item'>
                {tvShows.map(tvShow => (
                    <div className='shows' key={tvShow.id}>
                        <h3>{tvShow.title}</h3>
                        <div>
                            <strong>Year:</strong> {tvShow.year} <br />
                            <strong>Plot:</strong> {tvShow.plot} <br />
                            <strong>Rating:</strong> {tvShow.rating} <br />
                            <strong>Review:</strong> {tvShow.review} <br />
                        </div>
                        <div id='likes'><LikeButton /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;