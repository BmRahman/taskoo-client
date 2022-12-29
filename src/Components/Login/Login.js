import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../Context/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {loginUser, googleLogin} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')

    const navigate = useNavigate()
    let location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        loginUser(data.email, data.password)
        .then(res => {
          const user = res.user;
          console.log(user)
          navigate(from, { replace: true })
        })
        .catch(error => {
          console.error(error.message)
          setLoginError(error.message)
        })
    }

    return (
        <div className='h-[600px] lg:h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7 border border-[#FF7360] shadow-2xl'>
        <form onSubmit={handleSubmit(handleLogin)}>
        <h2 className='text-center text-2xl font-bold text-indigo-700 mb-6'>Login</h2>
          <div className="form-control w-full">
            <label className="label  text-indigo-700">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", {required: "*Email Address is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
            {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full">
            <label className="label  text-indigo-700">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", {required: "*Please Enter A Valid Password!", minLength: {value: 6, message: "password must be 6 characters or longer"}})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
            {errors.password && <p role="alert" className='text-red-400'>{errors.password?.message}</p>}
            </div>
            <p className=' text-indigo-700'>Forgot Password?</p>
          {/* <p>{data}</p> */}
          <div className='text-center'>
          <button className='btn py-2 px-3 bg-[#FF7360] text-white font-bold rounded-xl hover:bg-indigo-700 mt-3 mb-3' type='submit'>Login</button>
          </div>
          {
            loginError && <p className='text-red-400 mb-3'>{'*wrong password! please try again with valid password'}</p>
          }
    </form>
    <p className='text-xs text-center'>New to Doctor's Portal? <Link to='/register' className='text-indigo-700'>Create New Account</Link></p>
    </div>

    </div>
    );
};

export default Login;