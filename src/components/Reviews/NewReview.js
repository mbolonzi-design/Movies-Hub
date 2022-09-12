import React, {useState} from 'react';
import './NewReview.css';

function NewReview({handlePosting}){

  const [reviewData, setReviewData] = useState({
    title: '',
    content: '',
    rating: '',
    movie_id: ''
  });

  function handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:9292/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    .then(response => response.json())
    .then(data => {
      handlePosting(data);
  });

  setReviewData({
    title: '',
    content: '',
    rating: '',
    movie_id: ''
  });
}

  function handleChange(e){
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div>
      <h3>Add Review</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={reviewData.title} onChange={handleChange} />
        <label>Content:</label>
        <input type="text" name="content" value={reviewData.content} onChange={handleChange} />
        <label>Rating:</label>
        <input type="text" name="rating" value={reviewData.rating} onChange={handleChange} />
        <label>Movie ID:</label>
        <input type="text" name="movie_id" value={reviewData.movie_id} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Review</button>
      </form>

    </div>
  );
}
export default NewReview;