import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import data from '../../../utils/categories.json'

const restaurantNames = data.map((item) => item.name.toLowerCase());
console.log(restaurantNames);

const getFilteredItems = (query, items) => {
  if(!query) {
    return items;
  }
  query = query.toLowerCase();
  return items.filter((restaurant) => restaurant.includes(query));
}

const Header = () => {
  const [query, setQuery] = useState("");
  const filteredItems = getFilteredItems(query, restaurantNames);
  
  return (
    <div className="container">
      <div className="top-bar">
        <span className="location-label">
          Smart City, Kochi
        </span>
        <Link to="/pufflequack/fillProfile">
          <i class="bi-person-circle"></i>
          {/* <img src="/Burger_148.png" className="profile-icon">
          </img> */}
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" onChange={e => setQuery(e.target.value)} class="form-control form-input" name="location-search" id="location-search" placeholder="Search Restaurants.." />
      </div>
      <div>
        {
          filteredItems.map((item, k) => {
            return(
              <div key={k}> {item} </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Header