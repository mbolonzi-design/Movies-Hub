import React, {useEffect, useState} from 'react';
import NewReview from './NewReview';


function Reviews() {

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

    return (
        <div>
            {reviews.map(review => (
                <div key={review.id} className="review-container">
                    <h1>{review.title}</h1>
                    <div>
                        {review.content}
                        {review.rating} <br />
                        {review.movie_id}
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </div>
                </div>
            ))}
            <NewReview handlePosting={handlePosting} />
        </div>
    );
}
export default Reviews;