import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../../screens/login/Login'
import Register from '../../screens/register/Register'
import Home from '../../screens/home/Home'


const RouteConfig = () => {
    return (
        <div>
            <BrowserRouter>
          
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteConfig
