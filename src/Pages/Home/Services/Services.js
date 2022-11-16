import React from 'react';
import treatment from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

const serviceData = [
    {
        id:1,
        name:'fluoride Treatment',
        description:"Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist",
        icon: treatment
    },
    {
        id:2,
        name:'Cavity Filling',
        description:"Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure.",
        icon: cavity
    },
    {
        id:3,
        name:'Teeth Whitening',
        description:"Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World's Most Advanced Teeth Whitening System.",
        icon: teeth
    },
]
    return (
        <div className='mt-20 '>
            <div>
                <h3 className='text-2xl text-center text-primary font-bold'>OUR SERVICES</h3>
                <h2 className='text-5xl mt-2 text-center'>Services We Provide</h2>
            </div>
            
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8' >
           {
                serviceData.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;