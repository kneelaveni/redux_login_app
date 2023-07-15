import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const timeoutId = useSelector((state) => state.auth.timeoutId);
  const [islogin ,setIslogin] = useState(false);
  const logoutHandler = () => {
    // dispatch(authActions.logout());
    setIslogin(true);
    navigate('/')
  };

  const handleUserInteraction = () => {
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      // dispatch(authActions.logout());
      setIslogin(true);
      navigate('/')
      
    }, 60* 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds

    // dispatch(authActions.setTimeoutId(newTimeoutId));
  };

  // Add event listeners to track user interactions
  useEffect(() => {
    document.addEventListener('mousemove', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
       {location.pathname === '/dashboard' && !islogin ? (<nav>
          <ul>
            <li>
              <a href='#'>My Products</a>
            </li>
            <li>
              <a href='#'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>): ''}
    </header>
  );
};

export default Header;
