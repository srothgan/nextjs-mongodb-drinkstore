
import Image from "next/image";
import Link from "next/link";
import Regal from '../assets/regal.jpg'
import Bier from '../assets/bier.png'
import Wasser from '../assets/wasser.png'
import Saft from '../assets/saft.png'
import Cocktail from '../assets/cocktail.png'
import Sekt from '../assets/sekt.png'
import Spirituosen from '../assets/tequila.png'
import Spezialitäten from '../assets/weltweiter-versand.png'
import Wein from '../assets/wein.png'
import { FaArrowRight } from "react-icons/fa";
export default function SortimentOverview(){


    return(
        <main className='w-full p-4'>
        <div className='w-full flex flex-col '>
            <div className='block lg:hidden bg-blue-600 p-3 md:p-4 text-white w-full lg:w-fit mb-3'>
                <h3>Aktuelle Angebote</h3>
                <p>Gültig vom 01.01.2024 bis 12.12.2024</p>
            </div>
            <div className='w-full  rounded relative'>
                
                <Image
                    src={Regal}
                    alt='ai regal'
                    className='w-full'
                    priority
                />
                <div className='hidden lg:block bg-blue-600 p-3 text-white w-fit absolute top-10 xl:top-20 left-o'>
                    <h3>Aktuelle Angebote</h3>
                    <p>Gültig vom 01.01.2024 </p>
                    <p>bis 12.12.2024</p>
                </div>
                <Link href='/angebote' className='bg-red-400 p-3 md:p-4 font-bold flex align-center gap-6 w-fit absolute bottom-2 md:bottom-10 right-0'>
                    <p>Zu den aktuellen Angeboten </p> <FaArrowRight size={20}/>
                </Link>
            </div>
            <div> Bild erstellt mit <Link href="https://firefly.adobe.com/" title="Adobe Firefly"> Adobe Firefly.</Link></div>
        </div>
        <div>
            <h3 className='mt-4 font-sans text-red-600'>Sortiment</h3>
            <div className='max-w-[1200px] mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-2 '>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Wasser}
                        alt='wasser sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Wasser und Limonade</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Saft}
                        alt='saft sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Säfte</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Bier}
                        alt='bier sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Biere</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Wein}
                        alt='Wein sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Wein</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Spirituosen}
                        alt='spirituosen sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Spirituosen</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Sekt}
                        alt='sekt sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Sekt und Prosecco</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Cocktail}
                        alt='cocktails sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Cocktails und Sirup</p>
                </Link>
                <Link href='/sortiment' className='flex flex-col w-full min-h-[110px] h-full items-center justify-center border-black border-3 rounded-xl hover:scale-105 ease-in duration-300'>
                    <Image
                        src={Spezialitäten}
                        alt='spezialitäten sortiment'
                        className='my-1 w-1/3'
                        />
                    <p className='w-full text-center text-lg z-10 text-black'>Spezialitäten</p>
                </Link>
            </div>
            <div> Icons erstellt von <a href="https://www.flaticon.com/de/autoren/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com'</a></div>
        </div>
        </main>

    )
}