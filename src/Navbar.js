import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Button from '@material-ui/core/Button';


function Nav() {
    const [show, handleShow] = useState(false); 
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <h3 className="logo_text">soda films</h3>
            
            <div className="nav_avatar">
                    
                   
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className="button_color"
                    >
                        Movies
                    </Button>
                    
                        
           
            </div>
            
            
            
        </div>
    )
}

export default Nav
