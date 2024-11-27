import React from 'react'
import '../css/Header.css'

const Footer = () => {
  return (
    <div className='backColor cinzel py-[40px]'>
      <div className='flex justify-between max-w-[1200px] mx-auto'>
        <div className='basis-[30%]'>
          <div className='flex items-center mb-[20px]'>
              <img src="./images/logo-removebg-preview.png" alt="" className='w-[50px] h-[50px] mr-[10px]'/>
              <h3 className='text-2xl font-bold'>GlobalBridge</h3>
          </div>
          <p className='text-sm leading-relaxed font-semibold'>
            GlobalBridge is a platform that connects importers and exporters
            worldwide, facilitating global trade and business opportunities.
          </p>
          <div className='mt-[20px]'>
            <a href="/" className='text-lg mr-[10px] bg-blue-700 text-white rounded px-[12px] py-[5px] hover:bg-blue-800 font-medium'><i class="fa fa-facebook"></i></a>
            <a href="/" className='text-lg mr-[10px] bg-blue-700 text-white rounded px-[10px] py-[5px] hover:bg-blue-800 font-medium'><i class="fa fa-twitter"></i></a>
            <a href="/" className='text-lg mr-[10px] bg-blue-700 text-white rounded px-[10px] py-[5px] hover:bg-blue-800 font-medium'><i class="fa fa-instagram"></i></a>
            <a href="/" className='text-lg mr-[10px] bg-blue-700 text-white rounded px-[10px] py-[5px] hover:bg-blue-800 font-medium'><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className='basis-[30%]'>
        <h3 className='text-lg font-bold mb-[10px]'>Quick Links</h3>
          <ul className='list-none'>
            <li className='mb-[5px]'><a href="/" className='no-underline font-medium'>Home</a></li>
            <li className='mb-[5px]'><a href="/" className='no-underline font-medium'>About Us</a></li>
            <li className='mb-[5px]'><a href="/" className='no-underline font-medium'>Find</a></li>
            <li className='mb-[5px]'><a href="/" className='no-underline font-medium'>Register</a></li>
            <li className='mb-[5px]'><a href="/" className='no-underline font-medium'>Login</a></li>
          </ul>
        </div>
        <div className='basis-[30%]'>
        <h3 className='text-lg font-bold mb-[10px]'>Contact Us</h3>
          <form className='flex flex-col'>
            <input type="email" placeholder="Email"  className='mb-[10px] p-[10px] border-none rounded-s-md'/>
            <textarea placeholder="Message" className='mb-[10px] p-[10px] border-none rounded-s-md'></textarea>
            <button type="submit" className='bg-blue-600 py-2 px-8 hover:bg-blue-700 rounded text-white font-bold'>Send</button>
          </form>
        </div>
      </div>
      <div className='bg-blue-600 py-[5px] text-sm mt-[10px] text-center font-semibold'>
        <p>
          &copy; 2023 GlobalBridge. All rights reserved. | Designed by
          <a href="/">Your Name</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
