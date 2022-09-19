import React, {useEffect, useState} from 'react';


const Home = () => {

    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/tv_shows')
        .then(response => response.json())
        .then(data => setTvShows(data));
    }, []);


    return(
        <div>
            <h1>TV Shows</h1>
            <div>
                {tvShows.map(tvShow => (
                    <div key={tvShow.id}>
                        <h1>{tvShow.title}</h1>
                        <div>
                            Year: {tvShow.year} <br />
                            Plot: {tvShow.plot} <br />
                            Rating: {tvShow.rating} <br />
                            Review: {tvShow.review} <br />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;