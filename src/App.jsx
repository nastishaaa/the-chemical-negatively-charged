import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const HomePageAuth = lazy(() => import('./pages/HomePageAuth/HomePageAuth'));

import './App.css'
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      { index: true, element: <HomePageAuth /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
