import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import Content from './Content/Content'

const Cuisines = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <>
        <i className="back-btn bi-arrow-left" style={{paddingLeft: '2rem'}} onClick={goBack}></i>
        <Content title="Cuisines"/>
    </>
  )
}

export default Cuisines