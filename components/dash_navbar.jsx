
import Link from 'next/link';

export default function DashNavbar(){

    return (
        <div className='flex justify-center items-center w-full bg-white'>
            <div className='flex w-fit items-top  bg-gray-200 rounded-lg p-4 mt-3'> 
                <div className='flex  text-sm justify-center uppercase border-3 border-white border-r-0 py-2 px-5'>
                    <Link href='/dashboard' >
                    <p className='hover:underline'>Übersicht</p>
                    </Link>
                </div>
                <div className='flex  text-sm justify-center uppercase border-3 border-white border-r-0 py-2 px-5'>
                    <Link href='/dashboard/newsletter' >
                    <p className='hover:underline'>Newsletter</p>
                    </Link>
                </div>
                <div className='flex  text-sm justify-center uppercase border-3 border-white border-r-0 py-2 px-5'>
                    <Link href='/dashboard/anfragen' >
                    <p className='hover:underline'>Anfragen</p>
                    </Link>
                </div>
                <div className='flex  text-sm justify-center uppercase border-3 border-white border-r-0 py-2 px-5'>
                    <Link href='/dashboard/sortiment' >
                    <p className='hover:underline'>Sortiment</p>
                    </Link>
                </div>
                <div className='flex text-sm justify-center uppercase border-3 border-white py-2 px-5'>
                    <Link href='/dashboard/konten' >
                    <p className='hover:underline'>Konten</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}