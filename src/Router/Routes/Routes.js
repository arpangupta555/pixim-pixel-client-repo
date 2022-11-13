import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Error";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Blog";
import SignUp from "../../Pages/SignUp/SignUp";
import Ourservices from "../../Pages/Home/OurServices/Ourservices";
import Service from "../../Pages/Home/Service/Service";
import Review from "../../Pages/Review/Review";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/Home/AddService/AddService";

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

                path: '/ourservices',
                element: <Ourservices></Ourservices>,


            },
            {

                path: '/service/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://pixel-pixim-server.vercel.app/services/${params.id}`)

            },
            {

                path: '/login',
                element: <Login></Login>,


            },
            {

                path: '/review',
                element: <PrivateRoute> <Review></Review> </PrivateRoute>,


            },
            {

                path: '/addservice',
                element: <AddService></AddService>


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