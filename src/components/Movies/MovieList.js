import React, {useEffect, useState} from 'react';
import NewMovie from './NewMovie';
import LikeButton from '../LikeButton';
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
            <hr />
            <h3>Our Collection</h3>
            <div className="moviesList">
                {movies.map(movie => (
                    <div key={movie.id} className="movieCard">
                        <h3>Title: {movie.title}</h3>
                        <div>
                            Year: {movie.year} <br />
                            Plot: {movie.plot} <br />
                            Rating: {movie.rating} <br />
                        </div>
                        <div className='btn' id='btn'>
                            <LikeButton />
                            <button onClick={() => handleDelete(movie.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default MovieList
