import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='my-6 md:my-52'>
            <section className=" mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-3xl lg:text-5xl">
                        One page Template for
                         <span className="text-indigo-700"> Manage your Tasks <br/> and everything with <br/> <span className='text-[#FF7360]'>Taskoo</span></span>
                    </h1>
                    <p className=" max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        When you're overwhelmed by the amount of work on your life, just stop and rethink. Taskoo is here to make your life easy and put all your work in a list. Millions of teams and individuals complete their tasks on Taskoo With award winning design and powerful features, you don’t need to overspend on an outdated task management tool to achieve your goals.
                    </p>
                    <div className="pt-6 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link className="px-4 py-2 w-full bg-[#FF7360] hover:bg-indigo-700 text-white text-center rounded-md shadow-md block sm:w-auto">
                            Add a task
                        </Link>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" alt=''/>
                </div>
            </section>
        </div>
    );
};

export default Home;