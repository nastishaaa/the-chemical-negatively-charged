import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { lazy } from 'react'

import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const HomePageAuth = lazy(() => import('./pages/HomePageAuth/HomePageAuth'));

import './App.css'
import RootLayout from './layout/RootLayout';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> }, // це публічна головна
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },

      {
        path: '/auth',
        element: (
          <PrivateRoute>
            <HomePageAuth />
          </PrivateRoute>
        )
      }
    ]
  }
])

function App() {

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
