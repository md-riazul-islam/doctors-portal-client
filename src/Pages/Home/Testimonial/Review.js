import React from 'react';

const Review = ({reviews}) => {
    const{name, img, review, location} = reviews;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <p>{review}</p>
            <div className='flex pt-4'>
            <img className='w-16' src={img} alt="" />
            <div className='pl-2'>
            <h2 className="card-title ">{name}</h2>
            <p><small>{location}</small></p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Review;