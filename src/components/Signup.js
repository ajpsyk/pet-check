import React, { useState } from 'react';
import VetMan from '../../images/VetMan.png';
import '../styles/Signup.css';

const SignUp = () => {

  const [form, setForm] = useState({name: '', company: '', phone: '', email: ''});

  const signupHandler= () => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">
      <img className="signup-image" src={VetMan}></img>
      <form onSubmit={signupHandler}>
      <div className="signup-form">
        <h2 className="signup-head">Try It Free</h2>
          <label htmlFor="name">Name</label>
          <input type ="text" className="name" id="name" onChange={e => setForm({...form, name: e.target.value})} value={form.name}></input>
          <label htmlFor="email">Email</label>
          <input type="text" className="email" id="email" onChange={e => setForm({...form, email: e.target.value})} value={form.email}></input>
          <label htmlFor="password">Password</label>
          <input type="text" className="password" id="password" onChange={e => setForm({...form, password: e.target.value})} value={form.password}></input>
          <label htmlFor="company">Company</label>
          <input type="text" className="company" id="company" onChange={e => setForm({...form, company: e.target.value})} value={form.company}></input>
          <label htmlFor="phone">Phone</label>
          <input type="text" className="phone" id="phone" onChange={e => setForm({...form, phone: e.target.value})} value={form.phone}></input>
        <input className="signup-submit" type="submit" value="Submit"></input>
      </div>
    </form>
  </div>
  )
}

export default SignUp;