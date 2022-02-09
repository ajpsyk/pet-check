import React, { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import '../styles/Login.css';

const Login = () => {

  const { setAuth } = useContext(AuthContext);

  const [form, setForm] = useState({email: '', password: ''});
  const [err, setErr] = useState('');

  useEffect(() => {
    setErr('')
  }, [form])

  const submitHandler = () => {
    e.preventDefault();

    const { email, password } = form;
    const user = { email, password };

    axios.post('http://localhost:8080/auth', user)
    .then(function (response) {
      console.log(response);
      setForm({email: '', password: ''});
    })
    .catch(function (error) {
      console.log(error);
      setForm({email: '', password: ''});
    });


  };


  return (
    <form onSubmit={submitHandler}>
      <div className="login-form">
        <h2 className="login-head">Let's Sign You In</h2>
          <p className={ err ? "errmsg" : "offscreen"}></p>
          <label htmlFor="email">Username or Email</label>
          <input type ="text" className="email" id="email" onChange={e => setForm({...form, email: e.target.value})} value={form.email} required></input>
          <label htmlFor="password">Password</label>
          <input type="password" className="password" id="password" onChange={e => setForm({...form, password: e.target.value})} value={form.password} required></input>
        <input className="login-submit" type="submit" value="Sign In"></input>
      </div>
    </form>
  )
}

export default Login;