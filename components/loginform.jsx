"use client"

import { useState } from 'react';
import { useRouter} from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginForm(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if ( !email || !password) {
            setError("Bitte alle Felder eintragen.");
            return;
        }

        try{
            const res =await signIn('credentials', {
                email, password, redirect:false
            })

            if(res.error){
                setError("Inkorrekte Felder");
                return;
            }
                router.replace('/dashboard')
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className='flex p-4 bg-white items-center justify-center'>
            <div className='w-[90%] md:w-[50%] lg:w-[30%] bg-slate-500 rounded-lg p-4'>
                <div className='flex w-full text-center border-b-3 border-slate-200 mb-3'>
                    <p className='flex w-full text-white text-xl py-3'>Anmelden</p>
                </div>
                <div>
                <form id='contactform'
                onSubmit={handleSubmit}
                        >
                            <label className='uppercase text-sm text-white py-2'>Email</label>
                            <input
                                className='w-full border-2 rounded-lg  p-3 flex border-gray-300 mb-2 text-black'
                                type='email'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <label className='uppercase text-sm text-white py-2 '>Passwort</label>
                            <input
                                className='w-full border-2 rounded-lg p-3 flex border-gray-300 text-black'
                                type='password'
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button
                                id='loginbtn'
                                type="submit"
                                className='w-full bg-red-600 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-white mt-3 hover:cursor-pointer hover:bg-red-800'>
                                Anmelden
                            </button>
                            {error && (
                                <div className="bg-red-500 py-1 px-3 rounded-md mt-2 w-fit">
                                    <p className="text-white">{error}</p>
                                </div>
                            )}
                        </form>
                </div>
                
            </div>

        </div>
    )
}