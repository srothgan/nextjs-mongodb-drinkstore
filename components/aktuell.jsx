"use client"
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineCalendar, AiFillCaretDown, AiFillCaretUp, AiOutlineInfoCircle, 
    AiOutlineApartment, AiOutlineSolution, AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle, AiOutlineCode  } from "react-icons/ai";


export default function Aktuell() {

    const [acc1, setAcc1] = useState(true);
    const [acc2, setAcc2] = useState(true);
    const [acc3, setAcc3] = useState(true);
    const [acc4, setAcc4] = useState(true);
    const [acc5, setAcc5] = useState(true);
    const toggleAccordion1 = () => {
        setAcc1(!acc1);
    };
    const toggleAccordion2 = () => {
        setAcc2(!acc2);
    };
    const toggleAccordion3 = () => {
        setAcc3(!acc3);
    };
    const toggleAccordion4 = () => {
        setAcc4(!acc4);
    };
    const toggleAccordion5 = () => {
        setAcc5(!acc5);
    };
    return (
            <div className='w-full  p-4'>
                <div className='w-full flex flex-col border-2 border-slate-300 rounded-sm box-border mb-4 px-2'>
                    <button
                        type="button"
                        className={`flex w-full justify-between items-center cursor-pointer p-2 ${acc1 ? 'border-b border-slate-300' : ''}`}
                        onClick={toggleAccordion1}
                    >
                        <div className='flex gap-2 items-center'>
                            <AiOutlineSolution  size={25}/>
                            <h4>Unternehmen</h4>
                        </div>
                        {acc1 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                    {acc1 && (
                        <div className='p-2'>
                            <p>Wir suchen aktuell Aushilfen, Teilzeitkräfte und Mitarbeiter in Festanstellung!</p>
                            <div className='mt-2 flex justify-center gap-4 w-full'>
                                <Link href='mailto:test@mail.de' className='uppercase text-white bg-red-600 p-2 rounded-full flex items-center '> 
                                    <AiOutlineMail size={22} /> <p className='ml-1'>Schreibe uns </p>
                                </Link>
                                <Link href='tel:000001111' className='uppercase text-white bg-red-600 p-2 rounded-full flex items-center '> 
                                    <AiOutlinePhone size={22} /> <p className='ml-1'>Rufe uns an</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className='w-full flex flex-col border-2 border-slate-300 rounded-sm box-border mb-4 px-2'>
                    <button
                        type="button"
                        className={`flex w-full justify-between items-center cursor-pointer p-2 ${acc2 ? 'border-b border-slate-300' : ''}`}
                        onClick={toggleAccordion2}
                    >
                        <div className='flex gap-2 items-center'>
                            <AiOutlineCalendar size={25}/>
                            <h4>Öffnungszeiten</h4>
                        </div>
                        {acc2 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                    {acc2 && (
                        <div className='p-2 block w-full'>
                                <div className='flex w-full justify-between  mb-2 '>
                                    <p className='font-bold'>Montag</p>
                                    <p>9:00-18:00</p>
                                </div>
                                <div className='flex w-full justify-between  mb-2'>
                                    <p className='font-bold'>Dienstag</p>
                                    <p>9:00-18:00</p>
                                </div>
                                <div className='flex w-full justify-between  mb-2'>
                                    <p className='font-bold'>Mittwoch</p>
                                    <p>9:00-18:00</p>
                                </div>
                                <div className='flex w-full justify-between  mb-2'>
                                    <p className='font-bold'>Donnerstag</p>
                                    <p>9:00-18:00</p>
                                </div>
                                <div className='flex w-full justify-between  mb-2'>
                                    <p className='font-bold'>Freitag</p>
                                    <p>9:00-18:00</p>
                                </div>
                                <div className='flex w-full justify-between  mb-2'>
                                    <p className='font-bold'>Samstag</p>
                                    <p>10:00-15:00</p>
                                </div>
                                <div className='flex w-full justify-between '>
                                    <p className='font-bold'>Sonntag</p>
                                    <p>Geschlossen</p>
                                </div>
                        </div>
                    )}
                </div>
                <div className='w-full flex flex-col border-2 border-slate-300 rounded-sm box-border mb-4 px-2'>
                    <button
                        type="button"
                        className={`flex w-full justify-between items-center cursor-pointer p-2 ${acc3 ? 'border-b border-slate-300' : ''}`}
                        onClick={toggleAccordion3}
                    >
                        <div className='flex gap-2 items-center'>
                            <AiOutlineInfoCircle size={25}/>
                            <h4>Bundesliga</h4>
                        </div>
                        {acc3 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                    {acc3 && (
                        <div className='p-2'>
                            <p>Wir veranstalten zu dem Bundesliga-Samstag Public Viewing mit Grillen und Getränken zu günstigen Preisen!</p>
                            
                        </div>
                    )}
                </div>
                <div className='w-full flex flex-col border-2 border-slate-300 rounded-sm box-border mb-4 px-2'>
                    <button
                        type="button"
                        className={`flex w-full justify-between items-center cursor-pointer p-2 ${acc4 ? 'border-b border-slate-300' : ''}`}
                        onClick={toggleAccordion4}
                    >
                        <div className='flex gap-2 items-center'>
                            <AiOutlineApartment  size={25}/>
                            <h4>Social Media</h4>
                        </div>
                        {acc4 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                    {acc4 && (
                        <div className='p-2'>
                            <p>Folge uns auf Social Media</p>
                            <div className='mt-2 w-full flex items-center justify-between px-8'>
                                <Link href='https://www.instagram.com' target="_blank" ><AiOutlineInstagram size={30}/></Link>
                                <Link href='https://www.facebook.com' target="_blank" ><AiOutlineFacebook size={30}/></Link>
                                <Link href='https://www.twitter.com' target="_blank" ><AiFillTwitterCircle  size={30}/></Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className='w-full flex flex-col border-2 border-slate-300 rounded-sm box-border mb-4 px-2'>
                    <button
                        type="button"
                        className={`flex w-full justify-between items-center cursor-pointer p-2 ${acc5 ? 'border-b border-slate-300' : ''}`}
                        onClick={toggleAccordion5}
                    >
                        <div className='flex gap-2 items-center'>
                            <AiOutlineCode   size={25}/>
                            <h4>Website</h4>
                        </div>
                        {acc5 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                    {acc5 && (
                        <div className='p-2'>
                            <p>Die Website wurde mit JS, TailwindCSS und MongoDB gebaut. Es werden keine Cookies gesammelt.</p>
                        </div>
                    )}
                </div>
            </div>
    )
  }
  