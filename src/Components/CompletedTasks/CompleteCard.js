import React, { useContext } from 'react';

const CompleteCard = ({complete}) => {

    const {title, details, image, date} = complete;
    console.log(complete);

    const handleDelete = (complete) => {
        fetch(`http://localhost:5000/completed/${complete._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        alert('task removed successfully')
      })
      .catch(rejected => {
        console.log(rejected);
    })
    }
    

    return (
        <div>
            <div className='border-2 border-[#FF7360] rounded-lg'>
            <div className=" p-6 rounded-md shadow-md">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-sm font-bold tracking-widest uppercase text-indigo-700">{date}</span>
		<h2 className="text-xl font-bold tracking-wide">{title}</h2>
	</div>
	<p className="">{details}</p>
    <button onClick={handleDelete}  className='py-2 px-3 bg-[#FF7360] rounded-lg mt-3 hover:bg-indigo-700 text-white font-bold'>Delete Task</button>
</div>
        </div>
        </div>
    );
};

export default CompleteCard;