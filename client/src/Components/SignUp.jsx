import React, { useState } from 'react';
import axios from 'axios';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle sign-up form input changes
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/sign-up', signUpData);
      if (response.data.success) {
        console.log(response);
        toast.success('OTP Send Successfully!');
        localStorage.setItem('email', signUpData.email);
        setTimeout(() => {
          navigate('/otpverification');
        }, 1500); 
        // Store email in localStorage
        
        // Redirect to OTP verification page
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
    }
     // Use navigate() for redirection
  };

  return (
    <div className='bgColor1 min-h-screen'>
      <div className='flex flex-row'>
        <div className='h-[500px] w-[40%]'>
          <img
            src="./images/bg6.jpg"
            alt=""
            className='w-full h-full mt-[70px] ml-[150px] mb-[50px] object-cover borderRadius1 overflow-hidden'
          />
        </div>
        <div>
          <div className='flex ml-[200px] mr-[50px]'>
            <img
              src="./images/logo-removebg-preview.png"
              alt="Logo"
              className='h-[100px] w-[100px]'
            />
            <a href="/"><h1 className='cinzel text-5xl font-bold items-center my-6'>GlobalBridge</h1></a>
          </div>
          <div className='mt-[20px] mr-[100px] mb-[50px] ml-[280px]'>
            <div className='bg-blue-300 mb-5 p-5 mt-2'>
              <h2 className='text-center text-3xl Geneva font-bold'>Create Account</h2>

              {/* Sign-up form */}
              <form onSubmit={handleSendOtp}>
                <div className='m-[10px]'>
                  <label htmlFor="username" className='text-lg font-semibold Arial'>Username <span>*</span></label> <br />
                  <input
                    type="text"
                    id="username"
                    name='username'
                    value={signUpData.username}
                    onChange={handleSignUpChange}
                    required
                    className='h-[30px] w-[300px] text-lg TimesNewRoman px-[20px] py-[5px] rounded my-[5px] mx-[10px]'
                  /><br />
                </div>
                <div className='m-[10px]'>
                  <label htmlFor="email" className='text-lg font-semibold Arial'>Email <span>*</span></label> <br />
                  <input
                    type="email"
                    id="email"
                    name='email'
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    required
                    className='h-[30px] w-[300px] text-lg TimesNewRoman px-[20px] py-[5px] rounded my-[5px] mx-[10px]'
                  /><br />
                </div>
                <div className='m-[10px]'>
                  <label htmlFor="password" className='text-lg font-semibold Arial'>Password <span>*</span></label><br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                    className='h-[30px] w-[300px] text-lg TimesNewRoman px-[10px] py-[5px] rounded my-[5px] mx-[10px]'
                  />
                </div>
                
                <button
                  type="submit"
                  className='w-[320px] mx-[10px] py-[7px] px-[20px] text-lg rounded border-black border-solid bg-blue-700 cursor-pointer text-white font-semibold'>
                  Send OTP
                </button>
              </form>

              <p className='text-center text-base'>Already have an account then <span className='text-lg font-bold'><a href="/login">Login</a></span></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
