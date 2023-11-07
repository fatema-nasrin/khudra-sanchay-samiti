import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import CustomerInfo from './Pages/CustomerInfo';
import Content from './Components/content/Content';
// import BasicInfo from './Pages/BasicInfo';
import History from './Pages/History';
import EntryForm from './Pages/EntryForm/EntryForm';

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
        element:<CustomerInfo/>,
        loader:() => fetch("http://localhost:5000/all-member")
      },
      // {
      //   path:"/customerInfo/:id",
      //   element:<CustomerInfo/>,
      //   loader:({params}) => fetch(`http://localhost:5000/all-member/${params.id}`)
      // },
      // {
      //   path:"/basicInfo",
      //   element:<BasicInfo/>
      // },
      {
        path:"/entryForm",
        element:<EntryForm/>
      },
      {
        path:"/history",
        element:<History/>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
