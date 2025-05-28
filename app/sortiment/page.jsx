"use client"
import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState } from 'react';
import { AiOutlineArrowDown, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Bier from '../../assets/bier.png'
import Wasser from '../../assets/wasser.png'
import Saft from '../../assets/saft.png'
import Cocktail from '../../assets/cocktail.png'
import Sekt from '../../assets/sekt.png'
import Spirituosen from '../../assets/tequila.png'
import Spezialitäten from '../../assets/weltweiter-versand.png'
import Wein from '../../assets/wein.png'
import { IoReloadCircle } from "react-icons/io5";
export default function Sortiment() {

    const [loading, setLoading] = useState(true);
    const [sortiment, setSortiment] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [openOptions, setOpenOptions] = useState(false)
    const [selectedStatuses, setSelectedStatuses] = useState({
        "Vorhanden": true,
        "Bestellt": true,
        "Ausverkauft" : true
    });
    const [openCategory, setOpenCategory] = useState(false)
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
    const openStatusFilter =(id1,id2,display,value)=>{
        openStatus(id1,id2,display, value)
        setOpenOptions((cur) => !cur);
    }
    const openCategoryFilter =(id1,id2,display, value)=>{
        openStatus(id1,id2,display,value)
        setOpenCategory((cur) => !cur);
    }
    const openStatus = (id1, id2, display, value) =>{
        const button = document.getElementById(id1);
        const options = document.getElementById(id2);
        const checker = document.getElementById('sortimentchecker');
        if ( value===false){
            const buttonrect = button.getBoundingClientRect();
            const checkerrect = checker.getBoundingClientRect
            options.style.display = display;
            options.style.position = "absolute";
            options.style.left = `${buttonrect.left}px`;
            options.style.top = `${buttonrect.bottom-checkerrect.top+window.scrollY}px`;
            options.style.zIndex=10
        }else{
            options.style.display = "none";
            options.style.zIndex = 0;
        }
        
    }
    const getImageSrcByCategory = (category) => {
        switch (category) {
            case 'WasserLimonade':
                return Wasser; 
            case 'Säfte':
                return Saft; 
            case 'Biere':
                return Bier; 
            case 'Wein':
                return Wein; 
            case 'Spirituosen':
                return Spirituosen; 
            case 'SektProsecco':
                return Sekt; 
            case 'CocktailsSirup':
                return Cocktail; 
            case 'Spezialitäten':
                return Spezialitäten; 
          
        }
      };
      const formatPrice = (price) => {
        return Number.parseFloat(price).toFixed(2);
      };
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
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
    const handleSearch=(value)=>{
        setSearchQuery(value);
        setCurrentPage(1);
    }
    const filteredSortiment = sortiment.filter((drink)=>{
        const searchLower = searchQuery.toLowerCase();
        return (
            drink.category.toLowerCase().includes(searchLower) ||
            drink.brand.toLowerCase().includes(searchLower) ||
            drink.kind.toLowerCase().includes(searchLower) ||
            drink.origin.toLowerCase().includes(searchLower) ||
            drink.status.toLowerCase().includes(searchLower)
        );
    }).filter((filteredDrink) => selectedCategory[filteredDrink.category]).filter((filteredDrink1) => selectedStatuses[filteredDrink1.status])
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredSortiment.slice(startIndex, endIndex);
    return (
        <div id='sortimentcontent' className='block'>
            <h2 className='pl-4 pt-4 pb-8 font-sans text-red-600'>Sortiment</h2>
            <p className='pl-4'>Bei Top Getränke 123 haben wir ein großes Angebot an verschiedenen Getränken. Bei Fragen zu unserem Angebot können Sie uns gerne kontaktieren:</p>
            <div className='w-full flex justify-center mt-2'>
                <Link href='tel: 000001111' className='uppercase text-white bg-red-600 py-2 px-4 rounded-full ml-2 flex items-center '> 
                    <AiOutlinePhone size={22} /> <p className='ml-1'>Telefon</p>
                </Link>
                <Link href='mailto:test@mail.de' className='uppercase text-white bg-red-600 py-2 px-4 rounded-full ml-2 flex items-center '> 
                    <AiOutlineMail size={22} /> <p className='ml-1'>E-Mail </p>
                </Link>
            </div>
            <div id="sortimentchecker" className='  block items-center justify-center mx-4'>
  
                    <div id='functionbar' className='w-full block md:flex items-center justify-center p-2 mt-2'>
                        <input
                        type="text"
                        placeholder="Suche..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full md:w-1/4 rounded-md p-2 border-2 border-slate-300 mr-6 mb-2"
                        />
                        <div className='block md:flex items-center justify-center'>
                            <button type="button" onClick={() => openStatusFilter('statusbutton', 'statusoption','block', openOptions)} id='statusbutton' className='flex bg-slate-50 border-2 border-slate-200 px-4 py-2 rounded items-center gap-4 mr-6 mb-2 justify-between w-1/2 md:w-fit'>Status <AiOutlineArrowDown/></button>
                            <button type="button" onClick={() => openCategoryFilter('categorybutton', 'categoryoption', 'flex',openCategory)} id='categorybutton' className='flex bg-slate-50 border-2 border-slate-200 px-4 py-2 rounded items-center gap-4 mb-2 justify-between w-1/2 md:w-fit'>Kategorie <AiOutlineArrowDown/></button>
                        </div>
                        
                    </div>
                    <div id='statusoption' className='z-50 bg-slate-100 rounded-md px-2 py-3 border-2 border-slate-200 w-fit' style={{ display: 'none',  height: 'auto' }}>
                        <div className='flex  py-1'>
                            <input type='checkbox' name='Vorhanden' checked={selectedStatuses.Vorhanden} onChange={() => toggleStatus('Vorhanden')} className='text-black mr-2' /><p>Vorhanden</p>
                        </div>
                        <div className='flex  py-1'>
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
                    
                        {loading ? ( 
                            <div className='flex w-full justify-center'>
                                <IoReloadCircle size={80} className="animate-spin text-gray"/>
                            </div>
                        ) : (
                            
                        <section>
                            {itemsToDisplay.length === 0 ? (
                                <div className='flex w-full justify-center'>
                                    <p className='px-4 py-2 rounded bg-slate-200 my-4'>Kein Produkt vorhanden.</p>
                                </div>
                            ) : (
                                <div>
                            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4 '>
                    
                            <>
                            {itemsToDisplay.map((c, index) => (
                                <div key={c.kind}>
                                    <div  className='hidden md:flex justify-between items-center bg-slate-100 rounded-md p-2 mt-2'>
                                        <div className='w-[10%] '>
                                            <Image src={getImageSrcByCategory(c.category)} alt={c.category} width={50} height={50} />
                                        </div>
                                        <div className='w-[20%]  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.brand}</div>
                                        <div className='w-[10%]  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.kind}</div>
                                        <div className='w-[12.5%] flex  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.size}<p className='ml-1'> Liter</p></div>
                                        <div className='w-[10%] flex '>{formatPrice(c.price)}<p className='ml-1'> €</p></div>
                                        <div className='w-[17.5%] '>{c.status}</div>
                                    </div>
                                    <div className='flex flex-col md:hidden bg-slate-100 rounded-md p-2 mt-2'>
                                        <div className='flex items-center '>
                                            <div className='w-[33.3%] '>
                                                <Image src={getImageSrcByCategory(c.category)} alt={c.category} width={50} height={50} />
                                            </div>
                                            <div className='w-[33.3%]  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.brand}</div>
                                            <div className='w-[33.3%]  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.kind}</div>
                                        </div>
                                        <div className='flex items-center mt-2'>
                                            <div className='w-[33.3%] flex  whitespace-nowrap overflow-hidden overflow-ellipsis'>{c.size}<p className='ml-1'> Liter</p></div>
                                            <div className='w-[33.3%] flex '>{formatPrice(c.price)}<p className='ml-1'> €</p></div>
                                            <div className='w-[33.3%] '>{c.status}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}</>
                    
                            </div>
                        
                        
                    <div className='w-full flex items-center justify-center mt-4'>    
                    <div className="pagination flex w-fit justify-center p-4 bg-gray-300 rounded-md mb-2">
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
                    </div>)}
                    </section> )}
                
                
            </div>
        </div>
       
    )
  }