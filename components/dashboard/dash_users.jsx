"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
export default function DashUser() {
  const [numUser, setNumUser] = useState(0);
  const [lastUser, setLastUser] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/register', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await res.json();
        if (data.users.length > 0) {
            setLastUser(data.users[data.users.length - 1].name);
        }
        
        setNumUser(data.users.length);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []); 
  return(
        <div className='shadow-lg p-4 bg-zinc-100/10 flex flex-col text-white h-full w-full'>
          <p className='underline font-bold'>Nutzer </p>
          <div className='flex justify-between'><p>Anzahl:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numUser}</p>
            )}</div>
          <div className='flex justify-between'><p>Neuster Nutzer:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{lastUser}</p>
            )}
          </div>
          <div className='mt-auto'>
            <Link className='flex items-center mt-3 hover:underline'href='/dashboard/konten'>Mehr <FaArrowAltCircleRight className='ml-2' size={15}/></Link>
          </div>
      	  
        </div>

  ) 
}
