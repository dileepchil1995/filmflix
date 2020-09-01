import React from 'react';
import './Banner.css';

function Banner() {
    return (

        <header
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://images.indianexpress.com/2017/04/baahubali-2-movie-review-12002.jpg"
            )`,
            backgroundPosition: "center center",
        }}
        >
        <div className="poster_banner">
            
           

        </div>
        </header>
    )
}

export default Banner
