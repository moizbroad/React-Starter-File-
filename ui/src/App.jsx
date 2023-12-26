import { useState } from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';
import Layout from './Pages/Layout';
import Signup from './Pages/Signup';


function App() {
  // const [count, setCount] = useState(0)

  return (
 
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Layout/>} exact />
    <Route path="/signup" element={<Signup/>} exact />
  </Routes>
  
  </BrowserRouter>
    
  )
}

export default App
