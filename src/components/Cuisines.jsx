import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import Content from './Content/Content'
import Category from './Category/Category'

let category = "";

const Cuisines = (props) => {

  if(props.category === undefined) {
    category = "American";
  } else {
    category = props.category;
  }

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/pufflequack/easydineouts');
  }
  return (
    <div className='cuisines'>
        <i className="btn-back bi-arrow-left" onClick={goBack}></i>
        <div className="content-title">
          Cuisines
        </div>
        <Category />
        <Content category={category}/>
    </div>
  )
}

export default Cuisines