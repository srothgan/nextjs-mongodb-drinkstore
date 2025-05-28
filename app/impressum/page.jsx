"use client"
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineArrowDown, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  function Icon({ open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <title>{open ? "Collapse" : "Expand"}</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
export default function impressum() {
    const [haft1, setHaft1] = useState(false);
    const [haft2, setHaft2] = useState(false);
    const [haft3, setHaft3] = useState(false);

    const handleOpenAcc1 = () => setHaft1((cur) => !cur);
    const handleOpenAcc2 = () => setHaft2((cur) => !cur);
    const handleOpenAcc3 = () => setHaft3((cur) => !cur);
    return (
        <div className='p-4 bg-white'>
            <h2 id='impressum' className='pb-8 font-sans text-red-600'>Impressum</h2>
            <div className='ml-3 mb-5'>
                <h4>Rechtliches:</h4>
                <div className='ml-3 mb-3'>
                    <p className='font-bold mt-2'>Angaben gemäß § 5 TMG:</p>
                    <p>Hans Wurst<br />
                        Top Getränke 123 <br />
                        Straße 1 <br />
                        11111 Stadt X</p>
                </div>
                <div className='ml-3 mb-3'>
                    <p className='font-bold mt-2'>Kontakt:</p>
                    <p>Telefon: <Link href='tel: 000001111' className='hover:underline'>00000 1111</Link></p>
                    <p>Telefax: <Link href='fax: 000001111' className='hover:underline'>00000 1111</Link></p>
                    <p>E-Mail: <Link href='mailto:test@mail.de' className='hover:underline'>test@mail.de</Link></p>
                </div>
                <div className='ml-3 mb-3'>
                    <p className='font-bold mt-2'>USt-ID Nr:</p>
                    <p>DE 123456789</p>
                </div>
                <div className='ml-3 mb-3'>
                    <p className='font-bold mt-2'>Webdesign und Webbetreuung</p>
                    <p>Simon Rothgang</p>
                    <p>Git-Hub: <Link href='https://github.com/srothgan' className='hover:underline' >srothgan</Link></p>
                    <p>E-Mail: <Link href='mailto:srothgan@uni-muenster.de' className='hover:underline'>srothgan@uni-muenster.de</Link></p>
                </div>
                
            </div>
            <div className='ml-3 mb-5'>
                <h4>Haftungsausschluss:</h4>
                <div className='ml-3 '>
                    <div className='flex w-full   uppercase bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
                        <Accordion open={haft1} icon={<Icon open={haft1} />} >
                            <AccordionHeader onClick={handleOpenAcc1}>Haftung für Inhalte</AccordionHeader>
                            <AccordionBody  style={{ display: haft1 ? "block" : "none" }} >
                            <p className='text-white'>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß 
                        § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                        wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                         Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                          von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab 
                          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                           werden wir diese Inhalte umgehend entfernen.</p>
                            </AccordionBody>
                        </Accordion>           
                    </div>
                    <div className='flex w-full   uppercase bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
                        <Accordion open={haft2} icon={<Icon open={haft2} />} >
                            <AccordionHeader onClick={handleOpenAcc2}>Haftung für Links</AccordionHeader>
                            <AccordionBody  style={{ display: haft2 ? "block" : "none" }} >
                            <p className='text-white'>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt 
                            der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                            umgehend entfernen.</p>
                            </AccordionBody>
                        </Accordion>           
                    </div>
                    <div className='flex w-full   uppercase bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
                        <Accordion open={haft3} icon={<Icon open={haft3} />} >
                            <AccordionHeader onClick={handleOpenAcc3}>Urheberrecht</AccordionHeader>
                            <AccordionBody  style={{ display: haft3 ? "block" : "none" }} >
                            <p className='text-white'>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und 
                            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser 
                            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter 
                            als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </p>
                            </AccordionBody>
                        </Accordion>           
                    </div>
                </div>
                
            </div>

        </div>
    )
  }
  