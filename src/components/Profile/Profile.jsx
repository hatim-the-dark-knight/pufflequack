import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import Modal from '../Modal/Modal';

const Profile = () => {

  const [state, setState] = useState([]);
  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('state'));
    console.log(state);
    if(state) {
      setState(state);
    }
  }, []);

  const navigate = useNavigate();

  const[showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    localStorage.setItem('state', JSON.stringify(state));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    document.getElementById("prof-btn").setAttribute("disabled", "");
    const elements = document.getElementsByClassName("form-control inp");
    for (var i = 0; i < elements.length; i++) { 
      elements[i].disabled = true;
  }
    console.log(state + showModal);
    // alert(`Name: ${state.name}\nPhone Number: ${state.phoneNumber}\nEmail: ${state.email}\nAddress: ${state.address}, ${state.place}`)
    // bot.showPopup("This is just a test");
  };

  const goBack = () => {
      navigate('/pufflequack/');
  }

  return (
    <div className="profile">
      <div>
        <i className="bi-arrow-left" onClick={goBack}></i><br/><br/>
        <h3>Profile</h3><br />
        <form action="/pufflequack/profile" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" onChange={handleInputChange} className="form-control inp" name="name" placeholder={state.name} required />
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="tel" onChange={handleInputChange} className="form-control inp" name="phoneNumber" placeholder={state.phoneNumber} required />
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" onChange={handleInputChange} className="form-control inp" name="email" placeholder={state.email} required />
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" onChange={handleInputChange} className="form-control inp" name="address" placeholder={state.address} required />
          <label htmlFor="place" className="form-label">Place</label>
          <input type="text" onChange={handleInputChange} className="form-control inp" name="place" placeholder={state.place} required /><br/>
          <button type="submit" id="prof-btn" className="w-100 btn btn-primary btn-lg" value="Save" >Save</button>
        </form>
      </div>
        <Modal onClose={() => setShowModal(false)} showModal={showModal} details={state} message="Your profile is saved."/>
    </div>
  )
}

export default Profile