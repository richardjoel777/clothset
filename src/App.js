import { Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Clothes from './components/clothes';
import { ToastContainer } from 'react-toastify';
import ProductDetails from './components/productDetails';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import Footer from './components/footer';
import Logout from './components/logout';
import NotFound from './components/not-found';
import Register from './components/register';
import './App.css';



class App extends Component {
  state = {}
  
  render()
  {
  return<div className="container mt-5">
    <ToastContainer/>
    <NavBar/>
  <Switch>
           <Route path="/login" component={LoginForm} />
          <Route 
           path="/products/:id" 
           component={ProductDetails}
          />
          <Route path="/products" render={props => <Clothes/> }></Route>
          <Redirect path="/not-found" to="/products"></Redirect>
          <Route path="/register" component={Register}></Route>
          <Redirect from='/' exact to="/products"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
        <Footer/>
     </div>
}
}

export default App;
