import { useState } from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';
import Layout from './Pages/Layout';


function App() {
  // const [count, setCount] = useState(0)

  return (
 
  <BrowserRouter>
  <Routes>

    <Route path="/home" element={<Layout/>} exact />
  </Routes>
  
  </BrowserRouter>
    
  )
}

export default App
