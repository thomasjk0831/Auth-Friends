import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import Form from './components/Form'


function App() {
  return (
    <div>
      <nav>
        <Link to = {'/'}>
          Login 
        </Link>
        <Link to = {'/friendsList'}>
          Your Friends 
        </Link>
        <Link to = {'/form'}>
          Add Friends 
        </Link>
      </nav>
      <Route exact path ="/">
        <Login />
      </Route>
      <PrivateRoute exact path ="/friendsList" component={FriendsList} />
      <PrivateRoute exact path ="/form" component={Form} />
      
    </div>
  );
}

export default App;
