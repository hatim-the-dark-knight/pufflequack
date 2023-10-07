import React from 'react'
import './Card.css'

const Card = (props) => {
    const { name, place, category, rating, price, image, offers } = props.card;
  return (
    <div className="card">
        <img src="/pufflequack/restaurant-i.jpg" alt="" className="card-img-top" />
        {offers !== 0 ? <span className="bottom-left">{offers}% OFF ON MENU</span> : null}
        <div className="card-body">
        <h4 className="card-name">{name}</h4>
        <div className="top-content">
            <span className="card-place">{place}</span>
            <div className="card-rating">{rating}</div>
        </div>
        <div className="bottom-content">
            <div className="card-category">{category}</div>
            <div className="card-price">{price}</div>
        </div>
        </div>
    </div>
  )
}

export default Card