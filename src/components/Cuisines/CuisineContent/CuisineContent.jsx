import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './CuisineContent.css'

import data from '../../../utils/categories.json'

const CuisineContent = () => {
  return (
    <div className="container">
       <div className="content">
        <div className="content-title">
          Popular Restaurants
        </div>
        <div className="card-grid">
        {
          data.map((card, i) => {
            return(
              <div className="card">
                <img src="/restaurant-i.jpg" alt="" className="card-img-top" />
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
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default CuisineContent