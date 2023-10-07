import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import data from '../../../utils/categories.json'
import SearchBar from '../../SearchBar/SearchBar'

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
  
  const onSearchBarClick= (e) => {
    document.getElementById("drop-down-opts").classList.remove("hidden");
  }
  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

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
    </div>
  )
}

export default Header