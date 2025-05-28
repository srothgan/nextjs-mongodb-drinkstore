"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import {HiOutlineTrash, HiOutlineCog, HiPlusSm, HiOutlineRefresh} from "react-icons/hi"
import { AiOutlineArrowDown } from 'react-icons/ai';
const getUser = async () =>{
    try{
        const res = await fetch('http://localhost:3000/api/register', {
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to get users");
        }
        return res.json();
    }catch (error) {
        console.log(error);
    }
}

export default function UserList(){
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [openStatus, setOpenStatus] = useState(true);
    const [selectedStatuses, setSelectedStatuses] = useState({
        "Admin": true,
        "Mitarbeiter": true
    });
    const { data: session } = useSession();
    useEffect(() => {
        getUser()
          .then((data) => {
            setUsers(data.users);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

    const handleSearch=(value)=>{
        setSearchQuery(value);
        setCurrentPage(1);
    }
    const handleReload =() =>{
        location.reload();
    }
    const removeRequest = async(id)=>{
        const confirmed = confirm('Willst du diesen Nutzer wirklich löschen?')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/register?id=${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            location.reload();
        }
        }
    }
    const handleOpen = (id1, id2, value) => {
        setOpenStatus((cur) => !cur);
        positionTargetDiv(id1, id2, value);
    };
    const positionTargetDiv = (id1, id2, value) => {
        const referenceDiv = document.getElementById(id1);
        const targetDiv = document.getElementById(id2);
      
        if (referenceDiv && targetDiv) {
          if (!value) {
            targetDiv.style.display = "none";
            targetDiv.style.zIndex = 0; // Reset the z-index
          } else {
            const referenceRect = referenceDiv.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            targetDiv.style.display = "block";
            targetDiv.style.position = "absolute";
            targetDiv.style.top = `${referenceRect.bottom + scrollY}px`;
            targetDiv.style.left = `${referenceRect.bottom + scrollY}px`;
      
            targetDiv.style.zIndex = 10; // Move the target div to a higher z-index
          }
        }
      };
    const toggleStatus = (status) => {
        setCurrentPage(1)
        setSelectedStatuses((prevStatuses) => ({
            ...prevStatuses,
            [status]: !prevStatuses[status],
        }));
    };

    const filteredUsers = users.filter((user)=>{
        const searchLower = searchQuery.toLowerCase();
        return (
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) 
        );
    }).filter((filteredUser) => selectedStatuses[filteredUser.role]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredUsers.slice(startIndex, endIndex);

    const isAdmin = users.find((user) => user._id === session?.user?.sub)?.role === "Admin";

    return (
        <main className="flex  flex-col items-center w-full">
            <div className='flex flex-col items-center w-2/3 px-4 bg-slate-500 rounded-md my-4'>
                <div id='functionbar' className='w-full flex items-center justify-between p-2 mt-2'>
                    <input
                    type="text"
                    placeholder="Suche..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-1/3 rounded-md p-2"
                    />
                    <div className='flex items-center justify-center'>
                    <button type="button" onClick={() => handleOpen('rolebutton', 'roleoption', openStatus)} id='rolebutton' className='flex bg-slate-200 px-4 py-2 rounded items-center gap-4 mr-4'>Rolle <AiOutlineArrowDown/></button>
                    {isAdmin ? (
                        <Link href='/dashboard/konten/register' className='bg-slate-200 text-slate-500 rounded-full'>
                        <HiPlusSm size={40} />
                        </Link>
                    ) : (
                        <div className='bg-slate-200 text-slate-500 rounded-full pointer-events-none opacity-50'>
                        <HiPlusSm size={40} />
                        </div>
                    )}
                        <button type="button" onClick={handleReload}className='bg-slate-200 text-slate-500 rounded-full p-1 ml-3'><HiOutlineRefresh size={32}/></button>
                    </div>
                    <div id='roleoption' className=' bg-slate-200 rounded-md px-2 py-3 border-2 border-slate-500 mt-2' style={{ display: 'none',  height: 'auto' }}>
                        <div className='flex border-b-2 border-slate-500 py-1'>
                            <input type='checkbox' name='Admin' checked={selectedStatuses.Admin} onChange={() => toggleStatus('Admin')} className='text-black mr-2' /><p>Admin</p>
                        </div>
                        <div className='flex  py-1'>
                            <input type='checkbox' name='Mitarbeiter' checked={selectedStatuses.Mitarbeiter} onChange={() => toggleStatus('Mitarbeiter')} className='text-black mr-2' /><p>Mitarbeiter</p>
                        </div>
                    </div>
                </div>
                <div id='topbar' className='flex justify-between items-center w-full mt-4 bg-slate-300 rounded-md p-4 text-black font-bold'>
                    <div className='w-[10%] '>ID</div>
                    <div className='w-[20%] '>Name</div>
                    <div className='w-[40%] '>E-Mail</div>
                    <div className='w-[20%] '>Rolle</div>
                    <div className='w-[10%] '>Mehr</div>
                </div>
                <>
                {loading ? ( 
                <div className='w-full flex justify-between items-center bg-slate-200 rounded-md p-4 my-2 text-black' >Wird geladen...</div>
                ) : (
                itemsToDisplay.map((c, index)=>(
                <div id='content' className='w-full mt-4 text-black' key={c._id}>
                    
                    <div className='flex justify-between items-center bg-slate-200 rounded-md p-4 mt-2'>
                        <div className='w-[10%]'>{index + 1}</div>
                        <div className='w-[20%] '>{c.name}</div>
                        <div className='w-[40%] '>{c.email}</div>
                        <div className='w-[20%] '>{c.role}</div>
                        <div className='w-[10%] flex '>
                            {isAdmin ? (
                            <button type="button" onClick={() => removeRequest((c._id))} className='text-red-400 mr-4'>
                                <HiOutlineTrash size={25}/>
                            </button> ):(
                                <div className='text-red-400 mr-4 opacity-50 pointer-events-none'><HiOutlineTrash size={25}/> </div>
                            )}
                            {isAdmin ?(
                                <Link href={'link'} className='text-slate-500'>
                                    <HiOutlineCog size={25}/>
                                </Link>
                            ):(
                                <div className='text-slate-500 opacity-50 pointer-events-none'><HiOutlineCog size={25}/> </div>
                            )}
                            
                        </div>
                    </div>
                    
                </div>
                ))
                )};
                </>
                <div className="pagination flex justify-center p-4 bg-gray-300 rounded-md mb-2">
                {currentPage > 1 ? (
                        <button type="button" className="px-4 py-2 bg-white border border-gray-400 rounded-md mr-2 hover:bg-red-300 hover:text-black" onClick={() => handlePageChange(currentPage - 1)}>
                        Previous
                        </button>
                    ) : (
                        <button type="button" className="px-4 py-2 bg-gray-600 rounded-md text-white border border-gray-600 mr-2 hover:cursor-not-allowed" disabled>
                        Previous
                        </button>
                    )}
                    {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
                        <button
                        type="button"
                        key={1}
                        className={`px-4 py-2  border text-black border-gray-400 rounded-md mr-2 ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white hover:bg-red-300 hover:text-black'}`}
                        onClick={() => handlePageChange(index + 1)}
                        >
                        {index + 1}
                        </button>
                    ))}
                    {currentPage < Math.ceil(filteredUsers.length / itemsPerPage) ? (
                        <button type="button" className="px-4 py-2 bg-white border border-gray-400 rounded-md mr-2 hover:bg-red-300 hover:text-black" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    ) : (
                        <button type="button" className="px-4 py-2 bg-gray-600 text-white border border-gray-600 rounded-md mr-2 hover:cursor-not-allowed" disabled>
                            Next
                        </button>
                    )}
                </div>
            </div>
        </main>
    )
}