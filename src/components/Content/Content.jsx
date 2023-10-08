import React from 'react'
import {Link} from 'react-router-dom'
import './Content.css'
import data from '../../utils/categories.json'
import Card from '../Card/Card'

const Content = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="content-title">
          {props.title}
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

export default Content


