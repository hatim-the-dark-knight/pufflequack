import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const navigate = useNavigate();
  
  const goBack = () => {
    navigate('/pufflequack/easydineouts/profile');
  }

  return (
    <div className="h-container">
      <div className="top-bar">
        <span className="location-label">
          <i className='bi-geo-alt-fill'></i>&nbsp;
          Smart City, Kochi
        </span>
        <i className="bi-person-circle" onClick={goBack}></i>
      </div>
    </div>
  )
}

export default Header