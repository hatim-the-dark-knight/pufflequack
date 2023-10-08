import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SearchBar.css'
import data from '../../utils/categories.json'

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const filteredItems = data.map((r) => r.name).filter((name) => name.includes(query));
  // console.log(filteredItems);

  const navigate = useNavigate();
  const onSearchEnterPressed = (e) => {
    if (e.key === "Enter") {
        if (query) {
            navigate('/pufflequack/easydineouts/search', {state: query}); // Pass query as state
        } 
    }
  }

  const onSearchBarClicked= (e) => {
    document.getElementById("drop-down-opts").classList.remove("hidden");
  }

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    // filteredItems = data.filter((restaurant) => (restaurant.name.toLowerCase().includes(query)));
  };

  return (
    <div className="search-bar">
        <input type="text" onClick={onSearchBarClicked} onKeyDown={onSearchEnterPressed} onChange={handleChange} autoComplete="off" className="form-control form-input" name="location-search" id="location-search" placeholder="Search Restaurants.." />
        <div id="drop-down-opts" className="hidden">
        {
          filteredItems.map((item, k) => {
            return(
              <div key={k} > 
                <Link to="/pufflequack/easydineouts/search" className="dropdown-item" state={{state: item}}>
                  {item} 
                </Link>
              </div>
            )
          })
        }
        </div>
      </div>
  )
}

export default SearchBar