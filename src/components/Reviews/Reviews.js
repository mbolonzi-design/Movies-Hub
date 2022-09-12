import React, {useEffect, useState} from 'react';


function Reviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/reviews')
        .then(response => response.json())
        .then(data => setReviews(data));
    }, []);


    return (
        <div>
            {reviews.map(review => (
                <div key={review.id} className="review-container">
                    <h1>{review.title}</h1>
                    <div>
                        {review.content}
                        {review.rating} <br />
                        {review.movie_id}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Reviews;