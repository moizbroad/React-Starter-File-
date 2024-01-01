import { useState } from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';
import Main from './Pages/mainPage';
import Signup from './Pages/SignupPage';
import LoginScreen from './Pages/LoginPage';


function App() {
  // const [count, setCount] = useState(0)

  return (
 
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Main/>} exact />
    <Route path="/signup" element={<Signup/>} exact />
    <Route path="/login" element={<LoginScreen/>} exact />

  </Routes>
  
  </BrowserRouter>
    
  )
}

export default App
