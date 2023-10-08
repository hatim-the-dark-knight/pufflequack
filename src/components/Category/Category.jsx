import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Category.css'
import data from '../../utils/categories.json'

const filteredItems = data.map((restaurant) => restaurant.category).filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

const Category = () => {
  return (
    <div className="c-container">
      <div className="category-list">
        {
            filteredItems.map((category, i) => {
                return(
                    <Link key={i} to={`/pufflequack/${category}`} className="menu-link">
                    <button className="menu-btn">
                        {category}
                    </button>
                </Link>
                )
            })
        }
      </div>
    </div>
  )
}

export default Category