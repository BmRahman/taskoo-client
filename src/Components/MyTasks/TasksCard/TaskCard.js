import React, { useState } from 'react';

const TaskCard = ({task}) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const {title, details, image, date} = task;
    console.log(task)


    const handleCompleteTask = () => {
        fetch('http://localhost:5000/completed', {
                method: 'POST',
                headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(task)
            })
            .then(res => res.json())
            .then(result => {
              console.log(result)
              alert('Task completed successfully')
              setIsDisabled(true)
            })
    }


    return (
        <div className='border-2 border-[#FF7360] rounded-lg'>
            <div className=" p-6 rounded-md shadow-md">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-sm font-bold tracking-widest uppercase text-indigo-700">{date}</span>
		<h2 className="text-xl font-bold tracking-wide">{title}</h2>
	</div>
	<p className="">{details}</p>
    <button onClick={handleCompleteTask} disabled={isDisabled} className='py-2 px-3 bg-[#FF7360] rounded-lg mt-3 hover:bg-indigo-700 text-white font-bold'>Complete Task</button>
</div>
        </div>
    );
};

export default TaskCard;