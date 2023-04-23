import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import './App.css';
import RoutesApp from './routes';
import HomePage from './pages/homePage/HomePage';
import DietPage from './pages/dietPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dieta',
    element: <DietPage />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
