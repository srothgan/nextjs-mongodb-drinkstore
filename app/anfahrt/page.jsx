import Link from 'next/link';
import Zeiten from '../../components/times'
import {AiFillApple, AiFillGoogleCircle} from 'react-icons/ai'
export default function Anfahrt() {
    
    return (
        <div className='p-4 bg-white'>
            <h2 className='pb-8 font-sans text-red-600'>Anfahrt</h2>
            <div className='block md:flex w-full'>
                <div className='block w-full md:w-1/2 mt-3 pr-1 md:border-r-4 border-gray-500'>
                    <div className='pl-4 mt-4'>
                        <p className='underline'>Top Getränke 123</p>
                        <Link target='_blank' className='hover:font-bold'href='https://www.google.de/maps/place/Berlin/'>Straße 1  <br/> Stadt X <br/> 11111 </Link> 
                    </div>
                        <Zeiten/>
                </div>
                <div className='block w-full md:w-1/2 mt-3 px-2 '>
                    {/*different frame sizes depending on screen size */}
                    <iframe title='large-googlemaps-place'className='hidden md:block' width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=de&amp;q=Platz%20der%20Republik%201%20Berlin+(Hauptstadt%20Deutschland)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                    <iframe title='small-googlemaps-place' className='flex md:hidden' width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=300px&amp;hl=de&amp;q=Platz%20der%20Republik%201%20Berlin+(Hauptstadt%20Deutschland)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                </div>
            </div>
            

        </div>
    )
  }
  