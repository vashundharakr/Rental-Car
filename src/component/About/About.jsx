import React from 'react'
import cardark from "../../assets/car1.png";

const About = () => {
    return (
        <div id='about' className='dark:bg-dark bg-slate-100
        dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                    <div
                    data-aos="slide-right"
                    data-aos-duration='1500'>
                        <img src={cardark} alt=""
                        className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,o.50)]' />
                    </div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 
                        data-aos="fade-up"
                        className='text-3xl sm:text-4xl font-bold font-serif'>
                            About us
                        </h1>
                        <p data-aos="fade-up">
                            Our platform offers a wide range of vehicles, from budget-friendly cars to luxury models, ensuring comfort, safety, and performance for every journey. With easy booking, transparent pricing, and 24/7 support, we make renting a car simple and hassle-free.
                        </p>
                        <p data-aos="fade-up">
                            To become a trusted and leading car rental platform by offering innovative solutions and exceptional service to our customers.
                        </p>
                        <button data-aos="fade-up"
                        className='button-outline'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;