import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {Box } from '@mui/material';
import './NavBar.scss';
import LoginComponents from "./LoginComponents";
import Profile from "./Profile";
import { PrivateRouteLogin } from "./PrivateRouteLogin";
import { PrivateRouteProfile } from "./PrivateRouteProfile";
import { auth } from "./dbconnection";
import { useAuthState } from "react-firebase-hooks/auth";

function NavBar() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading){
        return;
    }
    console.log(user);
  }, [loading, user]);
  return (
    <div>
     
      <div className="navigation ">
        <nav className="navbar navbar-expand  ">
          <div className="container">

            <div>
              <ul className="navbar-nav ml-auto menu">


              <Box className="logo" sx={{borderRadius: '25px'}}>
                </Box >
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pizza">
                    Pizza
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/paste">
                    Paste
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bauturi">
                    Bauturi
                  </NavLink>
                </li>
              
                {
                  user 
                    ?
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">
                          Profile
                        </NavLink>
                      </li>
                    : <></>
                }


                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {
                  !user 
                    ?
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                          Login
                        </NavLink>
                      </li>
                    : <></>
                }

              </ul>
            </div>
            
          </div>
        </nav>
      </div>
      <Routes>
        {/* Ruta privata pentru pagina de Profil */}
        <Route element={<PrivateRouteLogin user={user} />}>
          <Route element={<LoginComponents />} path="/login"/>
        </Route>
        
        {/* Ruta privata pentru pagina de Profil */}
        <Route element={<PrivateRouteProfile user={user} />}>
          <Route element={<Profile user={user} />} path="/profile"/>
        </Route>
      </Routes>
    </div>
  );
}

export default NavBar;