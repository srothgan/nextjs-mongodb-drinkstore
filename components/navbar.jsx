"use client"; // This is a client component

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaFacebookF, FaGoogle, FaInstagram} from 'react-icons/fa';
import React from "react";
import { AiOutlineArrowDown, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import MobileMenu from './mobilemenu';

const Navbar = () => {
    const [nav, setNav] = useState(false); 
    const handleNav = () => {
        setNav(!nav);
      };
    
    const pathname = usePathname();
    const [changes, setChanges] = useState(0);

    useEffect(() => {
        if(openAcc1)( handleOpenAcc1('sortiment', 'sortimentsub', openAcc1))
       if(openAcc2)(handleOpenAcc2('partyservice', 'partyservicesub', openAcc2))
        
      }, []);
      
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);

    const handleOpenAcc1 = (id1, id2, value) => {
        setOpenAcc1((cur) => !cur);
        positionTargetDiv(id1, id2, value);
    };

    const handleOpenAcc2 = (id1, id2, value) => {
        setOpenAcc2((cur) => !cur);  
        positionTargetDiv(id1, id2, value);
    };

      const positionTargetDiv = (id1, id2, value) => {
        const referenceDiv = document.getElementById(id1);
        const targetDiv = document.getElementById(id2);
    
        if (referenceDiv && targetDiv) {
            if (value) {
                targetDiv.style.display = "none";
                targetDiv.style.zIndex = 0; // Reset the z-index
            } else {
                const referenceRect = referenceDiv.getBoundingClientRect();
                targetDiv.style.display = "block";
                targetDiv.style.position = "absolute";
                targetDiv.style.top = `${referenceRect.bottom }px`; 
                targetDiv.style.left = `${referenceRect.bottom + scrollY}px`;
                targetDiv.style.width = `${referenceRect.offsetWidth }px`;
                targetDiv.style.zIndex = 10; // Move the target div to a higher z-index
            }
        }
    };
    const navLinks = [
        { name: 'Startseite', url: '/' , id:1},
        { name: 'Sortiment', url: '/sortiment', id:2 },
        { name: 'Weinfachhandel', url: '/weinfachhandel', id:3},
        { name: 'Partyservice', url: '/partyservice', id:4},
        { name: 'Lieferservice', url: '/lieferservice', id:5 },
        { name: 'Anfahrt', url: '/anfahrt', id:6 },
        { name: 'Kontakt', url: '/#contact', id:7 },
      ];
  return (
    <div>

    
        {/* menu for large screen */}
        
        <div className='flex justify-between items-center w-full h-full px-2 bg-white filter drop-shadow-md'>
            
            <Link href='/'>
                <h2 className='p-2'>LOGO</h2>
            </Link>
            <div className='hidden xl:flex w-full items-top  rounded-lg p-4 ml-2'> 
                <div className="hidden md:flex justify-between w-full">                   
                    {navLinks.map((link) => (
                        <div key={link.id} className='flex text-sm justify-between uppercase py-5'>
                            <Link href={link.url} >
                                <p className='font-semibold hover:underline'>{link.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                
            </div>
            {/*burger button for mobile menu*/}
            <button 
            type="button"
            className='xl:hidden' onClick={handleNav}>
                <AiOutlineMenu size={25} />
          </button>
        </div>

        {/* mobile navigation*/}
        {/* overlay*/}
        <div className=
            {nav ? 'xl:hidden z-20 fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className=
                {nav ?'fixed right-0 top-0 w-[80%] sm:w-[65%] md:w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-auto'
                : 'fixed right-[-100%] top-0 w-[80%] sm:w-[65%] md:w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-auto'}
                >
                <div className='flex w-full items-center justify-between'> 
                        <h2>LOGO</h2>
                     {nav && (
                        <button 
                        type="button" onClick={handleNav} className='fixed right-3 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </button>
                    )}
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>
                        Service & Qualität zu ehrlichem Preis
                    </p>
                </div>
                {/*place mobile menu here*/}
                <MobileMenu/>

                <div className='flex w-[80%] items-center justify-between mt-4 ml-[10%]'>
                    <Link href='/' >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaFacebookF size={25}/>
                        </div> 
                    </Link>
                    <Link href='/' >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaInstagram size={25}/>
                        </div> 
                    </Link>
                    <Link href='/' >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGoogle size={25}/>
                        </div> 
                    </Link>
                </div>

            </div>
        </div>
        
    </div>
    
  );
};

export default Navbar;