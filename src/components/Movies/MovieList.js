import React, {useEffect, useState} from 'react';
import NewMovie from './NewMovie';
import './MovieList.css';
import {useNavigate} from 'react-router-dom';

function MovieList(){

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:9292/movies')
        .then(response => response.json())
        .then(data => setMovies(data));
    }, []);

    function handlePosting(newMovie){
        setMovies([...movies, newMovie]);
    }

    function handleDelete(id){
        fetch(`http://localhost:9292/movies/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            const updatedMovies = movies.filter(movie => movie.id !== id);
            setMovies(updatedMovies);
        });
        navigate('/movies');
    }

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id} className="movieCard">
                    <h1>{movie.title}</h1>
                    <div>
                        {movie.year} <br />
                        {movie.plot} <br />
                        {movie.rating} <br />
                        <button onClick={() => handleDelete(movie.id)}>Delete</button>
                    </div>
                </div>
            ))}
            <NewMovie handlePosting={handlePosting} />
        </div>
    )

}
export default MovieList
