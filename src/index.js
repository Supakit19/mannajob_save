import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import "./fonts.css"
import Home from './Admin/Home';
import ManageHome from './Admin/Manage/ManageHome';
import Managesalary from './Admin/Manage/Managesalary';
import Managewithdraw from './Admin/Manage/Managewithdraw';
import Managewithdraw1 from './Admin/Manage/Managewithdraw1';
import Alluser from './Admin/Manage/Alluser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/manage",
    element: <ManageHome />,
  },
  {
    path: "/managesalary",
    element: <Managesalary />,
  },
  {
    path: "/managewithdraw",
    element: <Managewithdraw />,
  },
  {
    path: "/managewithdraw1",
    element: <Managewithdraw1 />,
  },
  {
    path: "/alluser",
    element: <Alluser />,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
