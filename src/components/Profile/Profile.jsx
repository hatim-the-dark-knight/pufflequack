import React from 'react'
import { useState } from 'react';
import './Profile.css'

const Profile = () => {
  const [state, setState] = useState({
    name: '',
    phoneNumber: null,
    email: '', // Set a default value
    address: '',
    place: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    alert(`Name: ${state.name}\nPhone Number: ${state.phoneNumber}\nEmail: ${state.email}\nAddress: ${state.address}, ${state.place}`)
    // bot.showPopup("This is just a test");
  };

  return (
    <div className="profile">
      <h3>Profile</h3><br />
      <form action="/pufflequack/profile" onSubmit={handleSubmit}>
        <label for="name" class="form-label">Name</label>
        <input type="text" value={state.name} onChange={handleInputChange} class="form-control" name="name" placeholder="" required />
        <label for="phoneNumber" class="form-label">Phone Number</label>
        <input type="tel" value={state.phoneNumber} class="form-control" id="phoneNumber" placeholder="" required />
        <label for="email" class="form-label">Email</label>
        <input type="text" value={state.email} onChange={handleInputChange} class="form-control" name="email" placeholder="" required />
        <label for="address" class="form-label">Address</label>
        <input type="text" value={state.address} onChange={handleInputChange} class="form-control" name="address" placeholder="" required />
        <label for="place" class="form-label">Place</label>
        <input type="text" value={state.place} onChange={handleInputChange} class="form-control" name="place" placeholder="" required /><br/>
        <input type="submit" className="w-100 btn btn-primary btn-lg" value="Confirm" />
      </form>
    </div>
  )
}

export default Profile