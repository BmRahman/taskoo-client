import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from './../Components/Home/Home';
import AddTask from './../Components/AddTask/AddTask'
import MyTasks from './../Components/MyTasks/MyTasks';
import CompletedTasks from './../Components/CompletedTasks/CompletedTasks';
import Register from './../Components/Register/Register';
import Login from "../Components/Login/Login";
import PrivateRoute from './PrivateRoute';
import Loading from './../Components/Shared/Loader/Loading';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'addtask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: 'mytasks',
                element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
            },
            {
                path: 'completed',
                element: <PrivateRoute><CompletedTasks></CompletedTasks></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])