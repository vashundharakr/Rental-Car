import React, { useState } from 'react';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi"
import ResponsiveMenu from "./ResponsiveMenu.jsx"
export const NavLinks = [
    {
        id:"1",
        name:"HOME",
        link:"#"
    },
    {
        id:"2",
        name:"CARS",
        link:"#cars",
    },
    {
        id:"3",
        name:"ABOUT",
        link:"#about",
    },
    {
        id:"4",
        name:"BOOKING",
        link:"#contact",
    }
]
const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);
    const togglemenu = () =>
    {
        setShowMenu(!showMenu);
    };
    return(
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
            <div className="container max-w-7xl mx-auto py-3 md:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
                    </div>
                    <div className="hidden md:block ml-auto">
                       <ul className="flex items-center gap-8">
                        {
                            NavLinks.map((data)=>(
                            <li key={data.id}
                            className='relative group'>
                               <a 
                               href={data.link}
                                className="py-2 text-lg font-medium text-gray-700 hover:text-yellow-500 hover:border-b-2 transition-colors dark:text-white duration-500">
                                {data.name}
                                </a>

                                <span className='absolute left-0 -bottom-1 w-0 h-[3px]  transition-all duration-300 group-hover:w-full'></span>
                                
                            </li>
                            ))
                        }
                       </ul> 
                    </div>
                    {/* dark mode icon */}
                    <div className='px-10'>
                        {
                            theme === "dark"?
                            (
                                <BiSolidSun
                                onClick={()=>setTheme("light")} 
                                className="text-2xl"/>
                            ):
                            (
                                <BiSolidMoon
                                onClick={()=>setTheme("dark")} 
                                className="text-2xl"/>
                            )
                        }
                    </div>
                {/* Mobile Hamburger menu */}
                <div className="md:hidden">
                {
                    showMenu?(
                        <HiMenuAlt1
                        onClick = {togglemenu}
                        size={30}
                        className='cursor-pointer transition-all'/>
                    ):(
                        <HiMenuAlt3 onClick = {togglemenu}
                        size={30}
                        className='cursor-pointer transition-all'/>
                    )
                }
                </div>
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu}/>
        </nav>
    )
}

export default Navbar