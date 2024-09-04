import React, { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [formData, setFormData] = useState({});
  const {register,handleSubmit}=useForm();
  async function fun(user){
        console.log(user);
  }
  return (
    <div className='register-body'>
      <div className='div-res'>
        <form onSubmit={handleSubmit(fun)} className='form-register'>
          <h1 className='register'>Register</h1>
          <div className='form-row'>
            <div className='form-column'>
              <label htmlFor="firstName" className='label-register'>First Name</label>
              <input
                className='input-register'
                type="text"
                name="firstName"
                {...register('first_name')}
                required
              />

              <label htmlFor="email" className='label-register'>Email</label>
              <input
                className='input-register'
                type="email"
                name="email"
                {...register("email")}
                required
              />

              <label htmlFor="username" className='label-register'>Username</label>
              <input
                className='input-register'
                type="text"
                name="username"
                {...register("username")}
                required
              />
              
          <div className='password-row'>
            <div>
              <label htmlFor="password" className='label-register'>Password</label>
              <input
                className='password'
                type="password"
                name="password"
                {...register("password")}
                required
              />
            </div>
            <div>
              <label htmlFor="rePassword" className='label-register rpassword'>Re-enterPassword</label>
              <input
                className='repassword'
                type="password"
                name="rePassword"
                {...register("re_password")}
                required
              />
            </div>
          </div>
               
          <div className='password-row'>
            <div>
              <label htmlFor="dob" className='label-register'>Date of Birth</label>
              <input
                className='password'
                type="date"
                name="dob"
                {...register("dob")}
                required
              />
              </div>
              <div>
                <label htmlFor="gender" className='rpassword'>Gender</label>
              <input
                className='repassword'
                type="text"
                name="gender"
                {...register("gender")}
                required
              />
            </div>
            </div>
            </div>
            <div className='form-column'>
              <label htmlFor="lastName" className='label-register'>Last Name</label>
              <input
                className='input-register'
                type="text"
                name="lastName"
                {...register("last_name")}
                required
              />

              <label htmlFor="contactNumber" className='label-register'>Contact Number</label>
              <input
                className='input-register'
                type="tel"
                name="contactNumber"
                {...register("contact_number")}
                required
              />
            </div>
          </div>

          <button type="submit" className='button-register'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
