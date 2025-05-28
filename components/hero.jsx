import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineInfoCircle, AiOutlineUnorderedList} from "react-icons/ai";
import GroupImg from '../assets/zusammenarbeit.png';
export default function Hero() {
  return (
   <div className='flex bg-white pb-8' >
    <div className='w-[100%] lg:w-[60%] pt-16 pl-12 pr-12 lg:pr-0'>
        <h2 className='pb-8 font-sans text-red-600'>Herzlich Willkommen auf der Website von Top Getränke 123</h2>
        <p className='pb-12'>Wir freuen uns, Sie auf unserer Webseite begrüßen zu dürfen.
            Schauen Sie sich doch einfach um.
            Natürlich freuen wir uns sehr, wenn wir Sie in unserem Ladenlokal in Stadt X begrüßen können.</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>  
                <div className='w-full block'>
                    <div className='flex items-center mb-2'>
                        <AiOutlineInfoCircle size={20}/>
                        <h4 className='uppercase ml-2'>Standort</h4>
                    </div>
                    <p className='underline'>Top Getränke 123</p>
                    <p>Straße 1</p>
                    <p>Stadt X 11111</p>
                    <Link target='_blank' href='https://www.google.de/maps/place/Berlin/' >
                        <div className='w-fit bg-red-600 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-white mt-6 mb-12 md:mb-0'>
                            Google Maps
                        </div>
                    </Link>
                </div>
                <div className='w-full block'>
                    <div className='flex items-center mb-2'>
                        <AiOutlineUnorderedList size={20}/>
                        <h4 className='uppercase ml-2'>Sortiment</h4>
                    </div>
                    <div className='min-h-[72px] mb-6'>
                        <p >Bei uns können sie ein weites Sortiment an verschiedenen
                            Getränken einkaufen. Wir haben auch Spezialitäten.
                        </p>
                    </div>
                    <Link href='/sortiment' >
                        <div className='w-fit border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-black '>
                            Sortiment
                        </div>
                    </Link>
                </div>
            </div>  
    </div>
        <div className='hidden lg:flex flex-col w-[40%] items-center justify-center p-10'>
            <Image
                    src={GroupImg}
                    alt='Das Top Getränke 123 Team mit gutem Service und Freundlichkeit'
                    className='w-4/5'
                    />
            <div> Icons erstellt von <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com'</a></div>
        </div>
   </div>
  )
}