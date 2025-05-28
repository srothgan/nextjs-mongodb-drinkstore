export default function Times() {
    return (
        <div className='pb-4 items-center justify-center'>
            <div className='w-full flex items-center justify-center pt-8 '>
                <h3 className='pb-8 font-sans text-red-600'>Öffnungszeiten</h3>
            </div>
            <div className='block w-full px-4'>
                <div className='flex w-full justify-between  mb-2 '>
                    <p className='font-bold'>Montag</p>
                    <p>9:00-18:30</p>
                </div>
                <div className='flex w-full justify-between  mb-2'>
                    <p className='font-bold'>Dienstag</p>
                    <p>9:00-18:30</p>
                </div>
                <div className='flex w-full justify-between  mb-2'>
                    <p className='font-bold'>Mittwoch</p>
                    <p>9:00-18:30</p>
                </div>
                <div className='flex w-full justify-between  mb-2'>
                    <p className='font-bold'>Donnerstag</p>
                    <p>9:00-18:30</p>
                </div>
                <div className='flex w-full justify-between  mb-2'>
                    <p className='font-bold'>Freitag</p>
                    <p>9:00-18:30</p>
                </div>
                <div className='flex w-full justify-between  mb-2'>
                    <p className='font-bold'>Samstag</p>
                    <p>8:30-14:00</p>
                </div>
                <div className='flex w-full justify-between '>
                    <p className='font-bold'>Sonntag</p>
                    <p>Geschlossen</p>
                </div>

                
            </div>
        </div>
    )
  }