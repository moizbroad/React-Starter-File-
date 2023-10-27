import { useState } from 'react'
import './App.css'
import Forgot from './Pages/Forgot'
import Main from './Pages/Main'
import Signup from './Pages/Signup'
import Reset from './Pages/Reset'
import Inner from './Pages/Inner'
// import login from './Pages/login'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';


function App() {
  // const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Main />} exact />
  <Route path="/inner" element={<Inner />} exact />

  <Route path="/signup" element={<Signup />} exact />
  <Route path="/forgot" element={<Forgot />} exact />
  <Route path="/reset" element={<Reset />} exact />

  </Routes>
  
  </BrowserRouter>



   
 
   
    
  )
}

export default App
