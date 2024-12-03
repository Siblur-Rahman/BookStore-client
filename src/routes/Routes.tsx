import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Main from './../Layout/Main';
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
      ]
    }
    ])