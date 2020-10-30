import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchBox from './searchBox';
import { getProducts } from './../services/productservices';


const NavBar = () => {
    return <div className="row">
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark nav-container">
  <a className="navbar-brand" href="#">ClothSet</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">
          <i className="fa fa-home"></i>
          Home
          <span className="sr-only">(current)</span>
          </NavLink>
      </li>
      </ul>
      <NavLink className="nav-item nav-link" style={{color : "white"}} to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" style={{color : "white"}} to="/register">
              Register
        </NavLink>
  </div>
</nav>
  </div>
}
 
export default NavBar;