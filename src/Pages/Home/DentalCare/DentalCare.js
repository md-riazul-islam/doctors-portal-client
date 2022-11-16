import React from 'react';
import dental from '../../../assets/images/treatment.png'
const DentalCare = () => {
    return (
        <div className="card mt-28 lg:card-side ">
        <div className='w-2/3'>
        <figure><img className='lg:h-96 rounded-2xl' src={dental} alt="Album"/></figure>
        </div>
        <div className="card-body my-auto w-1/2">
            <h2 className="card-title text-5xl font-semibold">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button class="btn btn-primary w-1/2 mt-3 ">Get Started</button>
            
        </div>
        </div>
    );
};

export default DentalCare;