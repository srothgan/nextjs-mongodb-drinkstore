"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import {HiOutlineTrash, HiOutlineInformationCircle, HiOutlineRefresh} from "react-icons/hi"

const getContacts = async () =>{
    try{
        const res = await fetch('http://localhost:3000/api/contact', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
          }
        
        return res.json();
    }catch(error){
        console.log(error)
    }
    
}

export default  function ContactList(){

    const removeRequest = async(id)=>{
      
        const confirmed = confirm('Willst du diese Anfrage wirklich löschen?')
      
        if (confirmed) {
           const res = await fetch(`http://localhost:3000/api/contact?id=${id}`, {
             method: "DELETE",
           });
      
           if (res.ok) {
            location.reload();
           }
        }
      }

    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getContacts()
          .then((data) => {
            setContacts(data.contacts);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

    contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const handleReload =() =>{
        location.reload();
    }
    const handleSearch = (value) =>{
      setSearchQuery(value);
      setCurrentPage(1);
    }
    
    const filteredContacts = contacts.filter((contact) => {
        const searchLower = searchQuery.toLowerCase();
        return (
          contact.name.toLowerCase().includes(searchLower) ||
          contact.email.toLowerCase().includes(searchLower) ||
          contact.reference.toLowerCase().includes(searchLower)
        );
      });

      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredContacts.slice(startIndex, endIndex);

    return (
        <main className="flex flex-col items-center w-full p-4 lg:p-12 xl:p-18 ">
        <div className='flex flex-col items-center w-full px-4 bg-slate-500 rounded-md'>
            <div className='w-full flex items-center justify-between'>
                <input
                type="text"
                placeholder="Suche..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-1/3 p-2 rounded-md mt-4"
                />
                <button type="button" onClick={handleReload}className='bg-slate-200 text-slate-500 rounded-full p-1 ml-3 mt-3'><HiOutlineRefresh size={32}/></button>
            </div>
            
            <div id='topbar' className='flex justify-between items-center w-full mt-4 bg-slate-300 rounded-md p-4 text-black font-bold'>
                <div className='w-[10%] '>ID</div>
                <div className='w-1/5 '>Name</div>
                <div className='w-[35%] '>E-Mail</div>
                <div className='w-1/5 '>Betreff</div>
                <div className='w-[10%] '>Mehr</div>
            </div>

            {loading ? ( 
            <div className='w-full flex justify-between items-center bg-slate-200 rounded-md p-4 my-2 text-black' >Wird geladen...</div>
            ) : (
              itemsToDisplay.map((c, index)=>(
            <div id='content' className='w-full mt-4 text-black' key={c._id}>
                
                <div className='flex justify-between items-center bg-slate-200 rounded-md p-4 mt-2'>
                    <div className='w-[10%] '>{index + 1 + startIndex}</div>
                    <div className='w-1/5 overflow-hidden'>{c.name}</div>
                    <div className='w-[35%] overflow-hidden'>{c.email}</div>
                    <div className='w-1/5 overflow-hidden'>{c.reference}</div>
                    <div className='w-[10%] flex '>
                        <button type="button" onClick={() => removeRequest((c._id))} className='text-red-400 mr-4'>
                            <HiOutlineTrash size={25}/>
                        </button>
                        <Link href={`/dashboard/anfragen/infoAnfrage/${c._id}`} className='text-slate-500'>
                            <HiOutlineInformationCircle size={25}/>
                        </Link>
                    </div>
                </div>
                
            </div>
            ))
            )}
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
                {Array.from({ length: Math.ceil(filteredContacts.length / itemsPerPage) }, (_, index) => (
                    <button
                    type="button"
                    key={1}
                    className={`px-4 py-2  border text-black border-gray-400 rounded-md mr-2 ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white hover:bg-red-300 hover:text-black'}`}
                    onClick={() => handlePageChange(index + 1)}
                    >
                    {index + 1}
                    </button>
                ))}
                {currentPage < Math.ceil(filteredContacts.length / itemsPerPage) ? (
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
    

