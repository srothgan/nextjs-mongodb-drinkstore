"use client"
import { AiOutlineArrowDown ,AiFillCaretUp ,AiFillCaretDown } from 'react-icons/ai';
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import {HiOutlineTrash, HiOutlineCog, HiPlusSm, HiOutlineRefresh, HiOutlineInformationCircle} from "react-icons/hi"

const getSortiment = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/drink', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch drinks");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}


export default function SortimentList() {
   
    const removeRequest = async(id)=>{
        const confirmed = confirm('Willst du dieses Getränk wirklich löschen?')

    if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/drink?id=${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        location.reload();
    }
  }
    }
    
    const handleSearch=(value)=>{
        setSearchQuery(value);
        setCurrentPage(1);
    }
    const [loading, setLoading] = useState(true);
    const [sortiment, setSortiment] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [openStatus, setopenStatus] = useState(true);
    const [selectedStatuses, setSelectedStatuses] = useState({
        "Vorhanden": true,
        "Bestellt": true,
        "Ausverkauft" : true
    });
    const [openCategory, setOpenCategory] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState({
        "WasserLimonade" : true,
        "Säfte" : true,
        "Biere" : true,
        "Wein" : true,
        "Spirituosen" : true,
        "SektProsecco" : true,
        "CocktailsSirup" : true,
        "Spezialitäten" : true,
    })
    const [sortDirection, setSortDirection] = useState("asc"); // or "desc"
    const [sortColumn, setSortColumn] = useState("category");

    const handleSort = (column, direction) => {
        setSortColumn(column);
        setSortDirection(direction);
      };
    const toggleStatus = (status) => {
        setCurrentPage(1)
        setSelectedStatuses((prevStatuses) => ({
            ...prevStatuses,
            [status]: !prevStatuses[status],
        }));
    };
    const toggleCategory = (category) => {
        setCurrentPage(1)
        setSelectedCategory((prevStatuses) => ({
            ...prevStatuses,
            [category]: !prevStatuses[category],
        }));
    };

    const filterByStatus = (drink) => {
        return selectedStatuses[drink.status];
    };
    const handleReload =() =>{
        location.reload();
    }
    useEffect(() => {
        getSortiment()
          .then((data) => {
            setSortiment(data.drinks);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);  

    const openStatusFilter = (id1, id2, display, value) => {
        setopenStatus((cur) => !cur);
        positionTargetDiv(id1, id2, display, value);
    };
    const openCategoryFilter = (id1, id2, display, value) => {
        setOpenCategory((cur) => !cur);
        positionTargetDiv(id1, id2, display, value);
    };
    const positionTargetDiv = (id1, id2, display,value) => {
        const referenceDiv = document.getElementById(id1);
        const targetDiv = document.getElementById(id2);
      
        if (referenceDiv && targetDiv) {
          if (!value) {
            targetDiv.style.display = "none";
            targetDiv.style.zIndex = 0; // Reset the z-index
          } else {
            const referenceRect = referenceDiv.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            targetDiv.style.display = display;
            targetDiv.style.position = "absolute";
            targetDiv.style.top = `${referenceRect.bottom + scrollY}px`;
            targetDiv.style.left = `${referenceRect.bottom + scrollY}px`;
      
            targetDiv.style.zIndex = 10; // Move the target div to a higher z-index
          }
        }
      };
      
    const filteredSortiment = sortiment.filter((drink) => {
        const searchLower = searchQuery.toLowerCase();
        return (
            drink.category.toLowerCase().includes(searchLower) ||
            drink.brand.toLowerCase().includes(searchLower) ||
            drink.kind.toLowerCase().includes(searchLower) ||
            drink.origin.toLowerCase().includes(searchLower) ||
            drink.status.toLowerCase().includes(searchLower)
        );
    }).filter((filteredDrink) => selectedCategory[filteredDrink.category]).filter((filteredDrink1) => selectedStatuses[filteredDrink1.status])

    const sortedSortiment = filteredSortiment.sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];
      
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          // If both values are numbers, compare them numerically
          return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        } 
          // If one or both values are not numbers, compare them as strings
          const stringA = String(valueA).toLowerCase(); // Convert to lowercase for case-insensitive comparison
          const stringB = String(valueB).toLowerCase();
          return sortDirection === 'asc' ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
        
      });
      const formatPrice = (price) => {
        return Number.parseFloat(price).toFixed(2);
      };
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = sortedSortiment.slice(startIndex, endIndex);

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
                    <button type="button" onClick={() => openStatusFilter('statusbutton', 'statusoption','block', openStatus)} id='statusbutton' className='flex bg-slate-200 px-4 py-2 rounded items-center gap-4 mr-4'>Status <AiOutlineArrowDown/></button>
                    <button type="button" onClick={() => openCategoryFilter('categorybutton', 'categoryoption', 'flex',openCategory)} id='categorybutton' className='flex bg-slate-200 px-4 py-2 rounded items-center gap-4 mr-4'>Kategorie <AiOutlineArrowDown/></button>
                    <Link href='/dashboard/sortiment/add_sortiment' className='bg-slate-200 text-slate-500 rounded-full'><HiPlusSm size={40}/></Link>
                    <button type="button" onClick={handleReload}className='bg-slate-200 text-slate-500 rounded-full p-1 ml-3'><HiOutlineRefresh size={32}/></button>
                </div>
                <div id='statusoption' className=' bg-slate-200 rounded-md px-2 py-3 border-2 border-slate-500 mt-2' style={{ display: 'none',  height: 'auto' }}>
                        <div className='flex border-b-2 border-slate-500 py-1'>
                            <input type='checkbox' name='Vorhanden' checked={selectedStatuses.Vorhanden} onChange={() => toggleStatus('Vorhanden')} className='text-black mr-2' /><p>Vorhanden</p>
                        </div>
                        <div className='flex border-b-2 border-slate-500 py-1'>
                            <input type='checkbox' name='Bestellt' checked={selectedStatuses.Bestellt} onChange={() => toggleStatus('Bestellt')} className='text-black mr-2' /><p>Bestellt</p>
                        </div>
                        <div className='flex py-1'>
                            <input type='checkbox' name='Ausverkauft' checked={selectedStatuses.Ausverkauft} onChange={() => toggleStatus('Ausverkauft')} className='text-black mr-2' /><p>Ausverkauft</p>
                        </div>
                        
                </div>
                <div id='categoryoption' className='z-50 bg-slate-100 rounded-md px-2 py-3 border-2 border-slate-200 w-fit' style={{ display: 'none',  height: 'auto' }}>
                        <div className='block w-fit mr-2 pr-2'>
                            <div className='flex  py-1'>
                                <input type='checkbox' name='WasserLimonade' checked={selectedCategory.WasserLimonade} onChange={() => toggleCategory('WasserLimonade')} className='text-black mr-2' /><p>Wasser & Limonade</p>
                            </div>
                            <div className='flex  py-1'>
                                <input type='checkbox' name='Säfte' checked={selectedCategory.Säfte} onChange={() => toggleCategory('Säfte')} className='text-black mr-2' /><p>Säfte</p>
                            </div> 
                            <div className='flex  py-1'>
                                <input type='checkbox' name='Biere' checked={selectedCategory.Biere} onChange={() => toggleCategory('Biere')} className='text-black mr-2' /><p>Biere</p>
                            </div> 
                            <div className='flex  py-1'>
                                <input type='checkbox' name='Wein' checked={selectedCategory.Wein} onChange={() => toggleCategory('Wein')} className='text-black mr-2' /><p>Wein</p>
                            </div>
                            <div className='flex py-1'>
                                <input type='checkbox' name='Spirituosen' checked={selectedCategory.Spirituosen} onChange={() => toggleCategory('Spirituosen')} className='text-black mr-2' /><p>Spirituosen</p>
                            </div>
                            <div className='flex  py-1'>
                                <input type='checkbox' name='SektProsecco' checked={selectedCategory.SektProsecco} onChange={() => toggleCategory('SektProsecco')} className='text-black mr-2' /><p>Sekt & Prosecco</p>
                            </div>
                            <div className='flex  py-1'>
                                <input type='checkbox' name='CocktailsSirup' checked={selectedCategory.CocktailsSirup} onChange={() => toggleCategory('CocktailsSirup')} className='text-black mr-2' /><p>Cocktails & Sirup</p>
                            </div>
                            <div className='flex pt-1'>
                                <input type='checkbox' name='Spezialitäten' checked={selectedCategory.Spezialitäten} onChange={() => toggleCategory('Spezialitäten')} className='text-black mr-2' /><p>Spezialitäten</p>
                            </div>
                        </div>
                        
                        
                    </div>
                
            </div>
            <div id='topbar' className='flex justify-between items-center w-full mt-4 bg-slate-200 rounded-md p-4 text-black font-bold'>
                <div className='w-[15%] flex items-center gap-1 group'>
                    <div id='cat_sort' className='flex group-hover:text-black text-slate-200 items-center'>
                        <div className="flex flex-col items-center">
                            <button type="button" onClick={() => handleSort("category","asc")}><AiFillCaretUp/></button>
                            <button type="button" onClick={() => handleSort("category","desc")}><AiFillCaretDown/></button>
                        </div>
                    </div>
                    <p>
                        Kategorie
                    </p>
                </div>
                <div className='w-[15%] flex items-center gap-1 group'>
                    <div id='brand_sort' className='flex group-hover:text-black text-slate-200 items-center'>
                        <div className="flex flex-col items-center">
                            <button type="button" onClick={() => handleSort("brand","asc")}><AiFillCaretUp/></button>
                            <button type="button" onClick={() => handleSort("brand","desc")}><AiFillCaretDown/></button>
                        </div>
                    </div>
                    <p>
                        Marke
                    </p>
                </div>
                <div className='w-[10%] flex items-center gap-1 group'>
                <div id='kind_sort' className='flex group-hover:text-black text-slate-200 items-center'>
                        <div className="flex flex-col items-center">
                            <button type="button" onClick={() => handleSort("kind","asc")}><AiFillCaretUp/></button>
                            <button type="button" onClick={() => handleSort("kind","desc")}><AiFillCaretDown/></button>
                        </div>
                    </div>
                    <p>
                        Art
                    </p>
                </div>
                <div className='w-[12.5%] flex items-center gap-1 group'>
                    <div id='cat_sort' className='flex group-hover:text-black text-slate-200 items-center'>
                        <div className="flex flex-col items-center">
                            <button type="button" onClick={() => handleSort("size","asc")}><AiFillCaretUp/></button>
                            <button type="button" onClick={() => handleSort("size","desc")}><AiFillCaretDown/></button>
                        </div>
                    </div>
                    <p>
                        Größe
                    </p>
                </div>
                <div className='w-[10%] flex items-center gap-1 group'>
                    <div id='cat_sort' className='flex group-hover:text-black text-slate-200 items-center'>
                        <div className="flex flex-col items-center">
                            <button type="button" onClick={() => handleSort("price","asc")}><AiFillCaretUp/></button>
                            <button type="button" onClick={() => handleSort("price","desc")}><AiFillCaretDown/></button>
                        </div>
                    </div>
                    <p>
                        Preis
                    </p>
                </div>
                <div className='w-[17.5%] flex items-center gap-1 group'>
                    <div id='cat_sort' className='block group-hover:text-black text-slate-200  '>
                        <AiFillCaretUp onClick={() => handleSort("status","asc")}/>
                        <AiFillCaretDown onClick={() => handleSort("status","desc")}/>
                    </div>
                    <p>
                        Status
                    </p></div>
                <div className='w-[10%] '>Mehr</div>
            </div>
            <>
            {loading ? ( 
            <div className='w-full flex justify-between items-center bg-slate-200 rounded-md p-4 my-2 text-black' >Wird geladen...</div>
            ) : (
            itemsToDisplay.map((c, index)=>(
            <div id='content' className='w-full mt-4 text-black' key={c._id}>
                
                <div className='flex justify-between items-center bg-slate-200 rounded-md p-4 mt-2'>
                    <div className='w-[15%] ml-5  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.category}</div>
                    <div className='w-[15%] ml-5 whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.brand}</div>
                    <div className='w-[10%] ml-5 whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.kind}</div>
                    <div className='w-[12.5%] flex ml-5 whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.size}<p className='ml-1'> Liter</p></div>
                    <div className='w-[10%] flex ml-5'>{formatPrice(c.price)}<p className='ml-1'> €</p></div>
                    <div className='w-[17.5%] ml-5'>{c.status}</div>
                    <div className='w-[10%] flex '>
                        <button type="button" onClick={() => removeRequest((c._id))} className='text-red-400 mr-4'>
                            <HiOutlineTrash size={25}/>
                        </button>
                        <Link href={`/dashboard/sortiment/infoDrink/${c._id}`} className='text-slate-500'>
                            <HiOutlineInformationCircle size={25}/> 
                        </Link>
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
                {Array.from({ length: Math.ceil(filteredSortiment.length / itemsPerPage) }, (_, index) => (
                    <button
                    type="button"
                    key={ 1}
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

        </main>
    );
}
