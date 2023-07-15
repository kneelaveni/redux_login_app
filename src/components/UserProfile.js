import classes from './UserProfile.module.css';
import Counter from './Counter';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './frebase'
import { useEffect } from 'react';
const UserProfile = () => {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <Counter />
    </main>
  );
};

export default UserProfile;