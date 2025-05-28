"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaFacebookF, FaInstagram, FaGoogle, FaFax} from 'react-icons/fa';
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import { usePathname } from 'next/navigation';
import { isInputSafe } from '@/utils/inputChecker';
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reference, setReferenz] = useState('');
    const [message, setMessage] = useState('');
    const [datenverify, setDatenVerify]=useState(false)
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const pathname = usePathname();
    
    const checkFormat = () => {
        
        if(name.length<3){
            setErrorMessage(["Name mindestens 3 Charaktere"]);
            return false;
        }
        if(name.length>30){
            setErrorMessage(["Name maximal 30 Charaktere"]);
            return false;
        }
        const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!email.match(emailFormat)) {
            setErrorMessage(["Inkorrekte E-Mail"]);
            return false;
        }
        if(reference.length<3){
            setErrorMessage(["Betreff mindestens 3 Charaktere"]);
            return false;
        }
        if(message.length<5){
            setErrorMessage(["Nachricht mindestens 5 Charaktere"]);
            return false;
        }
        return true;
      };

    const handleSubmit =  async (e) => {
        
        e.preventDefault()
        setSuccessMessage("");
        setErrorMessage("");
        if(!isInputSafe(name)|!isInputSafe(email)|!isInputSafe(reference)|!isInputSafe(message)){
            setErrorMessage("Malicious content was entered");
            setName(""); // Clear the input fields
            setEmail("");
            setMessage("");
            setReferenz("");
            setDatenVerify(false);
            return;
        }
        if (!checkFormat()) {
            // If checkFormat returns false, stop the submission
            return;
          }

        try{
            const res = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({ name, email, reference, message, datenverify}),
              });
              if (res.ok) {
                setSuccessMessage("Anfrage erfolgreich gesendet.");
                setName(""); // Clear the input fields
                setEmail("");
                setMessage("");
                setReferenz("");
                setDatenVerify(false);
              } else {
                throw new Error("Failed to create a new contact message");
              }
        }catch(error){
            console.log(error);
        }
      };
      useEffect(() => {
        setSuccessMessage("");
        setErrorMessage("");
        
      }, []);
    return (
        <div className='pb-6' id='contact'>
            <div className='w-full flex items-center justify-center pt-8 '>
                <h3 className='pb-8 font-sans text-red-600'>Kontakt</h3>
            </div>
            <div className='block lg:flex'>
                <div className='flex  w-[90%] lg:w-[30%] p-4 bg-gray-200 shadow-xl shadow-gray-400 ml-[5%] rounded-xl'>
                    <div title='content'>
                        <h4>Top Getränke 123</h4>
                        <h2 className='py-2'>LOGO</h2>
                        <p>Kontaktiere Sie uns gerne bei Fragen oder Feedback</p>
                        
                        <div className='flex w-[95%] items-center justify-between mt-5 '>
                            
                            <Link href='mailto:test@mail.de' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail size={20}/>
                                </div> 
                            </Link>
                            <Link href='tel: 000001111' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlinePhone size={20}/>
                                </div> 
                            </Link>
                            <Link href='fax: 000001111' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFax size={20}/>
                                </div> 
                            </Link>
                        </div>
                        <p className='mt-10'>Folgt uns auf Social Media</p>
                        
                        <div className='flex w-[95%] items-center justify-between mt-5 '>
                            
                            <Link href='/' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGoogle size={20}/>
                                </div> 
                            </Link>
                            <Link href='/' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFacebookF size={20}/>
                                </div> 
                            </Link>
                            <Link href='/' >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaInstagram size={20}/>
                                </div> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' w-[90%]  lg:w-[55%] mt-3 lg:mt-0 p-4 bg-gray-200  shadow-xl shadow-gray-400 ml-[5%] rounded-xl'>
                    <form id='contactform'
                    onSubmit={handleSubmit}
                    >
                    
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 ' htmlFor='Kundenname'>Name</label>
                        <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                        id='Kundenname'
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    </div>
                
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2' htmlFor='email'>Email</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='email'
                            name='email'
                            required
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 ' htmlFor='Referenz'>Betreff</label>
                        <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='reference'
                        id='Referenz'
                        required
                        onChange={(e) => setReferenz(e.target.value)}
                        value={reference}
                        />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2' htmlFor='nachricht'>Nachricht</label>
                        <textarea
                            className='border-2 rounded-lg p-3 border-gray-300'
                            rows='5'
                            name='message'
                            required
                            id='nachricht'
                            placeholder='Nachricht eingeben...'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                    <div className='flex mt-2 w-full items-start'>
                        <input
                            className="border-2  w-5 h-5 mt-0.4 mr-2 rounded-lg flex border-gray-300 text-black"
                            type="checkbox" 
                            name="datenverify"
                            required
                            id='datenverify'
                            onChange={(e) => setDatenVerify(e.target.checked)}
                            checked={datenverify}
                            
                        />
                        <label htmlFor="datenverify">Ich habe den <Link href='/datenschutzhinweis' className='text-blue-500 hover:underline'>Datenschutzhinweis</Link> gelesen und stimme diesem zu.</label>
                    </div>
                    <button 
                        id='contactbtn' 
                        className='w-full p-4 text-white mt-4 bg-red-600 border-3 border-red-600 rounded-full'
                        type='submit'
                        >
                        Absenden
                    </button>
                </form>
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
                </div>
            </div>
            

        </div>
        
    )
  }