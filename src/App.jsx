import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import NavBar from './Components/Utilities/NavBar'
import './index.css'
import HomeLoginPage from './Pages/LoginPage/HomeLoginPage'
import { MainPage } from './Pages/mainPage/mainPage'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
  
        <Route index element={<HomeLoginPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App