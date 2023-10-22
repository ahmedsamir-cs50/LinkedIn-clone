// import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import HomeLoginPage from './Pages/LoginPage/HomeLoginPage'
import { MainPage } from './Pages/mainPage/mainPage'
// import HomeLogin from "./Components/Home/HomeLogin"
import Layout from "./Components/Layout/Layout"
import { Offline } from "react-detect-offline"
import { Toaster } from "react-hot-toast"

const App = () => {
  let routers = createBrowserRouter([
    {path:"", element:<Layout />, children:[
      {index:true, element:<HomeLoginPage/>},
      {path:"main", element:<MainPage/>},
      // {path:"*", element:<NotFound/>},
    ]}
  ])
  return (
  //   <div className='app'>
  //     <BrowserRouter>
  //     <NavBar/>
  //     <Routes>
  // <Footer/>
  //       <Route index element={<HomeLoginPage/>}/>
  //       <Route path='/main' element={<MainPage/>}/>
  //     </Routes>
  //     </BrowserRouter>
    // </div>
    <>
    <Offline><div className='network'>You are offline, Check your Network (surprise!)</div></Offline>
      <Toaster/>
    <RouterProvider router={routers}>
      <Layout/>
    </RouterProvider>
    </>
  )
}

export default App