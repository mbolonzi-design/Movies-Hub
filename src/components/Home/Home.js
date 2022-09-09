import React from "react";
import '../Home/Home.css'
// import img1 from './images/stranger.jpg'

function Home(){
    return(
        <div className="hero">
            <div className="title">
                <h3>Your official movie palace in the region.</h3>
                <h4>Our Collection</h4>
            </div>
            <div className="collections-container">
                <div className="movieCard">
                    <h5>Stranger Things</h5>
                    <img src="./images/stranger.jpg" alt="Stranger Things" />
                    <p>
                        Stranger Things is an American science fiction drama television series created by the Duffer Brothers, who also serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen. Its first season was released on Netflix on July 15, 2016.
                    </p>
                </div>
                <div className="movieCard">
                    <h5>Home Alone</h5>
                    <img src="./images/home alone.jpg" alt="Home Alone" />
                    <p>
                        Home Alone is a 1990 American Christmas comedy film directed by Chris Columbus and written and produced by John Hughes. The first film in the Home Alone franchise, the film stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O'Hara. Culkin plays Kevin McCallister, a boy who defends his suburban Chicago home from burglars after his family accidentally leaves him behind on their Christmas vacation to Paris.
                    </p>
                </div>
                <div className="movieCard">
                    <h5>John Wick 4</h5>
                    <img src="./images/john-wick-4.jpg" alt="Johnwick" />
                    <p>
                        John Wick: Chapter 4[1] (or simply JW4) is an upcoming American neo-noir action thriller film which is serving as the direct sequel to 2019's John Wick: Chapter 3 – Parabellum, as well as the fourth installment in the John Wick film series. Directed by Chad Stahelski, with a script co-written by Shay Hatten and Michael Finch, and based on characters created by Derek Kolstad, it is produced by Stahelski, Basil Iwanyk and Erica Lee. Starring Keanu Reeves returning as the title character, the film is produced by Thunder Road Pictures and 87North Productions.
                    </p>
                </div>
                <div className="movieCard">
                    <h5>Click Click Bang</h5>
                    <img src="./images/click-bang.jpeg" alt="Click Click Bang" />
                    <p>
                        When Kev, a super talented footballer's dream come crushing down, he is left with no choice but to join the criminal world.
                        In the process of trying to win the battle, he loses the war.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home;