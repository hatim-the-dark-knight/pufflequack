import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import './SearchBar.css'
import data from '../../utils/categories.json'

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const filteredItems = data.map((r) => r.name).filter((name) => name.includes(query));
  // console.log(filteredItems);
  const onSearchBarClick= (e) => {
    document.getElementById("drop-down-opts").classList.remove("hidden");
  }
  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    // filteredItems = data.filter((restaurant) => (restaurant.name.toLowerCase().includes(query)));
  };
  return (
    <div className="search-bar">
        <input type="text" onClick={onSearchBarClick} onChange={handleChange} class="form-control form-input" name="location-search" id="location-search" placeholder="Search Restaurants.." />
        {/* <Search class="search-icn"/> */}
        <div id="drop-down-opts" className="hidden">
        {
          filteredItems.map((item, k) => {
            return(
              <button key={k} class="dropdown-item"> 
                <Link to="/pufflequack/search" state={{query: {item}}}>
                  {item} 
                </Link>
              </button>
            )
          })
        }
        </div>
      </div>
  )
}

export default SearchBar