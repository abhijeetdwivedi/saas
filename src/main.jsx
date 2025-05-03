import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';

import LandingLayout from './LandingPage';
import DashboardLayout from './Dashboard';

import LandingPageHome from './Pages/LandingPage/LandingPageHome';
import Login from './Pages/LandingPage/LoginPage';
import SignUp from './Pages/LandingPage/SignUpPage';
import SignUpVerify from './components/ui/SignUpVerify';

import Home from './Pages/Dashboard/Home';
import Profile from './Pages/Dashboard/Profile';
import CreatePost from './Pages/Dashboard/CreatePost';


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandingLayout />}>
                <Route index element={<LandingPageHome />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp onSuccess={() => setIsSignUpComplete(true)} />} />
                <Route path="signup/verify" element={<SignUpVerify />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="create-post" element={<CreatePost />} />
            </Route>
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
