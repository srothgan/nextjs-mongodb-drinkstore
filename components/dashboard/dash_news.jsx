"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
export default function DashNews() {
  const [numNews, setNumNews] = useState(0);
  const [lastNews, setLastNews] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/newsletter', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await res.json();
        if (data.newsletter.length > 0) {
          setLastNews(data.newsletter[data.newsletter.length - 1].updatedAt);
        }
        
        setNumNews(data.newsletter.length);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []); 
  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return ` ${day}.${month}.${year}`;
  }
  return(
        <div className='shadow-lg p-4 bg-zinc-100/10 flex flex-col text-white h-full w-full'>
          <p className='underline font-bold'>Newsletter </p>
          <div className='flex justify-between'><p>Anzahl:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numNews}</p>
            )}
          </div>
          <div className='flex justify-between'><p>Letzte Anmeldung:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{formatDate(lastNews)}</p>
            )}
            </div>
            <div className='mt-auto'>
              <Link className='flex items-center mt-3 hover:underline'href='/dashboard/newsletter'>Mehr <FaArrowAltCircleRight className='ml-2' size={15}/></Link>
            </div>
      	  
        </div>

  ) 
}
