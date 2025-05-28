import DashNavbar from "@/components/dash_navbar"

export default function DashboardLayout({ children }) {
    return (
        
        <section className='bg-white'>
        <DashNavbar/>
        {children}
        </section>)
  }