import React, {useState} from 'react';



function EditReview({review, id, onUpdateReview}) {

    const [rating, setRating] = useState("")

    function handleFormSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: rating
            })
        })
        .then(response => response.json())
        .then((editedReview) => onUpdateReview(editedReview));
    }
    return(
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="rating"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
                <input type="submit" value="Edit Review" />
            </form>
    )
}

export default EditReview;