"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
export default function DashDrinks() {

  
  const [drinks, setDrinks] = useState([])
  const [numDrinks, setNumDrinks] = useState(0);
  const [numVorhanden, setNumVorhanden] = useState(0);
  const [numAusverkauft, setNumAusverkauft] = useState(0);
  const [numBestellt, setNumBestellt] = useState(0);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/drink', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch drinks');
        }
        const data = await res.json();
        setDrinks(data)
        setNumDrinks(data.drinks.length);
        
        const numVorhanden = data.drinks.filter(drink => drink.status === 'Vorhanden').length;
        const numAusverkauft = data.drinks.filter(drink => drink.status === 'Ausverkauft').length;
        const numBestellt = data.drinks.filter(drink => drink.status === 'Bestellt').length;

        setNumVorhanden(numVorhanden);
        setNumAusverkauft(numAusverkauft);
        setNumBestellt(numBestellt);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []); 

  return(
        <div className='shadow-lg p-4 bg-zinc-100/10 flex flex-col text-white h-full w-full'>
          <p className='underline font-bold'>Sortiment </p>
          <div className='flex justify-between'><p>Gesamt Anzahl:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numDrinks}</p>
            )}
          </div>
          <div className='flex justify-between'><p>Vorhanden Anzahl:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numVorhanden}</p>
            )}
          </div>
          <div className='flex justify-between'><p>Ausverkauft Anzahl:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numAusverkauft}</p>
            )}
          </div>
          <div className='flex justify-between'><p>Bestellt Anzahl:</p>
            {loading?(
                <IoReloadCircle size={20} className="animate-spin"/>
              ):(
                <p className='font-bold '>{numBestellt}</p>
            )}
          </div>
          <div className='mt-auto'>
      	    <Link className='flex items-center mt-3 hover:underline'href='/dashboard/sortiment'>Mehr <FaArrowAltCircleRight className='ml-2' size={15}/></Link>
          </div>
        </div>

  ) 
}