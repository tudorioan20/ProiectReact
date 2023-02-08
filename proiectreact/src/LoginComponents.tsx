import React from 'react';

import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';

import "./LoginComponents.scss";


function LoginComponents() {

  return (
    <><div className="Auth">

      <Register />
      <Login />
    </div>
    <div className="Auth">
        <ResetPassword />
    </div></>
    
  );
}

export default LoginComponents;