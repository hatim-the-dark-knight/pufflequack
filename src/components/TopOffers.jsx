import React from 'react'
import { useNavigate } from 'react-router-dom'
import Content from './Content/Content'

const TopOffers = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className=''>
        <i className="btn-back bi-arrow-left" onClick={goBack}></i>
        <Content title="Top Offers"/>
    </div>
  )
}

export default TopOffers


