import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import './App.css';
import HomePage from './pages/homePage/HomePage';
import DietPage from './pages/dietPage';
import LoginPage from './pages/loginPage';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import ValidateTokenPage from './pages/validateTokenPage';
import ChangePasswordPage from './pages/changePasswordPage';
import ListDietsPage from './pages/listDietsPage';
import CadastroPage from './pages/cadastroPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dieta',
    element: <DietPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/forgotPassword',
    element: <ForgotPasswordPage />
  },
  {
    path: '/validateToken',
    element: <ValidateTokenPage/>
  },
  {
    path: '/changePassword',
    element: <ChangePasswordPage/>
  },
  {
    path: '/listDiets',
    element: <ListDietsPage/>
  },
  {
    path: '/cadastro',
    element: <CadastroPage />
  },

])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
