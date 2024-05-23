import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import PrivateRoute from "./private/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    },

{
           path:"dashboard",
        element:<DashboardLayout/>,
        // errorElement:<ErrorPage/>,
        // dashboard protect korar jonno private route use kora hoy
        children:[{path:'',element:
        <PrivateRoute>
            <Dashboard/>
        </PrivateRoute>
    }],
    
}

])