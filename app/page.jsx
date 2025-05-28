import Pagelayout from './pagelayout'
import Hero from '@/components/hero'
import SortimentOverview from '@/components/sortiment_overview'
import Contact from '@/components/contact'
import Aktuell from '@/components/aktuell'
import Times from '@/components/times'

export default function Home() {
  return (
   <div>
    <Hero/>
    <Pagelayout>
      <SortimentOverview/>
      <Contact/>
      <Aktuell/>
      
    </Pagelayout>
    </div> 
  )
}
