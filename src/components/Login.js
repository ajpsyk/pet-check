import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {

  const [form, setForm] = useState({username: '', password: ''});

  const submitHandler = () => {
    e.preventDefault();
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="login-form">
        <h2 className="login-head">Let's Sign You In</h2>
          <label htmlFor="username">Username or Email</label>
          <input type ="text" className="username" id="username" onChange={e => setForm({...form, username: e.target.value})} value={form.username}></input>
          <label htmlFor="password">Password</label>
          <input type="text" className="password" id="password" onChange={e => setForm({...form, password: e.target.value})} value={form.password}></input>
        <input className="login-submit" type="submit" value="Sign In"></input>
      </div>
    </form>
  )
}

export default Login;