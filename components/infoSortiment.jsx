
import Link from "next/link";
import {HiOutlineArrowCircleLeft, HiOutlineCog} from "react-icons/hi"

export default function InfoSortiment({id,  category, brand, kind, size, price, alcohol, origin, status}){
    

        return (
            <main className='flex items-center justify-center'>
            <div className='w-2/3 block bg-slate-500 p-4 my-4 rounded-md'>
                <div className='w-full flex items-center justify-between'>
                        <Link href='/dashboard/sortiment/' className='px-1 py-1 mb-1 bg-slate-200 text-slate-500 rounded-full'><HiOutlineArrowCircleLeft size={40}/></Link>
                        <Link href={`/dashboard/sortiment/editDrink/${id}`} className='px-1 py-1 mb-1 bg-slate-200 text-slate-500 rounded-full'><HiOutlineCog size={40}/></Link>
                </div>
                
                <div>
                    <div className='text-slate-200 flex gap-2'><h4>{brand}</h4><h4>{kind}</h4></div>
                </div>
            <div className="bg-slate-200 w-full p-2 rounded-md mt-2">
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Kategorie:</p>
                    <div className='w-1/2 flex justify-start text-xl'>
                        {category}
                    </div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Marke:</p>
                    <div className='w-1/2 flex justify-start text-xl'>
                        {brand}
                    </div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Art:</p>
                    <div className='w-1/2 flex justify-start text-xl'>
                        {kind}
                    </div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Preis:</p>
                    <div className='w-1/2 flex justify-start text-xl'>
                        {price}<p className='ml-1'>€</p>
                    </div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Größe:</p>
                    <div className='w-1/2 flex justify-start text-xl'>
                        {size} <p className='ml-1'>Liter</p>
                    </div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Alkoholgehalt:</p>
                    <div className='w-1/2 flex justify-start text-xl'>
                        {alcohol}<p className='ml-1'>%</p>
                    </div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Herkunftsland:</p><div className='w-1/2 flex justify-start text-xl'>{origin}</div>
                </div>
                <div className='flex justify-between text-black  w-full px-4 mt-3'>
                    <p className='font-bold text-xl w-1/2'>Status:</p><div className='w-1/2 flex justify-start text-xl'>{status}</div>
                </div>
            </div>
            </div>
            
        </main>
        )
    }
    
    
