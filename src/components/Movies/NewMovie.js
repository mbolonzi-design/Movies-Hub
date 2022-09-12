import React, {useState} from 'react';
import './NewMovie.css';




function NewMovie({handlePosting}){

  const [movieData, setMovieData] = useState({
    title: '',
    year: '',
    plot: '',
    rating: ''
  });

  function handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:9292/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
    .then(response => response.json())
    .then(data => {
      handlePosting(data);
  });

  setMovieData({
    title: '',
    year: '',
    plot: '',
    rating: ''
  });
}
 function handleChange(e){
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div className="newMovie">
      <h3>Add New Movie</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={movieData.title} onChange={handleChange} />
        <label>Year:</label>
        <input type="text" name="year" value={movieData.year} onChange={handleChange} />
        <label>Plot:</label>
        <input type="text" name="plot" value={movieData.plot} onChange={handleChange} />
        <label>Rating:</label>
        <input type="text" name="rating" value={movieData.rating} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Movie</button>
      </form>
    </div>
  );
}
export default NewMovie;