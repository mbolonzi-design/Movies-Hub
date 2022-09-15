import React, {useEffect, useState} from 'react';
import NewReview from './NewReview';
import EditReview from '../EditReview/EditReview';
import './Reviews.css';


function Reviews({review, updateReview}) {

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

    function handleEditReview(updatedReview){
        const updatedReviews = reviews.map(review => {
            if(review.id === updatedReview.id){
                return updatedReview;
            } else {
                return review;
            }
        });
        setReviews(updatedReviews);
    }

    return (
        <div className="review-container">
            <NewReview handlePosting={handlePosting} />
            <hr />
            <h2>Reviews</h2>
            {reviews.map(review => (
                <div key={review.id} className="review-card">
                    <h4>Title: {review.title}</h4>
                    <div className="review">
                        Comment: {review.content} <br />
                        Rating: {review.rating} <br />
                        Movie_Id: {review.movie_id} <br />
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Reviews;