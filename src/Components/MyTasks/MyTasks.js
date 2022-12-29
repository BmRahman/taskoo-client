import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import TaskCard from './TasksCard/TaskCard';
import CompleteCard from './../CompletedTasks/CompleteCard';

const MyTasks = () => {

    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/tasks?email=${user?.email}` 

    const {data: tasks = []} = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })


    return (
        <div className='h-screen'>
            <h2 className='text-center my-10 text-3xl lg:text-4xl text-indigo-700 font-bold'>My tasks</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                     tasks.length < 1  ? <p className='my-10 text-3xl lg:text-4xl text-indigo-700 font-bold'>No Tasks Added Yet</p>  :
                     tasks.map(task => <TaskCard task={task} key={task._id}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default MyTasks;