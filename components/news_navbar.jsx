
import Link from 'next/link';

export default function NewsNavbar(){

    return (
        <div className='flex justify-center items-center w-full bg-slate-500'>
            <div className='w-full flex flex-col '>
                    <ul className='py-4'>
                        <li className='border-b-3 border-slate-200 mt-2 py-1'><Link href='/dashboard/newsletter' className='text-md text-white py-2 uppercase hover:underline '>Übersicht</Link></li>
                        
                        <li className='border-b-3 border-slate-200 pr-2 py-2'><Link href='/dashboard/newsletter/sendmail' className=' text-md text-white  uppercase hover:underline'>E-Mail senden</Link></li>
                        
                        <li className='py-1 mb-2'><Link href='/dashboard/newsletter/contacts' className=' text-md text-white py-2 uppercase hover:underline' >Kontakte</Link></li>
                    </ul>    
                </div>
        </div>
    )
}