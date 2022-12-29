import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../Context/AuthProvider';

const Header = () => {
    const [state, setState] = useState(false)
    const {user, logoutUser} = useContext(AuthContext)

    console.log(user)
    const handleSignOut = () => {
      logoutUser()
      .then(() => {})
      .catch(err => console.error(err))
    }

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Add Task", path: "addtask" },
        { title: "My Tasks", path: "mytasks" },
        { title: "Completed Tasks", path: "completed" },

        
    ]
  
    return (
        <div>
           <nav className="bg-white w-full  md:border-0 md:static">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/" className='text-[#D87672] font-bold text-2xl'>
                        Taskoo
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-lg text-[#FF7360] font-bold hover:text-indigo-700">
                                    <a href={item.path} className="">
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className=" md:inline-block">
              {
                user?.email ?
                <button onClick={handleSignOut} className="py-2 px-3 mr-3 text-white bg-[#FF7360] hover:bg-indigo-700 rounded-md shadow">
                    Logout
                </button>
                :
                <>
                <Link to='/login' className="py-2 px-3 mr-3 text-white bg-[#FF7360] hover:bg-indigo-700 rounded-md shadow">
                    Login
                </Link>
                <Link to='/register' className="py-2 px-3 text-white bg-[#FF7360] hover:bg-indigo-700 rounded-md shadow">
                    Sign Up
                </Link>
                </>
              }
              </div>
          </div>
      </nav>
        </div>
    );
};

export default Header;