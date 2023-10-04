import React from 'react'
import './Restaurant.css'
import data from '../../utils/categories.json'

const Restaurant = (props) => {
    const index = props.index;
    const rest_data = data[index];
    const { name, place, category, rating, price, image } = rest_data;
    // function onFocus() {
    //   this.setState({
    //     type: 'date'
    //   });
    // }
  return (
    <div className="">
      <div className="card">
        <img src="/pufflequack/restaurant-i.jpg" alt="" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-name">{name}</h4>
          <div className="top-content">
            <span className="card-place">{place}</span>
            <div className="card-rating">{rating}</div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="form-title">
          Table Reservation for
        </div>
        <div className="top-content">
          <input type="date" name="f-date" className="f-date" placeholder="Today" />
          <input type="number" name="f-seats" className="f-seats" placeholder="No. of seats" />
        </div>
        <div className="f-time-slots">
          <label htmlFor="f-time">Time Slots Available</label>
          <select name="f-time" className="f-time-slots-opts">
            <option value="9am - 10am">9am - 10am</option>
            <option value="10am - 11am">10am - 11am</option>
            <option value="11am - 12pm">11am - 12pm</option>
            <option value="12pm - 1pm">12pm - 1pm</option>
            <option value="12pm - 1pm">12pm - 1pm</option>
            <option value="1pm - 2pm">1pm - 2pm</option>
            <option value="2pm - 3pm">2pm - 3pm</option>
            <option value="3pm - 4pm">3pm - 4pm</option>
          </select>
        </div>
        <input type="submit" className="w-100 btn btn-primary btn-lg" value="Confirm" />
      </div>
      <div className="other-content">
        <div className="menu">
          <div className="other-content-title">
            <h4>Menu</h4>
          </div>
        </div>
        <div className="restaurant-info">
          <div className="other-content-title">
            <h4>Restaurant Info</h4></div>
            <div className="info-body">
                ABC Valley, <br/>
                Funzone, <br/>
                India <br/>
                Open from 9 am to 10 pm
            </div>
          
        </div>
        <div className="features">
          <div className="other-content-title">
            <h4>Features</h4>
          </div>
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
  )
}

export default Restaurant