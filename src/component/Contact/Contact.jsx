import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='dark:bg-black dark:text-white py-14'>
            <div  data-aos="fade-up"
            data-aos-delay='100'
            className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6'>
                    <div data-aos="fade-right"
                        data-aos-duration="1000" className='col-span-2 space-y-3'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                            {" "}Let's collaborate on your upcoming car rental venture</h1>
                        <p data-aos="fade-up"
                            data-aos-delay="300"
                            className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipiscing elit Blanditiis atque repisdit pilet</p>
                    </div>
                    <div data-aos="zoom-in"
                        data-aos-delay="600"
                        className='grid place-items-center'>
                        <a  href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20car"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-block font-semibold py-2 px-6 bg-primary tracking-wider uppercase hover:bg-primary/80 duration-300'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;