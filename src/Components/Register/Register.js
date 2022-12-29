import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('')
    const {createUser, updateUser} = useContext(AuthContext)

    const navigate = useNavigate()



    const handleRegister = data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user)
            const userInfo = {
              displayName: data.name,
              userRole: data.role
            }
            updateUser(userInfo)
            .then(() => {
              saveUser(data.name, data.email, data.role)
              alert('user created successfully')
              
            })
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }

    const saveUser = (name, email, role) => {
        const user = {name, email, role}
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          navigate('/')
        })
      }

    return (
        <div className='h-[600px] lg:h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7 shadow-2xl border border-[#FF7360]'>
        <form onSubmit={handleSubmit(handleRegister)}>
        <h2 className='text-center text-2xl font-bold text-indigo-700 mb-6'>Sign Up</h2>
        {/* name */}
                <div className="form-control w-full">
                <label className="label text-indigo-700">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text"  {...register("name", {required: "*Your name is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
                </div>
          {/* email */}
                <div className="form-control w-full">
                <label className="label text-indigo-700">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email"  {...register("email", {required: "*Your email is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
                {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
                </div>
            {/* password */}
            <div className="form-control w-full">
                <label className="label text-indigo-700">
                  <span className="label-text">Enter Password</span>
                </label>
                <input type="password"  {...register("password", {required: "*Your password is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
                {errors.password && <p role="alert" className='text-red-400'>{errors.password?.message}</p>}
                </div>
            {/* Your profession */}
            <div className="form-control w-full">
                <label className="label text-indigo-700">
                  <span className="label-text">Your Profession</span>
                </label>
                <input type="text"  {...register("job", {required: "*Your profession is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
                {errors.profession && <p role="alert" className='text-red-400'>{errors.profession?.message}</p>}
                </div>
            {/* <p>Forgot Password?</p> */}
          {/* <p>{data}</p> */}
          <div className='text-center my-4'>
          <button className='py-2 px-3 bg-[#FF7360] text-white font-bold rounded-xl hover:bg-indigo-700' type='submit'>Sign Up</button>
          </div>
          
            {
              signupError && <p className='text-red-400'>{signupError}</p>
            }
          
    </form>
    <p className='text-xs text-center'>Already have an account? <Link to='/login' className='text-indigo-700'>Log in here</Link></p>
    {/* <div className="divider mt-4 mb-4">OR</div>
    <button onClick={handleGoogle} className='btn btn-accent btn-outline w-full mt-3 mb-3' type='submit'>Continue With Google</button> */}
    </div>

    </div>
    );
};

export default Register;