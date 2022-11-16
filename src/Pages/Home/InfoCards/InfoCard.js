import React from 'react';

const InfoCard = ({card}) => {
    const{name, icon, description, bgClass}=card
    return (
        <div className={`card md:card-side p-6 ${bgClass} shadow-xl bg-gradient-to-r from-primary-500 to-secondary-500`}>
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
    );
};

export default InfoCard;