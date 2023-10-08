import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './common/Header/Header'
import OffersContent from './OffersContent/OffersContent'

const TopOffers = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <>
        <i className="back-btn bi-arrow-left" style={{paddingLeft: '2rem'}} onClick={goBack}></i>
        <Header/>
        <OffersContent/>
    </>
  )
}

export default TopOffers


