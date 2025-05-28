"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
export default function DashContacts() {
  const [numContacts, setNumContacts] = useState(0);
  const [lastContact, setLastContact] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/contact', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await res.json();
        if (data.contacts.length > 0) {
          setLastContact(data.contacts[data.contacts.length - 1].updatedAt);
        }
        
        setNumContacts(data.contacts.length);
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
          <p className='underline font-bold'>Anfragen </p>
          <div className='flex justify-between'>
            <p>Anzahl:</p>
              {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numContacts}</p>
              )}
          </div>
          <div className='flex justify-between'><p>Letzte Anfrage:</p>
              {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold'>{formatDate(lastContact)}</p>
              )}
          </div>
          <div className='mt-auto'>
      	    <Link className='flex items-center mt-3 hover:underline'href='/dashboard/anfragen'>Mehr <FaArrowAltCircleRight className='ml-2' size={15}/></Link>
          </div>
        </div>

  ) 
}