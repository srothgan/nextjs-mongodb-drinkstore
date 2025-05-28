import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex w-full  items-center justify-center mt-20 mb-20 '>
      <div className='block w-[80%] md:w-[60%] xl:w-[40%] bg-gray-600 text-white p-8 rounded-xl'>
            <div className='w-full border-b-3 border-white text-center'>
                <h2 >404 - Fehler</h2>
            </div>
           
            <p className='mt-2'>Es tut uns leid. Die angeforderte Website konnte nicht gefunden werden.</p>
            <div className='flex items-center justify-center'>
                <Link href="/" >
                    <button type="button" className='bg-red-600 border-3 border-red-600 pl-4 pr-4 pb-2 pt-2 rounded-full text-white mt-6 mb-12 md:mb-0'>
                        Startseite
                    </button>
                </Link>
            </div>
            
      </div>
    </div>
  )
}