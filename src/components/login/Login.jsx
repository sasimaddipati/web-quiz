import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();

   async function fun(user){
       console.log(user);
  } 

  return (
    <div>
      <div className='login'>
        <div className='login-page'>
          <h1 className='login-head'>Sign in</h1>
          <form onSubmit={handleSubmit(fun)}>
            <input 
              type="text" 
              name="username" 
              placeholder='Username' 
              className='input' 
              {...register("username")}
            />
            <input 
              type="password" 
              name="password"
              placeholder='Password'
              className='input'
              {...register("password")}
            />
            <button className='login-button' type='submit'>Submit</button>
          </form>
          <p className='sign-up'>Don't have an account? 
            <Link to='/register' className='link-login'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
