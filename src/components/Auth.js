import classes from "./Auth.module.css";
import { useEffect, useState } from "react";
import auth from "./frebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { loginInitiate } from "../store/Actions";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [state,setState] = useState({
    email:"",
    password:"",
  });
  const { email, password } =state;
  const  currentUser  = useSelector((state) =>state.user);
  useEffect(()=>{
    if(currentUser){
      navigate("/");
    }
  },[currentUser])
  const [error, setError] = useState('');

 

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({...state,[name]: value});
  };
  const loginHandler = (event) => {
    event.preventDefault();
    if(!email || !password){
      setError('Invalid email or password');
      return;
    }
    dispatch(loginInitiate(email,password));
    setState({ email:"", password:"" });
    navigate('/dashboard');
  }
//     const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     navigate('/dashboard');
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setError('Invalid email or password');
//   });
       
  return (
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
          </div>
          <button  onClick={loginHandler}>Login</button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
