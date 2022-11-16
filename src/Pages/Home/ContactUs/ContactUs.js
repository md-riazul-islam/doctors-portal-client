import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='mt-20 pt-6 '
        style={{
            background:`url(${appointment})`
        }}
        >
            <h4 className='text-xl font-bold text-primary text-center'>Contact Us</h4>
            <h2 className='text-4xl text-center text-white'>Stay connected with us</h2>
            
            <div className=" w-full">
                <div className="hero-content ">
                    <div className="card  w-1/2 ">
                    <div className="card-body w-full">
                        <div className="form-control w-full ">
                        <input type="text" placeholder="Email Address" className="input w-full  input-bordered" />
                        </div>
                        <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <textarea className="textarea textarea-bordered h-32" placeholder="Your Massage"></textarea>
                        </div>
                        <div className=" text-center mt-6">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default ContactUs;