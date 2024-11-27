import React, { useState } from 'react';
import { useUser } from '../UserContext';
import '../css/Header.css';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user, logoutUser } = useUser();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="flex justify-between px-[100px] items-center backColor  text-black">
      <div className="flex items-center">
        <div className="w-[100px] h-[80px]">
          <img src="./images/logo-removebg-preview.png" alt="Logo" className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-bold text-gray ml-4 cinzel">GlobalBridge</h1>
      </div>
      
      <nav className="flex items-center space-x-6">
        <a href="/" className="mx-4 font-bold text-xl hover:underline cinzel">Home</a>
        <a href="/about" className="mx-4 font-bold text-xl hover:underline cinzel">About Us</a>
        <a href="/find" className="mx-4 font-bold text-xl hover:underline cinzel">Find</a>
        <a href="/register-company" className="mx-4 font-bold text-xl hover:underline cinzel">Register</a>

        {user ? (
          <div className="relative">
            <button 
              onClick={toggleMenu} 
              className="mx-4 font-bold text-xl bg-blue-500 hover:bg-blue-700 text-white px-5 py-1 rounded-3xl cinzel"
            >
              {user.username}
            </button>
            {isMenuVisible && (
              <div className="absolute right-0 mt-2 w-[150px] bg-blue-600 text-white rounded-lg shadow-lg z-10">
                <ul className="py-2 font-semibold">
                  <li className="px-4 py-2 hover:bg-blue-500 rounded">
                    <a href="/profile"><i className="fa fa-user mr-2"></i>Profile</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-500 rounded">
                    <a href="/settings"><i className="fa fa-gear mr-2"></i>Settings</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-500 rounded">
                    <button onClick={logoutUser}><i className="fa fa-arrow-right mr-2"></i>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <a href="/login" className="mx-4 font-bold text-xl bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cinzel">
            Login
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
