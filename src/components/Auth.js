import classes from "./Auth.module.css";
import { useState } from "react";
import auth from "./frebase";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    const auth = getAuth();
   
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    navigate('/dashboard');
    console.log('work')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError('Invalid email or password');
  });
        // dispatch(authActions.login());
  // if (email === 'user@gmail.com' && password === 'password') {
  //   dispatch(authActions.login());
  //   console.log('Logged in');
  // } else {
  //   setError('Invalid email or password');
  //   console.error('Login error');
  // }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleEmailChange}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handlePasswordChange}/>
          </div>
          <button  onClick={loginHandler}>Login</button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
