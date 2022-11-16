import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        
<div className="hero  mt-10  mb-12  ">
  <div className="hero-content w-full flex-col lg:flex-row-reverse">
    <img src={chair} alt="this is chair w-1/2 md:w-full" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary-500 to-secondary-500 text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;