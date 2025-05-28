"use client"
import { useState } from 'react';
import Link from "next/link";
import {HiOutlineArrowCircleLeft} from "react-icons/hi"
export default function Sortiment(){

    const[category, setCategory] = useState("");
    const[brand, setBrand] = useState("");
    const[kind, setKind] = useState("");
    const[size, setSize] = useState("");
    const[price, setPrice] = useState("");
    const[alcohol, setAlcohol] = useState("");
    const[origin, setOrigin] = useState("");
    const[status, setStatus] = useState("");

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");
    
        try {
          const res = await fetch("http://localhost:3000/api/drink", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ category, brand, kind, size, price, alcohol, origin, status }),
          });
          if (res.ok) {
            setSuccessMessage("Neues Getränk erstellt");
            setCategory("");
            setBrand("");
            setKind("");
            setSize("");
            setPrice("");
            setAlcohol("");
            setOrigin("");
            setStatus("");
          } else {
            setErrorMessage("Fehler. Probiere nochmal")
            throw new Error("Failed to create a newsletter entry");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <main className='flex items-center justify-center'>
        <div className='w-2/3 block bg-slate-500 p-4 my-4 rounded-md'>
        <div className='w-full flex items-center justify-start'>
                <Link href='/dashboard/sortiment/' className='px-1 py-1 bg-slate-200 text-slate-500 rounded-full'><HiOutlineArrowCircleLeft size={40}/></Link>
        </div>
        
        <form id='contactform'
                    onSubmit={handleSubmit}
                    >
                    
                                    
                    <div className='flex w-full'>
                        <div className='w-1/2 block px-3 text-white'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Kategorie</label>
                                <select  className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required
                                onChange={(e)=> setCategory(e.target.value)}
                                value={category}>
                                    <option value="" disabled selected>Wähle Kategorie</option>
                                    <option value="WasserLimonade">Wasser & Limonade</option>
                                    <option value="Säfte">Säfte</option>
                                    <option value="Biere">Biere</option>
                                    <option value="Wein">Wein</option>
                                    <option value="Spirituosen">Spirituosen</option>
                                    <option value="SektProsecco">Sekt & Prosecco</option>
                                    <option value="CocktailsSirup">Cocktails & Sirup</option>
                                    <option value="Spezialitäten">Spezialitäten</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Marke</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setBrand(e.target.value)}
                                value={brand}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Art</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setKind(e.target.value)}
                                value={kind}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Größe in Liter</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='number'
                                required 
                                onChange={(e) => setSize(e.target.value)}
                                value={size}/>
                            </div>
                            
                        </div>
                        <div className='w-1/2 block px-3 text-white'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Preis</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='number'
                                required 
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Alkoholgehalt</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='number'
                                required 
                                onChange={(e) => setAlcohol(e.target.value)}
                                value={alcohol}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Herkunftsland</label>
                                <input className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required 
                                onChange={(e) => setOrigin(e.target.value)}
                                value={origin}/>
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Status</label>
                                <select  className='border-2 border-gray-300 rounded-lg p-3 text-black'
                                type='text'
                                required
                                onChange={(e)=> setStatus(e.target.value)}
                                value={status}>
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
                        Erstellen
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