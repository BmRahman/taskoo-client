import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from './../Context/AuthProvider';
import TaskCard from './../MyTasks/TasksCard/TaskCard';
import CompleteCard from './CompleteCard';

const CompletedTasks = () => {

    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/completed?email=${user?.email}` 

    const {data: finished = [], refetch} = useQuery({
        queryKey: ['finished', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    

    return (
        <div className='h-screen'>
            <h2 className='text-center my-10 text-3xl lg:text-4xl text-indigo-700 font-bold'>My Completed tasks</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                     finished.length < 1  ? <p className='my-10 text-3xl lg:text-4xl text-indigo-700 font-bold'>No Tasks Finished Yet</p>  :
                     finished.map(complete => <CompleteCard complete={complete} key={complete._id} refetch={refetch}></CompleteCard>)
                }
            </div>
        </div>
    );
};

export default CompletedTasks;