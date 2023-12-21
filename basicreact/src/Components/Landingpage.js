import React,{useState} from 'react';
import '../Styles/Landingpage.css'
function LandingPage(){
    return(
    <>
    <div className='main'>
        <div className='left-section'>
            <h1>Fly With Us</h1>
            <p>Travelling for your destination with us anywhere you want to fly <br/>Travelling for free anywhere at the anytime at any place </p>
            <button onClick={(console.log("clicked"))}>Contact Us</button>

        </div>
        <div className="right-section">
        <img src="https://previews.123rf.com/images/blueringmedia/blueringmedia2203/blueringmedia220300595/183848195-travel-time-typography-design-illustration.jpg" alt="">
       </img>
        </div>

    </div>
    
    </>)
}
export default LandingPage