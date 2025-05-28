"use client"

import { useState } from 'react';
import Link from "next/link";
import {HiOutlineArrowCircleLeft} from "react-icons/hi"
export default function EditSortiment({id,  category, brand, kind, size, price, alcohol, origin, status}){

    const[newCategory, setNewCategory] = useState(category);
    const[newBrand, setNewBrand] = useState(brand);
    const[newKind, setNewKind] = useState(kind);
    const[newSize, setNewSize] = useState(size);
    const[newPrice, setNewPrice] = useState(price);
    const[newAlcohol, setNewAlcohol] = useState(alcohol);
    const[newOrigin, setNewOrigin] = useState(origin);
    const[newStatus, setNewStatus] = useState(status);

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");
    
        try {
          const res = await fetch(`http://localhost:3000/api/drink/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ newCategory, newBrand, newKind, newSize, newPrice, newAlcohol, newOrigin, newStatus }),
          });
          if (res.ok) {
            setSuccessMessage("Getränk geändert");
          } else {
            setErrorMessage("Fehler. Probiere nochmal")
            throw new Error("Failed to change Drink");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <main className='flex items-center justify-center'>
        <div className='w-2/3 block bg-slate-500 p-4 my-4 rounded-md'>
        <div className='w-full flex items-center justify-start'>
                <Link href={`/dashboard/sortiment/infoDrink/${id}`} className='px-1 py-1 bg-slate-200 text-slate-500 rounded-full'><HiOutlineArrowCircleLeft size={40}/></Link>
        </div>
        
        <form id='contactform'
                    onSubmit={handleSubmit}
                    >
                    
                                    
                    <div className='flex w-full'>
                        <div className='w-1/2 block px-3 text-white'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Kategorie</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewCategory(e.target.value)}
                                value={newCategory}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Marke</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewBrand(e.target.value)}
                                value={newBrand}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Art</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewKind(e.target.value)}
                                value={newKind}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Größe in Liter</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewSize(e.target.value)}
                                value={newSize}/>
                            </div>
                            
                        </div>
                        <div className='w-1/2 block px-3 text-white'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Preis</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewPrice(e.target.value)}
                                value={newPrice}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Alkoholgehalt</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewAlcohol(e.target.value)}
                                value={newAlcohol}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Herkunftsland</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setNewOrigin(e.target.value)}
                                value={newOrigin}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Status</label>
                                <select  className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required
                                onChange={(e)=> setNewStatus(e.target.value)}
                                value={newStatus}>
                                    <option value="" disabled selected>Wähle Status</option>
                                    <option value="Vorhanden">Vorhanden</option>
                                    <option value="Bestellt">Bestellt</option>
                                    <option value="Ausverkauft">Ausverkauft</option>
                                </select>
                            </div>
   
                        </div>
                    </div>

                    <button 
                        id='contactbtn' 
                        className='w-fit py-2 ml-3 px-6 text-white mt-4 bg-red-600 border-3 border-red-600 rounded-full'
                        type='submit'
                        >
                        Getränk ändern
                    </button>
                </form>
                <p className='text-white my-2'>*Angaben ohne Einheiten</p>
                {successMessage && (
                <div className="mt-4">
                    <p className="text-green-500 font-bold">{successMessage}</p>
                </div>
                )}
                 {errorMessage && (
                <div className="mt-4">
                    <p className="text-red-500 font-bold">{errorMessage}</p>
                </div>
                )}
        </div>
        
    </main>
    )
}

