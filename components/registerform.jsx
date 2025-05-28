"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useRouter} from 'next/navigation';
import {HiOutlineArrowCircleLeft} from "react-icons/hi"
export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSucess] = useState("");
    const router = useRouter();

    const handleSubmit =async (e) => {
        setError("");
        setSucess("Registrierung wird bearbeitet...");
        e.preventDefault();
        
        if (!name || !email || !role|| !password) {
            setSucess("");
            setError("Bitte alle Felder eintragen.");
            return;
        }
        try{
            const request = await fetch('../../api/userexists',{
                method: "POST",
                headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({  email }),
            })

            const {user} = await request.json(); 

            if(user){
                setSucess("");
                setError("Nutzer existiert bereits.");
                return;
            }
            const res = await fetch('../../api/register', {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ name, email, role, password }),
          });
          if (res.ok) {
            setName(""); // Clear the input fields
            setEmail("");
            setRole("");
            setPassword("");
            // router.push('/signin')
            setSucess("Nutzer erfolgreich erstellt.");
            
          } else {
            throw new Error("Failed to create a new user");
          }

        }catch(error){

        }
    }

    return (
        <main className='flex items-center justify-center'>
            <div className='w-2/3 block bg-slate-500 p-4 my-4 rounded-md'>
                <div className='w-full flex items-center justify-start'>
                        <Link href='/dashboard/konten/' className='px-1 py-1 bg-slate-200 text-black rounded-full'><HiOutlineArrowCircleLeft size={40}/></Link>
                </div>
                    <form id='contactform' onSubmit={handleSubmit}>
                        <div className='flex w-full'>
                            <div className='w-1/2 block px-3 text-white'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input
                                className='w-full border-2 rounded-lg p-3 flex border-gray-300 mb-2 text-black'
                                type='text'
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input
                                className='w-full border-2 rounded-lg p-3 flex border-gray-300 mb-2 text-black'
                                type='email'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            </div>
                            <div className='w-1/2 block px-3 text-white'>
                                <label className='uppercase text-sm py-2'>Rolle</label>
                                <select  className='w-full border-2 border-gray-300 rounded-lg p-3 mb-2 text-black'
                                type='text'
                                required
                                onChange={(e)=> setRole(e.target.value)}
                                value={role}>
                                    <option value="" disabled selected>Wähle Rolle</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Mitarbeiter">Mitarbeiter</option>
                                </select>
                                <label className='uppercase text-sm py-2'>Passwort</label>
                                <input
                                    className='w-full border-2 rounded-lg p-3 flex border-gray-300 text-black'
                                    type='password'
                                    name='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            </div>
                            <button
                                id='loginbtn'
                                type="submit"
                                className='w-fit ml-3 bg-red-600 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-white mt-3 hover:cursor-pointer hover:bg-red-800'>
                                Registrieren
                            </button>
                            {error && (
                                <div className="bg-red-500 py-1 px-3 rounded-md mt-2 w-fit">
                                    <p className="text-white">{error}</p>
                                </div>
                            )}
                            {success && (
                                <div className="bg-green-500 py-1 px-3 rounded-md mt-2 w-fit">
                                    <p className="text-black">{success}</p>
                                </div>
                            )}
                            
                        
                    </form>
            </div>
        </main>   
    );
}

