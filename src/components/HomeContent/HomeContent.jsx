import React from 'react'
import {Link} from 'react-router-dom'
import './HomeContent.css'
import data from '../../utils/categories.json'
import Card from '../Card/Card'

const HomeContent = () => {
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

export default HomeContent


