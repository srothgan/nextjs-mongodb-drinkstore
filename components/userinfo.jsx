"use client"


import { signOut, useSession } from "next-auth/react"


export default function UserInfo(){

    const {data:session} = useSession();
    return(
            <div className='shadow-lg p-4 bg-zinc-100/10 flex flex-col  text-white h-fit w-full'>
                <p>Name:</p>
                <p className='font-bold'>{session?.user?.name}</p>
                <p>E-Mail:</p>
                <p className='font-bold' >{session?.user?.email}</p>
                <button type="button" onClick={()=>signOut()} className='bg-red-500 text-white font-bold px-6 py-2 mt-3'>Logout</button>
            </div>
    )
}