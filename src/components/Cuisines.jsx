import React from 'react'
import { useNavigate } from 'react-router-dom'
import CuisineContent from './CuisineContent/CuisineContent'
import Header from './common/Header/Header'

const Cuisines = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <>
        <i class="back-btn bi-arrow-left" style={{paddingLeft: '2rem'}} onClick={goBack}></i>
        <Header/>
        <CuisineContent/>
    </>
  )
}

export default Cuisines


