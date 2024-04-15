import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './component/Shop';
import Featured from './component/Featured';
import Pages from './component/Pages';
import Blogs from './component/Blogs';
import Checkout from './Checkout';
import { Provider } from 'react-redux';
import {Store} from "./Store"
import Home from "./component/Home"
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/featured",
        element:<Featured/>
      },
      {
        path:"/pages",
        element:<Pages/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
     <RouterProvider router={router}/>
   </Provider>
  
);