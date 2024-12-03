import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Main from './../Layout/Main';
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import BookDetails from "../pages/booksDetails/BookDetails";

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
        {
            path: "/shop",
            element:<Shop/>
        },
        {
          path:'/about',
          element:<About/>
,        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/bookdetails/:id',
          element:<BookDetails/>
        }
      ]
    }
    ])