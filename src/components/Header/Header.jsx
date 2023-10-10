import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, failed);
  // }, []);

  // const [location, setLocation] = useState(null);

  // const success = (position) => {
  //   console.log(position);
  //   setLocation(position.coords);
  // }

  // const failed = (position) => {
  //   setLocation(null);
  //   console.log("failed");
  // }

  const navigate = useNavigate();
  
  const goBack = () => {
    navigate('/pufflequack/profile/');
  }

  return (
    <div className="h-container">
      <div className="top-bar">
        <span className="location-label">
          <i className='bi-geo-alt-fill'></i>&nbsp;
          Bangalore, India
          {/* {(location === null) ? "Your location" : `(${location.latitude}, ${location.longitude})`} */}
        </span>
        <i className="bi-person-circle" onClick={goBack}></i>
      </div>
    </div>
  )
}

export default Header