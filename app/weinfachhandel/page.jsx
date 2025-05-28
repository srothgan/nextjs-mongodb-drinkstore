"use client";

import Link from 'next/link';
import Image from 'next/image';
import wein from '../../assets/wine.jpg';
import tmp from '../../assets/bier.png';
import Baden from '../../assets/Baden.svg';
import Mosel from '../../assets/Mosel.svg';
import Hessen from '../../assets/Hessen.svg';
import Pfalz from '../../assets/Pfalz.svg';
import Wuert from '../../assets/Wuerttemberg.svg';
import React from "react";

export default function Weinfachhandel() {

    const wineNames = [
        { id: 'pinot-grigio-1', name: 'Pinot Grigio' },
        { id: 'chardonnay-2', name: 'Chardonnay' },
        { id: 'sauvignon-3', name: 'Sauvignon' },
        { id: 'pinot-grigio-blush-4', name: 'Pinot Grigio Blush' },
        { id: 'merlot-5', name: 'Merlot' },
        { id: 'sangiovese-6', name: 'Sangiovese' },
        { id: 'cabernet-sauvignon-7', name: 'Cabernet Sauvignon' },
        { id: 'barolo-8', name: 'Barolo' },
        { id: 'chianti-9', name: 'Chianti' },
        { id: 'nebbiolo-10', name: 'Nebbiolo' },
        { id: 'medoc-11', name: 'Medoc' },
        { id: 'bordeaux-12', name: 'Bordeaux' },
        { id: 'syrah-13', name: 'Syrah' },
        { id: 'shiraz-14', name: 'Shiraz' },
        { id: 'lambrusco-15', name: 'Lambrusco' }
      ]
      const wineLands = [
        { id: 'frankreich-1', name: 'Frankreich' },
        { id: 'italien-2', name: 'Italien' },
        { id: 'spanien-3', name: 'Spanien' },
        { id: 'australien-4', name: 'Australien' },
        { id: 'suedafrika-5', name: 'Südafrika' },
        { id: 'usa-6', name: 'USA' },
        { id: 'griechenland-7', name: 'Griechenland' }
      ]
      
    return (
        <div className='p-4 bg-white'>
            <h2 className='pb-8 font-sans text-red-600'>Weinfachhandel</h2>
                <div className='w-full block lg:flex items-center'>
                    <div className='w-full lg:w-1/2 block'>
                        <p>Als ein Getränkemarkt mit einem Fokus auf Weinhandel können Sie von einem großen Weinangebot auswählen. Wir verkaufen nationale und internationale Weine. 
                            Durch ein Angebot von Weinen aus verschiedenen Flecken der Welt können Sie hier einen Wein finden, der Ihrem Geschmack entspricht. Mehr Informationen zu der
                            Herkunft unserer Weine und den verschiedenen Weinsorten finden Sie unten. Wir helfen Ihnen auch gerne persönlich bei der Wahl in unserem Geschäft aus den richtigen
                            Wein zu finden.</p>
                    </div>
                    <div className='flex justify-center w-full lg:w-1/2'>
                        <Image
                            src={wein}
                            alt='weinangebot'
                            className='my-4 lg:my-0 w-3/4'
                            priority
                            />  
                    </div>
                </div>
                <div className='block md:flex items-center jusitfy-between mt-2'>
                    <Link href='#winesorts' >
                        <button type="button" className='w-full md:w-auto mb-3 md:mb-0 md:mr-2 bg-red-600 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-white '>
                            Weinsorten
                        </button>
                    </Link>
                    <Link href='#germanwine' >
                        <button type="button" className='w-full md:w-auto mb-3 md:mb-0 md:mr-2 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-black '>
                            Deutsche Weine
                        </button>
                    </Link>
                    <Link  href='#internationalwine' >
                        <button type="button" className='w-full md:w-auto  bg-red-600 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-white '>
                            Internationale Weine
                        </button>
                    </Link>
                </div>
                {/*sorts of wine */}
                <div id='winesorts' className='block w-full pt-3'>
                    
                    <h4 className='font-sans text-red-600 mt-5'>Weinsorten:</h4>
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {wineNames.map((wine) => (
                            <div key={wine.id} className="flex items-start space-x-2">
                                <span className="text-xl">•</span>
                                <p className="text-lg">{wine.name}</p>
                            </div>
                        ))}
                    </div>
                </div>  
                {/*Interactive elements with information about german wine */}
                <div id='germanwine' className='block w-full pt-3'>
                    <h4 className='font-sans text-red-600 mt-5'>Deutsche Weine:</h4>
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        <div  className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                            <Image
                                src={Baden}
                                alt='Baden sortiment'
                                className='my-1 w-1/3'
                                />
                            <p className='w-full text-center text-lg z-10 text-black'>Baden</p>
                        </div>
                        <div  className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                            <Image
                                src={Mosel}
                                alt='Mosel sortiment'
                                className='my-1 w-1/3'
                                />
                            <p className='w-full text-center text-lg z-10 text-black'>Mosel</p>
                        </div>
                        <div  className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                            <Image
                                src={Hessen}
                                alt='Hessen sortiment'
                                className='my-1 w-1/3'
                                />
                            <p className='w-full text-center text-lg z-10 text-black'>Hessen</p>
                        </div>
                        <div  className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                            <Image
                                src={Wuert}
                                alt='Wuert sortiment'
                                className='my-1 w-1/3'
                                />
                            <p className='w-full text-center text-lg z-10 text-black'>Württemberg</p>
                        </div>
                        <div  className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                            <Image
                                src={Pfalz}
                                alt='Pfalz sortiment'
                                className='my-1 w-1/3'
                                />
                            <p className='w-full text-center text-lg z-10 text-black'>Pfalz</p>
                        </div>
                    </div>
                </div>  
                {/*International wine */}
                <div id='internationalwine' className='block w-full pt-3'>
                    <h4 className='font-sans text-red-600 mt-5'>Internationale Weine:</h4>
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {wineLands.map((wine) => (
                            <div key={wine.id} className="flex items-center space-x-2">
                                <span className="text-xl">•</span>
                                <p className="text-lg">{wine.name}</p>
                            </div>
                        ))}
                    </div>
                </div> 
                <p className='text-gray-500 mt-7 mb-3'>Wir führen deutsche und ausländische Weine auch in der 1 Liter Mehrwegflasche.</p>
        </div>
       
    )
  }