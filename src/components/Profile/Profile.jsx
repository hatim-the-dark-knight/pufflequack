import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import Modal from '../Modal/Modal';

const Profile = () => {
  const [state, setState] = useState({
    name: '',
    phoneNumber: '',
    email: '', // Set a default value
    address: '',
    place: '',
  });

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
    document.getElementById("prof-btn").setAttribute("disabled", "");
    const elements = document.getElementsByClassName("form-control");
    for (var i = 0; i < elements.length; i++) { 
      elements[i].disabled = true;
  }
    console.log(state + showModal);
    // alert(`Name: ${state.name}\nPhone Number: ${state.phoneNumber}\nEmail: ${state.email}\nAddress: ${state.address}, ${state.place}`)
    // bot.showPopup("This is just a test");
  };

  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
  }

  return (
    <div className="profile">
      <div className="fill-profile">
        <i class="bi-arrow-left" onClick={goBack}></i><br/><br/>
        <h3>Profile</h3><br />
        <form action="/pufflequack/profile" onSubmit={handleSubmit}>
          <label for="name" class="form-label">Name</label>
          <input type="text" value={state.name} onChange={handleInputChange} class="form-control" name="name" placeholder="" required />
          <label for="phoneNumber" class="form-label">Phone Number</label>
          <input type="tel" value={state.phoneNumber} onChange={handleInputChange} class="form-control" name="phoneNumber" placeholder="" required />
          <label for="email" class="form-label">Email</label>
          <input type="text" value={state.email} onChange={handleInputChange} class="form-control" name="email" placeholder="" required />
          <label for="address" class="form-label">Address</label>
          <input type="text" value={state.address} onChange={handleInputChange} class="form-control" name="address" placeholder="" required />
          <label for="place" class="form-label">Place</label>
          <input type="text" value={state.place} onChange={handleInputChange} class="form-control" name="place" placeholder="" required /><br/>
          <button type="submit" id="prof-btn" className="w-100 btn btn-primary btn-lg" value="Save" >Save</button>
        </form>
      </div>
        <Modal onClose={() => setShowModal(false)} showModal={showModal} details={state} message="Your profile is saved."/>
    </div>
  )
}

export default Profile