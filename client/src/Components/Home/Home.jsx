import React from 'react'
import '../../css/Home.css'

const Home = () => {
  return (
    <div>
      <div className='flex backImg h-[80vh] wheat cinzel items-center p-[2rem]'>
        <div className='text-center p-[2rem] mx-auto'>
            <p className='text-[3rem] mb-1 font-bold'>Welcome to</p>
            <h1 className='text-[5rem] mb-4 font-bold'>GlobalBridge</h1>
            <p className='text-2xl mb-8'>The trusted platform for global trade and business connections.</p>
            <a href="/" className='text-white bg-blue-500 py-4 px-8 text-xl rounded font-bold hover:bg-blue-600'>Get Started</a>
        </div>
        {/* <div className='w-[50%] h-[400px]'>
            <img src="./images/pexels-mali-70418.jpg" alt="Global Trade" className='w-full h-full'/>
        </div> */}
      </div>

      {/* feature section */}
      <div className='text-center px-8 py-16 bgColor2 cinzel'>
        <h2 className='text-3xl font-bold'>Key Features</h2>
        <div className='flex justify-between mt-8'>
            <div className='basis-[30%] p-8'>
                <img src='./images/verified1.jpg' alt='Verified' className='h-[200px] w-[200px] rounded-full object-cover m-4 mx-auto'/>
                <h3 className='text-2xl mb-4 font-bold'>Verified Profiles</h3>
                <p className='text-xl font-semibold'>Our platform ensures the authenticity of importers and exporters by verifying their company information and documents.</p>
            </div>
            <div className='basis-[30%] p-8'>
                <img src='./images/pexels-gabby-k-7412095.jpg' alt='Search' className='h-[200px] w-[200px] rounded-full object-cover m-4 mx-auto'/>
                <h3 className='text-2xl mb-4 font-bold'>Comprehensive Search</h3>
                <p className='text-xl font-semibold'>Users can easily search and find verified importers and exporters based on various criteria, including location, product, and industry.</p>
            </div>
            <div className='basis-[30%] p-8'>
                <img src='./images/secure.jpg' alt='Security' className='h-[200px] w-[200px] rounded-full object-cover m-4 mx-auto'/>
                <h3 className='text-2xl mb-4 font-bold'>Secure Connections</h3>
                <p className='text-xl font-semibold'>GlobalBridge provides a secure environment for businesses to engage in trade negotiations and transactions, protecting their sensitive information.</p>
            </div>
        </div>
      </div>

      <div className='py-16 px-8 text-center cinzel bgColor1'>
        <h2 className='text-4xl mb-4 font-bold'>Join GlobalBridge Today</h2>
        <p className='text-2xl mb-14'>Unlock the power of global trade with our trusted platform.</p>
        <a href="/"  className='text-white bg-blue-500 py-4 px-8 text-xl rounded font-bold hover:bg-blue-600'>Join Now</a>
      </div>
    </div>
  )
}

export default Home
