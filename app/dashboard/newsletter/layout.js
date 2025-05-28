import NewsNavbar from "@/components/news_navbar"

export default function NewsletterLayout({ children }) {
    return (
        
        <main className='flex items-center justify-center'>
            <div className='w-2/3 flex bg-slate-500 px-4 my-4 rounded-md'>
                <div className='w-[16%] border-r-3 border-slate-200'>
                    <NewsNavbar/>
                </div>
                <div className='w-[85%] p-4'>
                    {children}
                </div>
            </div>
            
        </main>
    )
  }