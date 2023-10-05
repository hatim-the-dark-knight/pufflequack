import React from 'react'
import {Link} from 'react-router-dom'
import './CuisineContent.css'

import data from '../../utils/categories.json'

const CuisineContent = () => {
  return (
    <div className="container">
       <div className="content">
        <div className="card-grid">
        {
          data.map((card, i) => {
            return(
              <Link to={`/pufflequack/${i}`} key={i} className="">
                <div className="card">
                  <img src="/pufflequack/restaurant-i.jpg" alt="/pufflequack/restaurant-i.jpg" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-name">{card.name}</h4>
                    <div className="top-content">
                      <span className="card-place">{card.place}</span>
                      <div className="card-rating">{card.rating}</div>
                    </div>
                    <div className="bottom-content">
                      <div className="card-category">{card.category}</div>
                      <div className="card-price">${card.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default CuisineContent