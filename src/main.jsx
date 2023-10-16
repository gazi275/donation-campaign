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
import Statistics from './pages/Statistics.jsx';
import Details from './donation_details/Details.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    errorElement: <ErrorPage />,
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
        path: "/statistics",
        element:<Statistics></Statistics> ,
      }
      ,
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
