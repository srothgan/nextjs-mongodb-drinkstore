import Userinfo from '../../components/userinfo'
import NewsContacts from '@/components/dashboard/dash_news'
import DashContacts from '@/components/dashboard/dash_contacts'
import DashDrinks from '@/components/dashboard/dash_sortiment'
import DashUser from '@/components/dashboard/dash_users'
export default function Dashboard(){
    return (
        <main className="flex flex-col items-center w-full p-4 lg:p-12 xl:p-18 ">
            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-3 rounded-md bg-slate-500 rounded-m'>
                    <NewsContacts />
                    <DashDrinks />
                    <DashContacts />
                    <DashUser />
                    <Userinfo />
            </div>
        </main>
        
        
    )

}