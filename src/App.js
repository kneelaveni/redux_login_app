import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
  <Router>
    <Routes>
      <Route path="/" element={[<Header/>,<Auth/>]}/>
     <Route path='/dashboard' element={[<Header/>,<UserProfile/>]}/>
    </Routes>
  </Router>
   
  );
}

export default App