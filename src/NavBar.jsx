import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
 return (
   <nav className="navbar">
     <Link to="/" className="nav-link">
       <img 
         src="/home.png" 
         alt="Home Icon" 
         style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
       />
       Home
     </Link>
     <Link to="/about" className="nav-link">
       <img 
         src="/about.png" 
         alt="About Icon" 
         style={{ width: "1.5vw", height: "1.5vw", marginRight: "0.5vw" }} 
       />
       About
     </Link>
   </nav>
 );
}

export default NavBar;