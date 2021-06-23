import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Layout from './components/Layout';
import LayoutContainer from './components/layout/LayoutContainer';
import LoginContainer from './components/login/LoginContainer';

const App = () => {

  const userProfile = useSelector(state => state.products.userProfile)

  return (
    <div className="App">
      {(userProfile && userProfile.id > 0)
        ? <LayoutContainer/>
        : <LoginContainer/>}

    </div>
  )
}

export default App;