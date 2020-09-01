import React from 'react'
import './Body.css';
import ReactPlayer from 'react-player';

function Body() {
    return (
        
        <div className="row">
            <h2 className="name_letter">SODA ORIGINALS</h2>

            <div className="row_posters">
                
            <ReactPlayer className="iframe1" url='https://www.youtube.com/embed/jPE9FFWxqyM' allowfullscreen />

             
                
            </div>
                    
        </div>
    )
}

export default Body
