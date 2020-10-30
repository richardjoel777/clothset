import React, { Component } from "react";
import Joi from 'joi-browser';
import Form from './common/form';


class LoginForm extends Form {
  state = {
    data : { number : '', password : '' },
    errors : {}
  }

  schema = {
    number : Joi.string().required().label('Mobile Number'),
    password : Joi.string().required().label('Password')
  }
  
  doSubmit = () =>
  {
    // calling server
    window.location = "/";
    console.log('submitted');

  }

  render() {
    return <div className=" row-5 m-3 p-3 rounded shadow" style={{backgroundColor:"white"}}>
      <h1 className='header'>Login Form</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('username', 'Username')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderSubmit('login')}
      </form>
    </div>;
  }
}

export default LoginForm;
