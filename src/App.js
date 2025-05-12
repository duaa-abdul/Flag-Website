import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Pages/Home'
import Detail from './Pages/Detail'




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='country/:code' element={<Detail/>}/>
      </Route>
    )
  )
  return (
<>

<RouterProvider router={router}/>

</>
  )
}

export default App
