import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import MinNet from './components/MinNet'
import Login from './components/Login'
import Register from './components/Register'
import Movies from './components/Movies'
import SmallSideBar from './components/SmallSideBar'
import OneMovie from './components/OneMovie'
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/reset' element={<ForgotPassword />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/SmallSideBar' element={<SmallSideBar />}></Route>
            <Route path='/minnet' element={<MinNet />}></Route>
            <Route path='/OneMovie' element={<OneMovie />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
