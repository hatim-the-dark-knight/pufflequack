import {React, useState, useEffect} from 'react'
import './Restaurant.css'
import data from '../../utils/categories.json'
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Card from '../Card/Card';

const bot = window.Telegram.WebApp;

const Restaurant = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const index = props.index;
    const rest_data = data[index];
    
    let today = new Date();
    let dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    let mm = (today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;

    const datte = today.getFullYear() + "-" + mm + '-' + dd;
    const [state, setState] = useState({
      date: datte,
      seats: 1,
      time_slot: '9am - 10am', // Set a default value
    });
    console.log(state);
    const[showModal, setShowModal] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setShowModal(true);

      console.log(state);
      // alert(`Table booked for ${state.date} from ${state.time_slot} for ${state.seats} people.`)
      // bot.showPopup("This is just a test");
    };

    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    }

    const [showMenu, setShowMenu] = useState(false);

    const onClickMenu = (e) => {
      if(!showMenu) {
        document.getElementById("menu-img").style.width = "100%";
        setShowMenu(true);
      }
      else {
        document.getElementById("menu-img").style.width = "48%";
        setShowMenu(false);
      }
    }

  return (
    <div className="r-container">
      <div>
        <i className="btn-back bi-arrow-left" onClick={goBack}></i>
        <div className="restaurant-content">
          <Card card={rest_data} />
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-title">
              Table Reservation for
            </div>
            <div className="top-content">
              {/* <label htmlFor='date'>Date</label> */}
              <input type="date" value={state.date} onChange={handleInputChange} name="date" className="f-date" placeholder="Today" />
              {/* <label htmlFor='seats'>No. of people</label> */}
              <input type="number" onChange={handleInputChange} name="seats" className="f-seats" placeholder="No. of seats" />
            </div>
            <div className="f-time-slots">
              <label htmlFor="time">Time Slots</label>
              <select name="time_slot" value={state.time_slot} onChange={handleInputChange} className="f-time-slots-opts">
                <option value='9am - 10am'>9am - 10am</option>
                <option value='10am - 11am'>10am - 11am</option>
                <option value='11am - 12pm'>11am - 12pm</option>
                <option value='12pm - 1pm'>12pm - 1pm</option>
                <option value='12pm - 1pm'>12pm - 1pm</option>
                <option value='1pm - 2pm'>1pm - 2pm</option>
                <option value='2pm - 3pm'>2pm - 3pm</option>
                <option value='3pm - 4pm'>3pm - 4pm</option>
              </select>
            </div>
            <button type="submit" id="prof-btn" className="w-100 btn btn-primary btn-lg" value="Save" >Save</button>
          </form>
          <Modal onClose={() => setShowModal(false)} showModal={showModal} details={state} message={`Table booked for ${state.date} from ${state.time_slot} for ${state.seats} people.`}/>
          <div className="other-content">
            <div className="menu">
              <h4 className="other-content-title">
                Menu
              </h4>
              <div className="menu-grid">
                <img id="menu-img" onClick={onClickMenu} src="/pufflequack/menu.png" alt="" />
              </div>
            </div>
            <div className="restaurant-info">
              <h4 className="other-content-title">
                Restaurant Info
              </h4>
              <div className="info-body">
                  ABC Valley, <br/>
                  Funzone, <br/>
                  India <br/>
                  Open from 9 am to 10 pm
              </div>
              
            </div>
            <div className="features">
              <h4 className="other-content-title">
                Features
              </h4>
              <div className="features-body">
                <ul>
                  <li>
                    Parking available
                  </li>
                  <li>
                    Accepts card payment
                  </li>
                  <li>
                    AC available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Restaurant