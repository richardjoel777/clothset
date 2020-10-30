import React from 'react';
import Form from './common/form';
import  Joi from 'joi-browser';

class Register extends Form {
    state = { data : { number: "", password: '', name : '' }, errors : {} }

    schema = {
        number : Joi.string().required().length(10).label('Mobile Number'),
        password : Joi.string().required().min(5).max(30).label('Password'),
        name : Joi.string().required().label('Name')
    }

    doSubmit = () =>
  {
    // calling server
    window.location = "/";
    console.log('submitted');

  }
    render() { 
        return <div className=" row-5 m-3 p-3 rounded shadow" style={{backgroundColor:"white"}}>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('number', 'Mobile Number')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderSubmit('Register')}
        </form>
      </div>;
    }
}
 
export default Register;