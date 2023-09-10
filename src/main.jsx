import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import CustomerInfo from './Pages/CustomerInfo';
import EntryForm from './Pages/EntryForm';
import Content from './Components/content/Content';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
          path:"/",
          element:<Content/>
      },
      {
        path:"/customerInfo",
        element:<CustomerInfo/>
      },
      {
        path:"/entryForm",
        element:<EntryForm/>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
