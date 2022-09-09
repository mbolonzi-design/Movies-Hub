import React from "react";
import '../Home/Home.css'

function Home(){
    return(
        <>
            <h1 className="title">Movie Hub Kenya</h1>
            <div>
                <h2>We are the official movie palace in the region.</h2>
                <h4>Latest Movies</h4>
            </div>
            <div className="collections-container">
                <h3>Our Collection</h3>
                <h5>Stranger Things</h5>
                <img src="https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Stranger Things" />
                <h5>Home Alone</h5>
                <img src="../Home/src/images/2.jpg" alt="Home Alone" />
            </div>
        </>
    )
}
export default Home;