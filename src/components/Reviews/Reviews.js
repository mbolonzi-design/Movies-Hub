import React, {useEffect, useState} from 'react';
import NewReview from './NewReview';
import LikeButton from '../LikeButton';
import './Reviews.css';


function Reviews({onUpdateReview}) {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/reviews')
        .then(response => response.json())
        .then(data => setReviews(data));
    }, []);

    function handlePosting(newReview){
        setReviews([...reviews, newReview]);
    }

    function handleDelete(id){
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            const updatedReviews = reviews.filter(review => review.id !== id);
            setReviews(updatedReviews);
        });
    }

    // function handleEdit(id, review){
    //     fetch(`http://localhost:9292/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     });
    // }

    // function updateReview(editedReview){
    //     setReviews([...reviews, editedReview]);
    // }


    return (
        <div className="review-container">
            <NewReview handlePosting={handlePosting} />
            <hr />
            <h2>Reviews</h2>
            {reviews.map(review => (
                <div key={review.id} className="review-card">
                    <h3>Title: {review.title}</h3>
                    <div className="review">
                        <strong>Comment:</strong> {review.content} <br />
                        <strong>Rating:</strong> {review.rating} <br />
                        <strong>Movie_Id:</strong> {review.movie_id} <br />
                    </div>
                    <div className='btn'>
                        <LikeButton />
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Reviews;