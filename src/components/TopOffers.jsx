import React from 'react'
import { useNavigate } from 'react-router-dom'
import Content from './Content/Content'

const TopOffers = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/pufflequack/home/");
  }
  return (
    <div className=''>
        <i className="btn-back bi-arrow-left" onClick={goBack}></i>
        <div className="content-title">
          Top Offers
        </div>
        <Content category=""/>
    </div>
  )
}

export default TopOffers


