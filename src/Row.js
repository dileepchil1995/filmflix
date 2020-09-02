import React from 'react';
import './Row.css';

function Row() {
    return (
        <div className="row">
            <br />
            <br />
            <br />
            <br />
           <div className="row_content">
                <h1 className="text_align">Latest Movies</h1>

                        <div className="row_posters">
                            
                            <div>
                                <h2>Prayanam (2020)</h2>
                                    <img 
                                        
                                        className="row_poster"
                                        src="https://firebasestorage.googleapis.com/v0/b/soda-films.appspot.com/o/images%2FScreen%20Shot%202020-09-02%20at%2011.47.51%20am.png?alt=media&token=5c5fb266-4d1f-4bb4-95a3-33f11f9e1c03" 
                                        alt="" 
                                        
                                    />
                                </div>
                                <div>
                                <h2>A Lost Warrior (2020)</h2>
                                <img 
                                    
                                    className="row_poster"
                                    src="https://firebasestorage.googleapis.com/v0/b/soda-films.appspot.com/o/images%2FScreen%20Shot%202020-09-02%20at%2011.40.11%20am.png?alt=media&token=a94f6f2d-ef53-4190-b3c2-0ed03e07f165" 
                                    alt="" 
                                />
                                </div>
                                <div>
                                    <h2>THE WRIST (Eng Version)</h2>
                                <img 
                                    
                                    className="row_poster"
                                    src="https://firebasestorage.googleapis.com/v0/b/soda-films.appspot.com/o/images%2FScreen%20Shot%202020-09-02%20at%2012.00.04%20pm.png?alt=media&token=ccd122ad-269e-41db-8534-d47fe97f2e4e" 
                                    alt="" 
                                />
                                </div>
                                <div>
                                    <h2>BRIHANNALA (2020)</h2>
                                    <img 
                                        
                                        className="row_poster"
                                        src="https://firebasestorage.googleapis.com/v0/b/soda-films.appspot.com/o/images%2FScreen%20Shot%202020-09-02%20at%2012.41.30%20pm.png?alt=media&token=68fcc032-dbbf-426d-aa29-3c08aff82612" 
                                        alt="" 
                                    />
                                </div>
                        
                        </div>
            </div> 



            <div className="row_content">
                <h1 className="text_align">Teasers</h1>

                        <div className="row_posters">
                                <div>
                                    <h2></h2>
                                    <img 
                                        
                                        className="row_poster"
                                        src="" 
                                        alt="" 
                                    />
                                </div>
                            
                                
                        
                        </div>
            </div>    

            <div className="row_content">
                <h1 className="text_align">Series</h1>

                        <div className="row_posters">
                            
                            
                                
                        
                        </div>
            </div>    

            <div className="row_content">
                <h1 className="text_align">Songs</h1>

                        <div className="row_posters">
                            
                            
                                
                        
                        </div>
            </div>    


        </div>
    )
}

export default Row
