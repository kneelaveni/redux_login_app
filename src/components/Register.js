import classes from "./Register.module.css";
import React, { useState } from 'react';
import firebase from './frebase'
import { authActions } from "../store";
import { useDispatch } from "react-redux";
const Register = () => { 
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const registerHandler = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful, handle the user object as needed
        const user = userCredential.user;
        console.log('Registered:', user);
      })
      .catch((error) => {
        // Handle registration errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={registerHandler}>
        <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="name" id="name" value={name} onChange={handleNameChange}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email}  onChange={handleEmailChange}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
          </div>
          <button type="submit">Register</button>
        </form>
      </section>
    </main>
  );
};

export default Register;
