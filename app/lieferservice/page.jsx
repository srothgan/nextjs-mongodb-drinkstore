import Link from 'next/link';
import Image from 'next/image';
import {BiPlusMedical}  from "react-icons/bi";
import {AiOutlinePhone, AiOutlineMail} from "react-icons/ai";
import LieferImg from '../../assets/trucker-kappe.png'
export default function Lieferservice() {
    return (
        <div className='p-4 bg-white'>
            <h2 className='pb-8 font-sans text-red-600'>Lieferservice</h2>
            <div className='w-full text-center'>
                <p className='font-bold text-xl'>"Wir lösen Ihr Getränkeproblem"</p>
            </div>
            <div className='w-full flex justify-center mt-2'>
                <Link href='tel: 000001111' className='uppercase text-white bg-red-600 py-2 px-4 rounded-full ml-2 flex items-center '> 
                    <AiOutlinePhone size={22} /> <p className='ml-1'>Telefon</p>
                </Link>
                <Link href='mailto:test@mail.de' className='uppercase text-white bg-red-600 py-2 px-4 rounded-full ml-2 flex items-center '> 
                    <AiOutlineMail size={22} /> <p className='ml-1'>E-Mail </p>
                </Link>
            </div>
            <div className='block lg:flex w-full'>
                <div className='block w-full lg:w-1/2 mt-3'>
                    <div className='w-full flex  border-3 border-gray-400 p-4 rounded-lg mb-3'>
                        <div>
                            <BiPlusMedical  color='green' size={25} /> 
                        </div>
                        
                        <p className=' ml-2 '>Belieferung mit Getränken aller Art direkt in Ihr Büro, Ihre Firma oder nach Hause</p>
                    </div>
                    <div className='w-full flex border-3 border-gray-400 p-4 rounded-lg mb-3'>
                        <div>
                            <BiPlusMedical  color='green' size={25} /> 
                        </div>
                        <p className='ml-2'>flexible Lieferzeiten</p>
                    </div>
                    <div className='w-full flex border-3 border-gray-400 p-4 rounded-lg mb-3'>
                        <div>
                            <BiPlusMedical  color='green' size={25} /> 
                        </div>
                        <p className='ml-2'>unkomplizierte Abwicklung der Leergutrücknahme</p>
                    </div>
                    <div className='w-full flex border-3 border-gray-400 p-4 rounded-lg mb-3'>
                        <div>
                            <BiPlusMedical  color='green' size={25} /> 
                        </div>
                        <p className='ml-2'>günstige Lieferangebote</p>
                    </div>
                    <div className='w-full flex border-3 border-gray-400 p-4 rounded-lg mb-3'>
                        <div>
                            <BiPlusMedical  color='green' size={25} /> 
                        </div>
                        <p className='ml-2'>Kommissionsware für Ihre Veranstaltungen</p>
                    </div>
                    
                </div>
                <div className='flex flex-col w-full lg:w-1/2 mt-3 items-center justify-center '>
                    <Image
                        src={LieferImg}
                        alt='Top Getränke 123 moderner Transporter für die Lieferungen'
                        className='w-[90%] lg:w-3/4 -mt-10 lg:-mt-20 '
                    />
                    <div> Icons erstellt von <a href="https://www.flaticon.com/de/autoren/rasama-studio" title="Rasama studio"> Rasama studio </a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com'</a></div>
                </div>
            </div>
        </div>
        
    )
  }
  