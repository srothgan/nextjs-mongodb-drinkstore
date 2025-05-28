"use client"

import { useEffect, useState, useCallback } from "react";
import React from "react";
import { Editor } from '@tinymce/tinymce-react';
import { AiOutlineCloseCircle, AiOutlineSend,AiFillCheckCircle } from "react-icons/ai";
export default function CreateEmail(){
  const [reference, setReference] = useState('');
  const [emailText, setEmailText] = useState(null);
  const [newsletter, setNewsletter] = useState([]); 
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(true)
  const [success, setSuccess] = useState(false)
  const [counter, setCounter] = useState(0); 
  const contact_count = newsletter.length
  const handleEditorChange = content => {
    setEmailText(content);
  };

  const getContacts = useCallback (async() => {
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
  })

  useEffect(() => {
    
    getContacts()
      .then((data) => {
        setNewsletter(data.newsletter);
        console.log(data.newsletter)
      })
      
      .catch((error) => {
        console.log(error);
      });
  }, [getContacts]); 

  function applyStylingToHtml(id, email, htmlString) {
    //general 
    let modifiedHtml = `
    <div style="background-color: #fff; width: 100%; padding: 1rem; border-radius: 0.375rem;">
    ${htmlString}
    <div style="color: #7c7c7c; width: 100%; border-top: 2px solid #7c7c7c; padding: 0.5rem; margin-top: 1rem;">
        <p>Fügen Sie bitte die E-Mail-Adresse <a href='mailto:simonrothgang@gmail.com'>simonrothgang@gmail.com</a> Ihrem Adressbuch oder der Liste sicherer Absender hinzu. Dadurch stellen Sie sicher, dass unsere Mail Sie auch in Zukunft erreicht. Informationen zum Datenschutz finden Sie <a href='/'>hier</a>.</p>
        <div style="display: flex; flex-direction: column;">
            <p style="margin-top: 0.5rem;">Inhaltlich verantwortlich: Simon Rothgang</p>
            <p>Top Getränke 123 GmbH, Straße 1, Stadt X 11111; Internet: <a href='/'>www.top-getränke.de</a></p>
            <p style="margin-top: 0.5rem;">Dieser Newsletter wurde an ${email} gesendet. 
            Wollen Sie diesen Newsletter in Zukunft nicht mehr erhalten, klicken Sie bitte 
            <a href='http://localhost:3000/abmelden/${id}' >hier</a>.</p>
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
  const sendMail =async (id, email) => {
    const modtext =  applyStylingToHtml(id, email, emailText)
    try{
      const res = await fetch("http://localhost:3000/api/sendmail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, reference, message:modtext}),
      });
      if (res.ok) {
        console.log("success")
      }
    }catch(error){
      console.log(error);
    }
    console.log(reference)
    console.log(modtext)
  }
  const handleMail = async () =>{
    setStatus(true)
    setLoading(true)
    for (const contact of newsletter) {
      const { _id, email } = contact;
      try {
        await sendMail(_id, email);
        console.log(`Mail sent successfully to ${email} with ID ${_id}`);
      } catch (error) {
        console.error(`Error sending mail to ${email} with ID ${_id}:`, error);
      }
      setCounter(prevCounter => prevCounter + 1);
    }
    setSuccess(true)
    setStatus(false)
  }
    return (
        <div className='w-full block'>
          <div className='flex w-full items-end justify-end'>
            <button type="button" onClick={handleMail} className='flex bg-slate-200 px-4 py-2 rounded items-center gap-4 mr-4 hover:bg-slate-400 hover:text-white'>
            {status ? (
                            <div className='flex'>
                                <p className='mr-2'>Senden</p>
                                {!loading ? (
                                    <AiOutlineSend size={25} />
                                ) : (
                                    <p>{counter}/{contact_count}</p>
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
          </div>
            <h4 className='text-slate-200'>E-Mail Schreiben:</h4>
            <div className='m-2 p-2 bg-slate-200 rounded-md h-fit '>
              <input
                className='border-2 w-full rounded-lg p-3 flex border-gray-300'
                type='text'
                placeholder='Betreff'
                required
                onChange={(e) => setReference(e.target.value)}
                value={reference}
                />
              </div>
              <div className='m-2 p-2 bg-slate-200 rounded-md h-fit '>
            <div className="wysiwyg">
            
            <Editor
              apiKey='gpsjrfsalkmfdyuzjzzt1dwl3vubnfvuh5fqb3w7y1xboux4'
              init={{
                selector: 'textarea#',
                language: 'de',
                browser_spellcheck: false,
                plugins: '     autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                toolbar: '  removeformat | blocks fontfamily fontsize | bold italic underline strikethrough | checklist numlist bullist indent outdent | link image media table  | align lineheight | undo redo |',
              }}
              initialValue="Liebe Kunden, "
              value={emailText}
              onEditorChange={handleEditorChange}
            />
           
            </div>
            </div>
            <h4 className='text-slate-200'>E-Mail Preview:</h4>
            {/* Insert the rendered HTML into a container */}
            <div className='m-2 p-2 bg-slate-200 rounded-md h-fit'>
            {emailText && (
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              <div dangerouslySetInnerHTML={{ __html: applyStylingToHtml("0000", "test@mail.de", emailText) }}/>  
            )}
            </div>
            
        </div>
        

    )

}