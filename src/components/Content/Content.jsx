import React from 'react'
import {Link} from 'react-router-dom'
import './Content.css'
import data from '../../utils/categories.json'
import Card from '../Card/Card'

const Content = (props) => {

  let contentItems = data;
  if(props.category !== "") {
    contentItems = data.filter((restaurant) => {
      return restaurant.category === props.category;
    });
  }

  return (
    <div className="container">
      <div className="content">
        <div className="card-grid">
        {
          contentItems.map((card, i) => {
            return(
              <Link to={`/pufflequack/easydineouts/restaurants/${i}`} key={i} className="">
                <Card card={card}/>
              </Link>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Content


