import React, {useEffect, useState} from 'react';
import './MovieList.css';

function MovieList(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/movies')
        .then(response => response.json())
        .then(data => setMovies(data));
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id} className="movie-container">
                    <h1>{movie.title}</h1>
                    <div>
                        {movie.plot}
                        {movie.year} <br />
                        {movie.rating}
                    </div>
                </div>
            ))}
        </div>
    );

}
export default MovieList
