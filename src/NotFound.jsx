import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import NavBar from './NavBar';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {/* <NavBar /> */}
      <div style={{ textAlign: "center", marginTop: "10vh" }}>
        <h1 className="page404">404 - Page Not Found</h1>
        <img 
          src="/404.png" 
          alt="404 Error Icon" 
          className="page404 img" 
        />
        <p style={{ marginTop: "2vh", fontSize: "1.5vw" }}>
          The page you are looking for does not exist. Redirecting to the home page in 10 seconds.
        </p>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
}

export default NotFound;
