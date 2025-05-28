"use client";
import { useEffect, useState } from 'react';

import {BsFillArrowUpCircleFill,BsArrow90DegDown, BsFillLockFill} from "react-icons/bs"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isInputSafe } from '@/utils/inputChecker';

export default function Footer() {

    const [mathVerifyValue, setMathVerifyValue] = useState("");
    const [datenverify, setDatenVerify]=useState(false)
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const pathname = usePathname();

  const checkFormat = () => {
    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(emailFormat)) {
      setErrorMessage(["Invalid email format"]);
      return false;
    }

    // Check math verification
    const expectedValue = 13;
    if (Number.parseInt(mathVerifyValue) !== expectedValue) {
      setErrorMessage(["Math verification failed"]);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if(!isInputSafe(email)){
      setErrorMessage("Malicious content was entered");
      setEmail("");
      return;
  }
    if (!checkFormat()) {
      // If checkFormat returns false, stop the submission
      return;
    }

    try {
        const request = await fetch('../../api/userexists',{
          method: "POST",
          headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify({  email }),
        })

        const {user} = await request.json(); 

        if(user){
          setSuccessMessage("");
            setErrorMessage("E-Mail bereits vorhanden");
            return;
        }
        const res = await fetch("http://localhost:3000/api/newsletter", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, datenverify }),
        });
        if (res.ok) {
          setSuccessMessage("Erfolgreich angemeldet");
          setEmail("");
          setMathVerifyValue("");
          setDatenVerify(false);
        } else {
          throw new Error("Failed to create a newsletter entry");
        }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setSuccessMessage("");
    setErrorMessage("");
    
  }, []);
    return (
        <div className=' bg-gray-700  text-white'>
            <div className='w-[100%] block md:flex bg-gray-700 text-white justify-between items-top px-8 py-4'>
                
                <div className='block w-full md:w-1/3'>
                    <Link href='#top' ><BsFillArrowUpCircleFill size={30}/></Link>
                    <h4 className='pt-6'>Top Getränke 123</h4>
                    <h2 className='py-2'>LOGO</h2>
                    <div className='block'>
                        <Link target='_blank' href='https://www.google.de/maps/place/Berlin/'>Straße 1  <br/> Stadt X <br/> 11111 </Link> 
                        <Link href='tel: 000001111' ><p className='mt-3'>Telefon: 00000 1111</p></Link>
                    </div>
                </div>
                <div className='block mt-5 md:mt-0 lg:flex items-top w-full md:w-1/3'>
                    <div className='block '>
                        <Link href='/'><p className='mb-3'>Startseite</p></Link>
                        <Link href='/sortiment'><p className='mb-3'>Sortiment</p></Link>
                        <Link href='/weinfachhandel'><p className='mb-3'>Weinfachhandel</p></Link>
                        <Link href='/partyservice'><p className='mb-3'>Party-Service</p></Link>
                        <Link href='/lieferservice'><p className='mb-3'>Lieferservice</p></Link>
                        <Link href='/anfahrt'><p className='mb-3'>Anfahrt</p></Link>
                        <Link href='/#contact'><p className='mb-3'>Kontakt</p></Link>
                    </div>
                </div>
                <div className='block w-full md:w-1/3 md:pl-12'>
                    <div>
                        <h4 className='mb-4'>E-Mail Newsletter</h4>
                        <form id='contactform'
                        onSubmit={handleSubmit}
                        >
                            
                            <label className='uppercase text-sm py-2'>Email*</label>
                            <input
                                className=' w-full border-2 rounded-lg p-3 flex border-gray-300 mb-2 text-black'
                                type='email'
                                name='email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <label className='uppercase text-sm py-2 '>8+5=?</label>
                            <input
                                className="w-full border-2 rounded-lg p-3 flex border-gray-300 text-black"
                                type="number" 
                                name="mathVerify"
                                required
                                id='mathverify'
                                onChange={(e) => setMathVerifyValue(e.target.value)}
                                value={mathVerifyValue}
                                
                            />
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
                                
                                type='submit'
                                className='w-full items-center flex justify-center p-4 text-white mt-4 border-3 border-red-600 rounded-full hover:font-bold '>
                                Anmelden
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
            <div className=' border-t-3 border-black'>
                <div className='flex justify-center md:justify-end mr-0 md:mr-3'>
                    <Link href='/signin' className='mr-2 hover:underline'>Anmelden</Link>
                    <Link href='/datenschutzhinweis' className='mr-2 hover:underline'>Datenschutzhinweis</Link>
                    <Link href='/impressum' className='hover:underline'>Impressum</Link>
                </div>
            </div>
        </div>
    )
  }