import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './layout/MainLayout.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Donation from './pages/donation/Donation.jsx';
import Statistic from './pages/statistic/Statistic.jsx';
import Details from './donation_details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        loader: ()=>fetch('/donation.json')
      },
      {
        path: "/donation",
        element:<Donation></Donation> ,
      },
      {
        path: "/statistic",
        element:<Statistic></Statistic> ,
      },
      {
        path: "/donationDetails/:id",
        element:<Details></Details>,
        loader: ()=>fetch('/donation.json')
      }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
