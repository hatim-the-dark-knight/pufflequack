import React from 'react'
import {Link} from 'react-router-dom'
import './CuisineContent.css'
import Card from '../Card/Card'

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

export default CuisineContent