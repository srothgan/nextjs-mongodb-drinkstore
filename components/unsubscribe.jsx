"use client"

import Link from 'next/link'
import { useState } from "react";
export default function Unsubscribe({id, email,}) {
    const[contact, setEmail]= useState(email);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleSubmit = async(e)=>{
      
        e.preventDefault()
        const confirmed = confirm('Willst du dich wirklich vom Top Getränke 123 Newsletter abmelden?')
      
        if (confirmed) {
           const res = await fetch(`http://localhost:3000/api/newsletter?id=${id}`, {
             method: "DELETE",
           });
      
           if (res.ok) {
            setEmail("");
            setSuccessMessage("Erfolgreich abgemeldet.");
           }else{
            setErrorMessage("Fehler. Probieren Sie es nochmal")
           }
        }
      }

  return (
    <div className='flex w-full  items-center justify-center mt-20 mb-20 '>
      <div className='block w-[80%] md:w-[60%] xl:w-[40%] bg-gray-600 text-white p-8 rounded-xl'>
            <div className='w-full border-b-3 border-white text-center'>
                <h4 >Newsletter Abmelden</h4>
            </div>
           
            <p className='mt-2'>Wenn Sie wünschen den Newsletter nicht mehr zu erhalten, können Sie sich hier abmelden.</p>
            <div className='flex items-center justify-start'>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3 text-gray-600">
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={contact}
                    className="border border-slate-500 px-4 py-2 rounded-md"
                    type="email"
                    />


                    <button type="submit" className="bg-red-600 font-bold text-white py-3 px-6 w-fit rounded-md">
                        Abmelden
                    </button>
                    {successMessage && (
                        <div className="mt-4">
                            <p className="text-green-600">{successMessage}</p>
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mt-4">
                            <p className="text-red-600">{errorMessage}</p>
                        </div>
                    )}
                </form>
            </div>
            
      </div>
    </div>
  )
}