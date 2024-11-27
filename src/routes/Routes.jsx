// src/routes/Routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Brands from '../pages/Brands/BrandsPage';
import BrandDetails from '../pages/Brands/BrandDetails';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Profile from '../pages/Profile/Profile';
import UpdateProfile from '../pages/Profile/UpdateProfile';
import AboutDev from '../pages/AboutDev';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // Brand Routes
            {
                path: 'brands',
                children: [
                    {
                        path: '',
                        element: <Brands />
                    },
                    {
                        path: ':id',
                        element: (
                            <PrivateRoute>
                                <BrandDetails />
                            </PrivateRoute>
                        )
                    }
                ]
            },
            // Auth Routes
            {
                path: 'auth',
                children: [
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    },
                    {
                        path: 'forgot-password',
                        element: <ForgotPassword />
                    }
                ]
            },
            // Profile Routes
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        element: (
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        )
                    },
                    {
                        path: 'update',
                        element: (
                            <PrivateRoute>
                                <UpdateProfile />
                            </PrivateRoute>
                        )
                    }
                ]
            },
            {
                path: 'about-dev',
                element: <AboutDev />
            }
        ]
    }
]);

export default router;