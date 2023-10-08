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
    <div className=''>
        <i className="btn-back bi-arrow-left" onClick={goBack}></i>
        <Content title="Cuisines"/>
    </div>
  )
}

export default Cuisines