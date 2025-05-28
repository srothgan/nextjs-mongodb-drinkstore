"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSend,AiFillCheckCircle, AiOutlineReload  } from "react-icons/ai";
import React from "react";
import { Editor } from '@tinymce/tinymce-react';

export default function ContactInfo({id, name, email, reference, message, createdAt}){
    const formattedDate = formatDate(createdAt);
    const [openwindow, setOpenWindow] = useState(false);
    const [emailText, setEmailText] = useState(null);
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(true)
    const [success, setSuccess] = useState(false)
    const handleEditorChange = content => {
        setEmailText(content);
      };
    function applyStylingToHtml(email, htmlString) {
        //general 
        let modifiedHtml = `
        <div style="background-color: #fff; width: 100%; padding: 1rem; border-radius: 0.375rem;font-weight: normal;">
            ${htmlString}
            <div style="color: #7c7c7c; width: 100%; border-top: 2px solid #7c7c7c; padding: 0.5rem; margin-top: 1rem;">
                <div style="display: flex; flex-direction: column;">
                    <p>Empfänger: ${name}</p>
                    <p style="margin-top: 0.5rem;">E-Mail: ${email}  </p>
                    <p style="margin-top: 0.5rem;">Betreff: ${reference}  </p>
                    <p style="margin-top: 0.5rem;">Nachricht: ${message}  </p>
                </div>
            </div>
            <div style="color: #7c7c7c; width: 100%; border-top: 2px solid #7c7c7c; padding: 0.5rem; margin-top: 1rem;">
                <p >Fügen Sie bitte die E-Mail-Adresse <a href='mailto:simonrothgang@gmail.com'>simonrothgang@gmail.com</a> Ihrem Adressbuch oder der 
                Liste sicherer Absender hinzu. Dadurch stellen Sie sicher, dass unsere Mail Sie auch in Zukunft erreicht. Informationen zum 
                Datenschutz finden Sie <a href='/'>hier</a>.</p>
                <div style="display: flex; flex-direction: column;">
                    <p>Top Getränke 123 GmbH, Straße 1, Stadt X 11111; Internet: <a href='/'>www.top-getränke.de</a></p>
                    <p style="margin-top: 0.5rem;">Dieser E-Mail wurde an ${email} gesendet. 
                    
                </div>
            </div>
        </div>
    
        `
        //only for web display, doesnt influence email 
        //links
        modifiedHtml = modifiedHtml.replace(/<a /g, '<a class="underline text-blue-500" ');
        //list elements 
        modifiedHtml = modifiedHtml.replace(/<ol>/g, '<ol class="list-decimal pl-7">');
        modifiedHtml = modifiedHtml.replace(/<ul>/g, '<ul class="list-disc pl-7">');
        //special signs 
        modifiedHtml = modifiedHtml.replace(/&ouml;/g, 'ö');
        modifiedHtml = modifiedHtml.replace(/&auml;/g, 'ä');
        modifiedHtml = modifiedHtml.replace(/&uuml;/g, 'ü');
        modifiedHtml = modifiedHtml.replace(/&szlig;/g, 'ß');
        modifiedHtml = modifiedHtml.replace(/&nbsp;/g, '');
        return modifiedHtml;
      }
    const sendMail =async () => {
        setStatus(true)
        setLoading(true)
        const answeremail=`${email}`
        console.log(answeremail)
        const answerReference=`AW: ${reference}`
        const modtext =  applyStylingToHtml(email, emailText)
        try{
          const res = await fetch("http://localhost:3000/api/sendmail", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ email, reference:answerReference, message:modtext}),
          });
          if (res.ok) {
            setSuccess(true)
            setStatus(false)
            console.log("success")
          }else{
            setStatus(false)
            console.log("fail")
          }
        }catch(error){
          console.log(error);
        }
        setLoading(true)
        console.log(reference)
        console.log(modtext)
      }
      const exportData = () =>{
        const fileData = [name, email, reference, message, formattedDate].join('\n');
        console.log("test")
        const blob = new Blob([fileData], { type: "text/plain" });
        const link = document.createElement('a');
        link.download = `anfrage_${name}.txt`;
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    return (
        <main className="flex items-center justify-center w-full">
            
            <div id='centerwindow' className='flex  w-2/3 m-4 px-4 bg-slate-500 rounded-md p-4 text-white font-bold '>
                {!openwindow?(
                    <div className='flex w-full'>
                    <div id='content' className='block w-4/5 p-6 bg-slate-200 rounded-md mr-4 text-black'>
                        <Link href='/dashboard/anfragen' className='w-fit border-3 border-blue-700 bg-blue-500 text-white px-6 py-2 rounded-md' >Zurück</Link>
                        <div className='flex justify-between mb-3 mt-5'>
                            <p>Name</p><div className='w-1/2 flex justify-start'>{name}</div>
                        </div>
                        <div className='flex justify-between mb-3'>
                            <p>E-Mail</p><div className='w-1/2 flex justify-start'>{email}</div>
                        </div>
                        <div className='flex justify-between mb-3'>
                            <p>Betreff</p><div className='w-1/2 flex justify-start'>{reference}</div>
                        </div>
                        <div className='flex justify-between mb-3 '>
                            <p>Nachricht</p><div className='w-1/2 flex justify-start'>{message}</div>
                        </div>
                        <div className='flex justify-between mb-3'>
                            <p>Gesendet am</p><div className='w-1/2 flex justify-start'>{formattedDate}</div>
                        </div>
                    </div>
                    <div id='link' className='w-1/5 flex '>
                        <div className='w-full h-full flex items-end  justify-center'>
                            <div className='block '>
                                <button type="button" onClick={exportData} className='w-full mb-2 bg-blue-500 text-white px-6 py-2 rounded-md'>Exportieren</button>
                                <button type="button" onClick={() => setOpenWindow(true)} className='w-full  bg-blue-500 text-white px-6 py-2 rounded-md'>Antworten</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                ):(
                <div id='answerwindow' className='block w-full p-3 bg-slate-200 rounded-md mr-4 text-black' >
                    <div className='flex w-full text-black items-center justify-between mb-3'>
                        <h4 className='text-slate-500'>Anfrage beantworten:</h4>
                        <div className='flex '>
                        <button type="button" onClick={sendMail} className='flex bg-slate-200 px-4 py-2 rounded-lg items-center  mr-2  border-3 border-slate-400 hover:bg-slate-400 hover:text-white'>
                        {status ? (
                            <div className='flex'>
                                <p className='mr-2'>Senden</p>
                                {!loading ? (
                                    <AiOutlineSend size={25} />
                                ) : (
                                    <AiOutlineReload  size={25} />
                                )}
                            </div>
                        ) : (
                            <div className='flex'>
                                <p className='mr-2'>Senden</p>
                                {!success ? (
                                    <AiOutlineCloseCircle className='text-red-500' size={25} />
                                ) : (
                                    <AiFillCheckCircle  className='text-green-500' size={25} />
                                )}
                            </div>
                        )}
                        </button>
                            <button type="button" onClick={() => setOpenWindow(false)} className='w-fit  bg-slate-200 text-slate-700 border-3 border-slate-400 hover:bg-slate-400 hover:text-white p-2 rounded-md'><AiOutlineCloseCircle size={25}/></button>
                        </div>
                    </div>
                    
                    <Editor
                        apiKey='XXX'
                        init={{
                            selector: 'textarea#',
                            language: 'de',
                            browser_spellcheck: false,
                            plugins: '     autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                            toolbar: '  removeformat | blocks fontfamily fontsize | bold italic underline strikethrough | checklist numlist bullist indent outdent | link image media table  | align lineheight | undo redo |',
                        }}
                        initialValue="Sehr geehrter Kunde, "
                        value={emailText}
                        onEditorChange={handleEditorChange}
                        />
                    
                    <div className='my-2'>
                        <h4 className='text-slate-500'>E-Mail Preview:</h4>
                        <div className='m-2 p-2 bg-white rounded-md h-fit'>
                        {emailText && (
                            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                            <div dangerouslySetInnerHTML={{ __html: applyStylingToHtml(email, emailText) }}/>
                        )}
                        </div>
                    </div> 
                </div>
                )}
                
                
            </div>
            
           
        </main>
    )
}

function formatDate(createdAt) {
    const date = new Date(createdAt);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${hours}:${minutes} Uhr; ${day}.${month}.${year}`;
  }