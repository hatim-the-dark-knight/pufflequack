import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, failed);
  }, []);

  const [location, setLocation] = useState(null);

  const navigate = useNavigate();
  
  const goBack = () => {
    navigate('/pufflequack/easydineouts/profile');
  }

  const success = (position) => {
    console.log(position);
    setLocation(position.coords);
  }

  const failed = (position) => {
    setLocation(null);
    console.log("failed");
  }

  return (
    <div className="h-container">
      <div className="top-bar">
        <span className="location-label">
          <i className='bi-geo-alt-fill'></i>&nbsp;
          {(location === null) ? "Your location" : `(${location.latitude}, ${location.longitude})`}
        </span>
        <i className="bi-person-circle" onClick={goBack}></i>
      </div>
    </div>
  )
}

export default Header