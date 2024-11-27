import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import OtpVerification from './Components/OtpVerification';
import { UserProvider } from './UserContext';
import FindPage from './FindPage';
import Dashboard from './UserDashboard';


const App = () => {
  return (
    <div>
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='register-company' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='otpverification' element={<OtpVerification />} />
          <Route path='find' element={<FindPage />} />
          <Route path='user-dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
      
    </div>
  )
}

export default App
