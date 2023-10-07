import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './SearchPage.css'
import Card from '../Card/Card'
import data from '../../utils/categories.json'

const SearchPage = () => {
    const location = useLocation();
    const {query} = location.state;
    const {item} = query;
    console.log(query, item);
    const filteredItems = data.filter((i) => i.name.includes(item));

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
    <div>
        <i class="back-btn bi-arrow-left" style={{paddingLeft: '2rem'}} onClick={goBack}></i>
    <div className="container">
       <div className="content">
        <div className="card-grid">
        {
          filteredItems.map((card, i) => {
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
    </div>
  )
}

export default SearchPage