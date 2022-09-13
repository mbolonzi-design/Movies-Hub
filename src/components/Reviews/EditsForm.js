// import React, {useState} from 'react';

// function EditsForm({review, onUpdateReview}) {

//     const [title, setTitle] = useState("")
//     const [content, setContent] = useState("")
    
//         function handleSubmit(e){
//             e.preventDefault();
//             fetch(`http://localhost:9292/reviews/${review.id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     title: title,
//                     content: content,
//                 })
//             })
//             .then(response => response.json())
//             .then((updatedReview) => onUpdateReview(updatedReview));
//         }
    
//         return (
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="title">Title</label>
//                 <input type="text" name="title" defaultValue={review.title} />
//                 <label htmlFor="content">Comment</label>
//                 <input type="text" name="content" defaultValue={review.content} />
//                 <input type="submit" value="Edit Review" />
//             </form>
//         )
//     }

//     export default EditsForm;