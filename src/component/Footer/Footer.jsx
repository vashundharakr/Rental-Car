import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const quickLinks = [
  { title: "Home", link: "#" },
  { title: "About Us", link: "#about" },
  { title: "Cars", link: "#cars" },
  { title: "Contact", link: "#contact" },
];

const servicesLinks = [
  { title: "Car Rental", link: "#" },
  { title: "Airport Pickup", link: "#" },
  { title: "Outstation Trips", link: "#" },
  { title: "Local Packages", link: "#" },
];

const supportLinks = [
  { title: "Help Center", link: "#" },
  { title: "Terms & Conditions", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "FAQs", link: "#" },
];

const Footer = () =>
{
    return(
        <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
            <div className='container'>
                <div className='grid md:grid-cols-3 py-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'> Car Rental </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsam odit sequi expedita</p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <p>+91 234234234</p>
                        </div>
                        {/* Social handles */}
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className = "text-3xl hover:text-primary duration-300"/>
                            </a>
                             <a href="#">
                                <FaFacebook className = "text-3xl hover:text-primary duration-300"/>
                            </a>
                             <a href="#">
                                <FaLinkedin className = "text-3xl hover:text-primary duration-300"/>
                            </a>
                        </div>
                    </div>
                    {/* NavLink */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        {/* First col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Quick Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        quickLinks.map((data)=>{
                                            return(
                                                <li key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'>
                                                    <span className='mr-2'>⮚</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Second col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Our Services</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        servicesLinks.map((data)=>{
                                            return(
                                                <li key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'>
                                                    <span className='mr-2'>⮚</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Third col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Support</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        supportLinks.map((data)=>{
                                            return(
                                                <li key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'>
                                                    <span className='mr-2'>⮚</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;