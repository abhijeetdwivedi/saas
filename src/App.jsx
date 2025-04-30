import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/MyComponents/Navbar'
import { Login } from './Pages/LandingPage/Login'
import { SignUp } from './Pages/LandingPage/SignUp'



function App() {

    return (
        <>
            <section className='max-w-md w-full m-auto '>
                <SignUp/>
                <Login/>
            </section>
        </>
    )
}

export default App
