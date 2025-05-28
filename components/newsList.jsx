"use client"
import { AiOutlineArrowDown } from 'react-icons/ai';
import {HiOutlineTrash, HiOutlineCog, HiOutlineRefresh, HiExternalLink} from "react-icons/hi"
import Link from "next/link";
import { useState, useEffect } from "react"; // Import useState and useEffect
import React from "react";
import ExcelJS from 'exceljs';
import { CSVLink } from 'react-csv';

const getContacts = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/newsletter', {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default function NewsList() {
 
  const removeTopic = async(id)=>{
      
  const confirmed = confirm('Willst du diesen Kontakt wirklich löschen?')

  if (confirmed) {
     const res = await fetch(`http://localhost:3000/api/newsletter?id=${id}`, {
       method: "DELETE",
     });

     if (res.ok) {
      location.reload();
     }
  }
}
  const [loading, setLoading] = useState(true); 
  const [newsletter, setNewsletter] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    
    getContacts()
      .then((data) => {
        setNewsletter(data.newsletter);
        console.log(data.newsletter)
        setLoading(false); 
      })
      
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  }, []); 

  const filteredSortiment = newsletter
      .filter((newsletter)=>{
        const searchLower = searchQuery.toLowerCase();
        return(
          newsletter.email.toLowerCase().includes(searchLower)
        );
      });

  const handleSearch = (value) =>{
    setSearchQuery(value);
    setCurrentPage(1);
  }
  const handleReload =() =>{
    location.reload();
}
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredSortiment.slice(startIndex, endIndex);
  const [openStatus, setopenStatus] = React.useState(true);
  const handleOpen = (id1, id2, value) => {
    setopenStatus((cur) => !cur);
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
          targetDiv.style.width = `${referenceRect.offsetWidth}px`;
          targetDiv.style.zIndex = 10; // Move the target div to a higher z-index
        }
      }
    };
    const exportToExcel = async () => {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Newsletter Contacts');
  
      worksheet.columns = [
        { header: 'ID', key: 'id', width: 10 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'CreatedAt', key: 'createdAt', width: 20 },
      ];
  
      newsletter.forEach((contact, index) => {
        worksheet.addRow({
          id: index + 1,
          email: contact.email,
          createdAt: contact.createdAt,
        });
      });
  
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'newsletter-contacts.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
  return (
    <main className="block items-center w-full">
      <div id='functionbar' className='w-full flex items-center justify-between  mt-2'>
                <input
                type="text"
                placeholder="Suche..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-1/3 rounded-md p-2"
                />
                <div className='flex items-center'>
                  <button type="button" onClick={handleReload}className='bg-slate-200 text-slate-500 rounded-full p-1 mr-3'><HiOutlineRefresh size={32}/></button>
                  <button type="button" onClick={() => handleOpen('exportbutton', 'exportoption', openStatus)} id='exportbutton' className='flex bg-slate-200 px-4 py-2 rounded items-center gap-4 mr-4'>Export <AiOutlineArrowDown /></button>
                </div>
                <div id='exportoption' className=' bg-slate-200 rounded-md px-1 py-1 border-2 border-slate-500 mt-2' style={{ display: 'none',  height: 'auto' }}>
                        <div className='flex border-b-2 border-slate-500 py-1'>
                            <button type="button" onClick={exportToExcel} className='flex w-full gap-2 justify-between'><p>Excel</p> <HiExternalLink size={22}/></button>
                        </div>
                        <div className='flex py-1'>
                          <CSVLink data={newsletter} separator={","} filename={"emails-newsletter.csv"} className='flex w-full gap-2 justify-between'><p>CSV</p> <HiExternalLink size={22}/></CSVLink>
                        </div>
                        
                </div>
                
      </div>
      <div id='content' className='mt-4 block w-full text-black bg-slate-200 rounded-md px-4 py-1 my-2'>
        {loading ? ( 
          <div className='my-3 flex w-full justify-between items-center gap-2'>Wird geladen...</div>
        ) : (
          itemsToDisplay.map((entry, index) => (
            <div key={entry._id} className='my-3 flex w-full justify-between items-center gap-2'>
              <div className='w-[10%] '>{index + 1+ startIndex}</div>
              <div className='w-[65%] overflow-hidden'>{entry.email}</div>
              <div className='w-[15%]'>
              <button type="button" onClick={() => removeTopic(entry._id)} className='text-red-400'>
                  <HiOutlineTrash size={25}/>
              </button>
              </div>
              <div className='w-[10%]'>
                <Link href={`/dashboard/newsletter/contacts/editContact/${entry._id}`} className='text-slate-500'>
                  <HiOutlineCog size={24} />
                </Link>
              </div>
            </div>
          ))
        )}
       <div className="pagination flex justify-center ">
            <div className='p-4 bg-gray-300 rounded-md mb-2'>
              {currentPage > 1 ? (
                      <button type="button" className="px-4 py-2 bg-white border border-gray-400 rounded-md mr-2 hover:bg-red-300 hover:text-black" onClick={() => handlePageChange(currentPage - 1)}>
                      Previous
                      </button>
                  ) : (
                      <button type="button" className="px-4 py-2 bg-gray-600 rounded-md text-white border border-gray-600 mr-2 hover:cursor-not-allowed" disabled>
                      Previous
                      </button>
                  )}
                  {Array.from({ length: Math.ceil(filteredSortiment.length / itemsPerPage) }, (_, index) => (
                      <button
                      type="button"
                      key={1}
                      className={`px-4 py-2  border text-black border-gray-400 rounded-md mr-2 ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white hover:bg-red-300 hover:text-black'}`}
                      onClick={() => handlePageChange(index + 1)}
                      >
                      {index + 1}
                      </button>
                  ))}
                  {currentPage < Math.ceil(filteredSortiment.length / itemsPerPage) ? (
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
      </div>
    </main>
  );
}