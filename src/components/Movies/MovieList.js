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
        <div className="movieList">
            <NewMovie handlePosting={handlePosting} />
            {movies.map(movie => (
                <div key={movie.id} className="movieCard">
                    <h1>Title: {movie.title}</h1>
                    <div>
                        Year: {movie.year} <br />
                        Plot: {movie.plot} <br />
                        Rating: {movie.rating} <br />
                        <button onClick={() => handleDelete(movie.id)}>Delete</button>
                    </div>
                </div>
            ))}
           
        </div>
    )

}
export default MovieList
