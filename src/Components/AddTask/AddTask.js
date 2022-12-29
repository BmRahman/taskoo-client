import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const AddTask = () => {

    const {user} = useContext(AuthContext)
    const [selectedDay, setSelectedDay] = useState(new Date ())
    const schedule = format(selectedDay, 'PP');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;


    const handleAddTask = data => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`


        fetch(url, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(imgData => {
            console.log(imgData)
          if(imgData.success){
            console.log(imgData.data.url)

            const task = {
                email: user.email,
                title: data.title,
                details: data.details,
                image: imgData.data.url,
                schedule
            }

            fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(task)
            })
            .then(res => res.json())
            .then(result => {
              console.log(result)
              alert('Task added successfully')
            })
        }
          })
    }

    return (
        <div>
            <p className='text-2xl lg:text-4xl text-center font-bold text-[#FF7360] my-10 capitalize'>Add your important task here</p>

            <div>
            <p className='text-xl lg:text-3xl text-center font-bold text-indigo-700 mb-6 capitalize'>select your date</p>

            {/* day picker */}
            <div className='w-4/5 mx-auto md:w-96 md:pl-10'>
                <DayPicker mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}></DayPicker>
                <p className='pl-6 text-indigo-700 mt-5'>You have selected date: {format(selectedDay, 'PP')}</p>
            </div>
            {/* day picker ends */}
            </div>

            {/* task form */}
            <div className='w-4/5 md:w-2/5 mx-auto pt-10 mb-10'>
                <form onSubmit={handleSubmit(handleAddTask)}>
                {/* task title */}
                <div className="form-control w-full">
                <label className="label text-indigo-700">
                  <span className="label-text">Title</span>
                </label>
                <input type="text"  {...register("title", {required: "*Task title is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.title?.message}</p>}
                </div>

                {/* task details */}
                <div className="form-control w-full">
                <label className="label text-indigo-700">
                  <span className="label-text">Task Description</span>
                </label>
                <input type="text"  {...register("details", {required: "*Task description is required!"})} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3"/>
                {errors.details && <p role="alert" className='text-red-400'>{errors.details?.message}</p>}
                </div>

                {/* insert photo */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-indigo-700 ">Add A Photo</span>
                </label>
                <input type="file" {...register("image", {required: "*Media image is required!"})} className="input w-full mb-3 mt-3"/>
                {errors.image && <p role="alert" className='text-red-400'>{errors.image?.message}</p>}
                </div>   

                <div className="form-control w-full">
                <label className="label text-indigo-700 mt-3">
                  <span className="label-text">Date</span>
                </label>
                <input type="text" value={schedule}  {...register("bate")} className="input border-b-2 border-[#FF7360] outline-none w-full mb-3 mt-3"/>
                {errors.date && <p role="alert" className='text-red-400'>{errors.date?.message}</p>}
                </div>

                    <div>
                        <button type='submit' className='bg-[#FF7360] py-2 px-4 rounded-xl text-white hover:bg-indigo-700'>Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;