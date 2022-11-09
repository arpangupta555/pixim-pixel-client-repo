import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Error";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Blog";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>,

            },
            {

                path: '/home',
                element: <Home></Home>,


            },
            {

                path: '/login',
                element: <Login></Login>,


            },
            {

                path: '/signup',
                element: <SignUp></SignUp>,


            },
            {

                path: '/blog',
                element: <Blog></Blog>,


            },
        ],
    }


]);

export default router;