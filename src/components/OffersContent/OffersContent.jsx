import React from 'react'
import {Link} from 'react-router-dom'
import './OffersContent.css'
import Card from '../Card/Card'

import data from '../../utils/categories.json'

const offerRestaurants = data.filter((restaurant) => (restaurant.offers != 0));

const OffersContent = () => {
  return (
    <div className="container">
       <div className="content">
        <div className="card-grid">
        {
          offerRestaurants.map((card, i) => {
            return(
              <Link to={`/pufflequack/${i}`} key={i} className="">
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

export default OffersContent