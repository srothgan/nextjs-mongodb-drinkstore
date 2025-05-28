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
export default function datenschutzhinweis() {
  const [daten1, setDaten1] = useState(false);
  const [daten2, setDaten2] = useState(false);
  const [daten3, setDaten3] = useState(false);
  const [daten4, setDaten4] = useState(false);
  const [daten5, setDaten5] = useState(false);
  const [daten6, setDaten6] = useState(false);
  const [daten7, setDaten7] = useState(false);
  const [daten8, setDaten8] = useState(false);
  const [daten9, setDaten9] = useState(false);
  const [daten10, setDaten10] = useState(false);
  const [daten11, setDaten11] = useState(false);
  const [daten12, setDaten12] = useState(false);
  const [daten13, setDaten13] = useState(false);
  const [daten14, setDaten14] = useState(false);
  const [daten15, setDaten15] = useState(false);
  const [daten16, setDaten16] = useState(false);
  const [daten17, setDaten17] = useState(false);
  const [daten18, setDaten18] = useState(false);
  const [daten19, setDaten19] = useState(false);
  const [daten20, setDaten20] = useState(false);
  const [daten21, setDaten21] = useState(false);
  const [daten22, setDaten22] = useState(false);
  const [daten23, setDaten23] = useState(false);
  const [daten24, setDaten24] = useState(false);
    
  const handleOpenAcc1 = () => setDaten1((cur) => !cur);
  const handleOpenAcc2 = () => setDaten2((cur) => !cur);
  const handleOpenAcc3 = () => setDaten3((cur) => !cur);
  const handleOpenAcc4 = () => setDaten4((cur) => !cur);
  const handleOpenAcc5 = () => setDaten5((cur) => !cur);
  const handleOpenAcc6 = () => setDaten6((cur) => !cur);
  const handleOpenAcc7 = () => setDaten7((cur) => !cur);
  const handleOpenAcc8 = () => setDaten8((cur) => !cur);
  const handleOpenAcc9 = () => setDaten9((cur) => !cur);
  const handleOpenAcc10 = () => setDaten10((cur) => !cur);
  const handleOpenAcc11= () => setDaten11((cur) => !cur);
  const handleOpenAcc12= () => setDaten12((cur) => !cur);
  const handleOpenAcc13= () => setDaten13((cur) => !cur);
  const handleOpenAcc14= () => setDaten14((cur) => !cur);
  const handleOpenAcc15= () => setDaten15((cur) => !cur);
  const handleOpenAcc16= () => setDaten16((cur) => !cur);
  const handleOpenAcc17= () => setDaten17((cur) => !cur);
  const handleOpenAcc18= () => setDaten18((cur) => !cur);
  const handleOpenAcc19= () => setDaten19((cur) => !cur);
  const handleOpenAcc20= () => setDaten20((cur) => !cur);
  const handleOpenAcc21= () => setDaten21((cur) => !cur);
  const handleOpenAcc22= () => setDaten22((cur) => !cur);
  const handleOpenAcc23= () => setDaten23((cur) => !cur);
  const handleOpenAcc24= () => setDaten24((cur) => !cur);
    return(
      <div className='p-4 bg-white'>
        <h2 id='impressum' className='pb-8 font-sans text-red-600'>Datenschutzerklärung</h2>
        <div className='ml-3 mb-5'>
          <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von 
            personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit 
            ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser 
            Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf 
            die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir 
            auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
          </p>
          <div className='ml-3 mt-5'>
                <h4>Verantwortlicher:</h4>
                <p className='ml-3'>Hans Wurst <br />
                    Top Getränke 123 <br />
                    Straße 1 <br />
                    11111 Stadt X</p>
                <p className='ml-3'>E-Mail: <Link href='mailto:test@mail.de' className='hover:underline'>test@mail.de</Link></p>
          </div>
          <div className='ml-3 mt-5'>
                <h4>Arten der verarbeiteten Daten:</h4>
                <ul class="list-disc pl-7" >
                  <li>Bestandsdaten (z.B., Namen, Adressen).</li>
                  <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
                  <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
                  <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
                  <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
                </ul>
          </div>
          <div className='ml-3 mt-5'>
                <h4>Kategorien betroffener Personen</h4>
                <p className='ml-3'>Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die
                   betroffenen Personen zusammenfassend auch als „Nutzer“). </p>
                   
          </div>
          <div className='ml-3 mt-5'>
                <h4>Zweck der Verarbeitung</h4>
                <ul class="list-disc pl-7" >
                  <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.</li>
                  <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
                  <li>Sicherheitsmaßnahmen.</li>
                  <li>Reichweitenmessung/Marketing</li>
                </ul>
          </div>
          <div className='flex w-full   bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten1} icon={<Icon open={daten1} />} >
                  <AccordionHeader onClick={handleOpenAcc1}>Verwendete Begrifflichkeiten</AccordionHeader>
                  <AccordionBody  style={{ display: daten1 ? "block" : "none" }} >
                  <p className='text-white mb-3'>„Personenbezogene Daten“ sind alle Informationen, die sich auf 
                  eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) 
                  beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, 
                  insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu 
                  Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen
                   Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen,
                    psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person 
                    sind.</p>
                    <p className='text-white mb-3'>„Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter 
                    Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit 
                    personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit 
                    Daten.</p>
                    <p className='text-white mb-3'>„Pseudonymisierung“ die Verarbeitung personenbezogener 
                    Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher 
                    Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, 
                    sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und 
                    organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten 
                    nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen 
                    werden.</p>
                    <p className='text-white mb-3'>„Profiling“ jede Art der automatisierten Verarbeitung 
                    personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten 
                    verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person 
                    beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche 
                    Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, 
                    Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder 
                    vorherzusagen.</p>
                    <p className='text-white mb-3'>Als „Verantwortlicher“ wird die natürliche oder juristische 
                    Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen 
                    über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, 
                    bezeichnet.</p>
                    <p className='text-white'>„Auftragsverarbeiter“ eine natürliche oder juristische 
                    Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten 
                    im Auftrag des Verantwortlichen verarbeitet.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten2} icon={<Icon open={daten2} />} >
                  <AccordionHeader onClick={handleOpenAcc2}>Maßgebliche Rechtsgrundlagen</AccordionHeader>
                  <AccordionBody  style={{ display: daten2 ? "block" : "none" }} >
                  <p className='text-white'>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die 
                  Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der 
                  Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die 
                  Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage 
                  für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher 
                  Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage 
                  für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. 
                  c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten 
                  Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der 
                  betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener 
                  Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten3} icon={<Icon open={daten3} />} >
                  <AccordionHeader onClick={handleOpenAcc3}>Sicherheitsmaßnahmen</AccordionHeader>
                  <AccordionBody  style={{ display: daten3 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir treffen nach Maßgabe des Art. 32 DSGVO unter 
                  Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, 
                  des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen 
                  Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten 
                  natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem 
                  Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                  <p className='text-white'>Zu den Maßnahmen gehören insbesondere die Sicherung der 
                  Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs 
                  zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung 
                  der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine 
                  Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten 
                  gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der 
                  Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des 
                  Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen 
                  (Art. 25 DSGVO).</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten4} icon={<Icon open={daten4} />} >
                  <AccordionHeader onClick={handleOpenAcc4}>Zusammenarbeit mit Auftragsverarbeitern und Dritten</AccordionHeader>
                  <AccordionBody  style={{ display: daten4 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber 
                  anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an 
                  diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf 
                  Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie 
                  an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich 
                  ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage 
                  unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).</p>
                  <p className='text-white'>Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage 
                  eines sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage des Art. 
                  28 DSGVO.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten5} icon={<Icon open={daten5} />} >
                  <AccordionHeader onClick={handleOpenAcc5}>Übermittlungen in Drittländer</AccordionHeader>
                  <AccordionBody  style={{ display: daten5 ? "block" : "none" }} >
                  <p className='text-white'>Sofern wir Daten in einem Drittland (d.h. außerhalb der 
                  Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies 
                  im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von 
                  Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen 
                  Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf 
                  Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder 
                  vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim 
                  Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die 
                  Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten 
                  Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das 
                  „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen 
                  (so genannte „Standardvertragsklauseln“).</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten6} icon={<Icon open={daten6} />} >
                  <AccordionHeader onClick={handleOpenAcc6}>Rechte der betroffenen Personen</AccordionHeader>
                  <AccordionBody  style={{ display: daten6 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Sie haben das Recht, eine Bestätigung darüber zu verlangen, 
                  ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere 
                  Informationen und Kopie der Daten entsprechend Art. 15 DSGVO.</p>
                  <p className='text-white mb-3'>Sie haben entsprechend. Art. 16 DSGVO das Recht, die 
                  Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden 
                  unrichtigen Daten zu verlangen.</p>
                  <p className='text-white mb-3'>Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu 
                  verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe 
                  des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.</p>
                  <p className='text-white mb-3'>Sie haben das Recht zu verlangen, dass die Sie betreffenden 
                  Daten, die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren 
                  Übermittlung an andere Verantwortliche zu fordern.</p>
                  <p className='text-white'>Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei 
                  der zuständigen Aufsichtsbehörde einzureichen.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten7} icon={<Icon open={daten7} />} >
                  <AccordionHeader onClick={handleOpenAcc7}>Widerrufsrecht</AccordionHeader>
                  <AccordionBody  style={{ display: daten7 ? "block" : "none" }} >
                  <p className='text-white'>Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 
                  3 DSGVO mit Wirkung für die Zukunft zu widerrufen.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten8} icon={<Icon open={daten8} />} >
                  <AccordionHeader onClick={handleOpenAcc8}>Widerspruchsrecht</AccordionHeader>
                  <AccordionBody  style={{ display: daten8 ? "block" : "none" }} >
                  <p className='text-white'>Sie können der künftigen Verarbeitung der Sie betreffenden 
                  Daten nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der Widerspruch kann insbesondere 
                  gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten9} icon={<Icon open={daten9} />} >
                  <AccordionHeader onClick={handleOpenAcc9}>Cookies und Widerspruchsrecht bei Direktwerbung</AccordionHeader>
                  <AccordionBody  style={{ display: daten9 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der 
                  Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. 
                  Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie 
                  gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. 
                  Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies bezeichnet, 
                  die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In 
                  einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status 
                  gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem 
                  Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn 
                  die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen 
                  der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als 
                  „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, 
                  der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind 
                  spricht man von „First-Party Cookies“).</p>
                  <p className='text-white mb-3'>Wir können temporäre und permanente Cookies einsetzen und 
                  klären hierüber im Rahmen unserer Datenschutzerklärung auf.</p>
                  <p className='text-white mb-3'>Wir können temporäre und permanente Cookies einsetzen und 
                  klären hierüber im Rahmen unserer Datenschutzerklärung auf.</p>
                  <p className='text-white mb-3'>Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner 
                  gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres 
                  Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers 
                  gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses 
                  Onlineangebotes führen.</p>
                  <p className='text-white'>Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des 
                  Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall 
                  des Trackings, über die US-amerikanische Seite <a target='blank' className='text-blue-400 hover:underline' href='http://www.aboutads.info/choices/'>AboutAds</a> oder die 
                  EU-Seite <a target='blank'  className='text-blue-400 hover:underline' href='http://www.youronlinechoices.com/'>YourOnlineChoice</a>  erklärt werden. Des Weiteren kann die Speicherung 
                  von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte 
                  beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt 
                  werden können.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten10} icon={<Icon open={daten10} />} >
                  <AccordionHeader onClick={handleOpenAcc10}>Löschung von Daten</AccordionHeader>
                  <AccordionBody  style={{ display: daten10 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 
                  17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser 
                  Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, 
                  sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine 
                  gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, 
                  weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung 
                  eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt 
                  z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.</p>
                  <p className='text-white mb-3'>Nach gesetzlichen Vorgaben in Deutschland, erfolgt die 
                  Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 
                  4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung 
                  relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB 
                  (Handelsbriefe).</p>
                  <p className='text-white'>Nach gesetzlichen Vorgaben in Österreich erfolgt die 
                  Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, 
                  Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, 
                  etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im 
                  Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und 
                  Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die 
                  der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten11} icon={<Icon open={daten11} />} >
                  <AccordionHeader onClick={handleOpenAcc11}>Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung</AccordionHeader>
                  <AccordionBody  style={{ display: daten11 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie 
                  Organisation unseres Betriebs, Finanzbuchhaltung und Befolgung der gesetzlichen Pflichten, 
                  wie z.B. der Archivierung. Hierbei verarbeiten wir dieselben Daten, die wir im Rahmen der 
                  Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen sind 
                  Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden, 
                  Interessenten, Geschäftspartner und Websitebesucher betroffen. Der Zweck und unser Interesse 
                  an der Verarbeitung liegt in der Administration, Finanzbuchhaltung, Büroorganisation, 
                  Archivierung von Daten, also Aufgaben die der Aufrechterhaltung unserer Geschäftstätigkeiten, 
                  Wahrnehmung unserer Aufgaben und Erbringung unserer Leistungen dienen. Die Löschung der Daten 
                  im Hinblick auf vertragliche Leistungen und die vertragliche Kommunikation entspricht den, bei 
                  diesen Verarbeitungstätigkeiten genannten Angaben.</p>
                  <p className='text-white mb-3'>Wir offenbaren oder übermitteln hierbei Daten an die 
                  Finanzverwaltung, Berater, wie z.B., Steuerberater oder Wirtschaftsprüfer sowie weitere 
                  Gebührenstellen und Zahlungsdienstleister.</p>
                  <p className='text-white'>Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen 
                  Interessen Angaben zu Lieferanten, Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks 
                  späterer Kontaktaufnahme. Diese mehrheitlich unternehmensbezogenen Daten, speichern wir 
                  grundsätzlich dauerhaft.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten12} icon={<Icon open={daten12} />} >
                  <AccordionHeader onClick={handleOpenAcc12}>Betriebswirtschaftliche Analysen und Marktforschung</AccordionHeader>
                  <AccordionBody  style={{ display: daten12 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Um unser Geschäft wirtschaftlich betreiben, Markttendenzen, 
                  Wünsche der Vertragspartner und Nutzer erkennen zu können, analysieren wir die uns vorliegenden 
                  Daten zu Geschäftsvorgängen, Verträgen, Anfragen, etc. Wir verarbeiten dabei Bestandsdaten, 
                  Kommunikationsdaten, Vertragsdaten, Zahlungsdaten, Nutzungsdaten, Metadaten auf Grundlage des 
                  Art. 6 Abs. 1 lit. f. DSGVO, wobei zu den betroffenen Personen Vertragspartner, Interessenten, 
                  Kunden, Besucher und Nutzer unseres Onlineangebotes gehören.</p>
                  <p className='text-white mb-3'>Die Analysen erfolgen zum Zweck betriebswirtschaftlicher 
                  Auswertungen, des Marketings und der Marktforschung. Dabei können wir die Profile der 
                  registrierten Nutzer mit Angaben, z.B. zu deren in Anspruch genommenen Leistungen, 
                  berücksichtigen. Die Analysen dienen uns zur Steigerung der Nutzerfreundlichkeit, der 
                  Optimierung unseres Angebotes und der Betriebswirtschaftlichkeit. Die Analysen dienen 
                  alleine uns und werden nicht extern offenbart, sofern es sich nicht um anonyme Analysen 
                  mit zusammengefassten Werten handelt.</p>
                  <p className='text-white'>Sofern diese Analysen oder Profile personenbezogen sind, werden 
                  sie mit Kündigung der Nutzer gelöscht oder anonymisiert, sonst nach zwei Jahren ab 
                  Vertragsschluss. Im Übrigen werden die gesamtbetriebswirtschaftlichen Analysen und allgemeine 
                  Tendenzbestimmungen nach Möglichkeit anonym erstellt.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten13} icon={<Icon open={daten13} />} >
                  <AccordionHeader onClick={handleOpenAcc13}>Datenschutzhinweise im Bewerbungsverfahren</AccordionHeader>
                  <AccordionBody  style={{ display: daten13 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir verarbeiten die Bewerberdaten nur zum Zweck und im Rahmen 
                  des Bewerbungsverfahrens im Einklang mit den gesetzlichen Vorgaben. Die Verarbeitung der 
                  Bewerberdaten erfolgt zur Erfüllung unserer (vor)vertraglichen Verpflichtungen im Rahmen des 
                  Bewerbungsverfahrens im Sinne des Art. 6 Abs. 1 lit. b. DSGVO Art. 6 Abs. 1 lit. f. DSGVO 
                  sofern die Datenverarbeitung z.B. im Rahmen von rechtlichen Verfahren für uns erforderlich 
                  wird (in Deutschland gilt zusätzlich § 26 BDSG).</p>
                  <p className='text-white mb-3'>Mit der Übermittlung der Bewerbung an uns, erklären sich die 
                  Bewerber mit der Verarbeitung ihrer Daten zu Zwecken des Bewerbungsverfahrens entsprechend der 
                  in dieser Datenschutzerklärung dargelegten Art und Umfang einverstanden.</p>
                  <p className='text-white mb-3'>Soweit im Rahmen des Bewerbungsverfahrens freiwillig besondere 
                  Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO mitgeteilt werden, 
                  erfolgt deren Verarbeitung zusätzlich nach Art. 9 Abs. 2 lit. b DSGVO (z.B. Gesundheitsdaten, 
                  wie z.B. Schwerbehinderteneigenschaft oder ethnische Herkunft). Soweit im Rahmen des 
                  Bewerbungsverfahrens besondere Kategorien von personenbezogenen Daten im Sinne des Art. 
                  9 Abs. 1 DSGVO bei Bewerbern angefragt werden, erfolgt deren Verarbeitung zusätzlich nach Art. 
                  9 Abs. 2 lit. a DSGVO (z.B. Gesundheitsdaten, wenn diese für die Berufsausübung erforderlich 
                  sind).</p>
                  <p className='text-white mb-3'>Sofern zur Verfügung gestellt, können uns Bewerber ihre 
                  Bewerbungen mittels eines Onlineformulars auf unserer Website übermitteln. Die Daten werden 
                  entsprechend dem Stand der Technik verschlüsselt an uns übertragen. Ferner können Bewerber 
                  uns ihre Bewerbungen via E-Mail übermitteln. Hierbei bitten wir jedoch zu beachten, dass 
                  E-Mails grundsätzlich nicht verschlüsselt versendet werden und die Bewerber selbst für die 
                  Verschlüsselung sorgen müssen. Wir können daher für den Übertragungsweg der Bewerbung zwischen 
                  dem Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen und empfehlen 
                  daher eher ein Online-Formular oder den postalischen Versand zu nutzen. Denn statt der 
                  Bewerbung über das Online-Formular und E-Mail, steht den Bewerbern weiterhin die Möglichkeit 
                  zur Verfügung, uns die Bewerbung auf dem Postweg zuzusenden. </p>
                  <p className='text-white mb-3'>Die von den Bewerbern zur Verfügung gestellten Daten, können 
                  im Fall einer erfolgreichen Bewerbung für die Zwecke des Beschäftigungsverhältnisses von uns 
                  weiterverarbeitet werden. Andernfalls, sofern die Bewerbung auf ein Stellenangebot nicht 
                  erfolgreich ist, werden die Daten der Bewerber gelöscht. Die Daten der Bewerber werden 
                  ebenfalls gelöscht, wenn eine Bewerbung zurückgezogen wird, wozu die Bewerber jederzeit 
                  berechtigt sind.</p>
                  <p className='text-white'>Die Löschung erfolgt, vorbehaltlich eines berechtigten Widerrufs 
                  der Bewerber, nach dem Ablauf eines Zeitraums von sechs Monaten, damit wir etwaige 
                  Anschlussfragen zu der Bewerbung beantworten und unseren Nachweispflichten aus dem 
                  Gleichbehandlungsgesetz genügen können. Rechnungen über etwaige Reisekostenerstattung 
                  werden entsprechend den steuerrechtlichen Vorgaben archiviert.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten14} icon={<Icon open={daten14} />} >
                  <AccordionHeader onClick={handleOpenAcc14}>Kontaktaufnahme</AccordionHeader>
                  <AccordionBody  style={{ display: daten14 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, 
                  E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der 
                  Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet. Die Angaben 
                  der Nutzer können in einem Customer-Relationship-Management System ("CRM System") oder 
                  vergleichbarer Anfragenorganisation gespeichert werden.</p>
                  <p className='text-white'>Wir löschen die Anfragen, sofern diese nicht mehr erforderlich 
                  sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen 
                  Archivierungspflichten.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten15} icon={<Icon open={daten15} />} >
                  <AccordionHeader onClick={handleOpenAcc15}>Newsletter</AccordionHeader>
                  <AccordionBody  style={{ display: daten15 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres 
                  Newsletters sowie das Anmelde-, Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. 
                  Indem Sie unseren Newsletter abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.</p>
                  <p className='text-white mb-3'>Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische 
                  Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder 
                  einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, 
                  sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren 
                  Leistungen und uns.</p>
                  <p className='text-white mb-3'>Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem 
                  sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer 
                  Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. 
                  Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen 
                  nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. 
                  Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.</p>
                  <p className='text-white mb-3'>Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie 
                  Ihre E-Mailadresse angeben. Optional bitten wir Sie einen Namen, zwecks persönlicher Ansprache im Newsletters 
                  anzugeben.</p>
                  <p className='text-white mb-3'>Der Versand des Newsletters und die mit ihm verbundene Erfolgsmessung erfolgen auf 
                  Grundlage einer Einwilligung der Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG 
                  oder falls eine Einwilligung nicht erforderlich ist, auf Grundlage unserer berechtigten Interessen am Direktmarketing 
                  gem. Art. 6 Abs. 1 lt. f. DSGVO i.V.m. § 7 Abs. 3 UWG.</p>
                  <p className='text-white mb-3'>Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten 
                  Interessen gem. Art. 6 Abs. 1 lit. f DSGVO. Unser Interesse richtet sich auf den Einsatz eines nutzerfreundlichen sowie 
                  sicheren Newslettersystems, das sowohl unseren geschäftlichen Interessen dient, als auch den Erwartungen der Nutzer entspricht 
                  und uns ferner den Nachweis von Einwilligungen erlaubt.</p>
                  <p className='text-white'>Kündigung/Widerruf - Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. 
                  Ihre Einwilligungen widerrufen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wir 
                  können die ausgetragenen E-Mailadressen bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern bevor 
                  wir sie löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf den 
                  Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich, sofern 
                  zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten16} icon={<Icon open={daten16} />} >
                  <AccordionHeader onClick={handleOpenAcc16}>Hosting und E-Mail-Versand</AccordionHeader>
                  <AccordionBody  style={{ display: daten16 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung 
                  der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, 
                  E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses 
                  Onlineangebotes einsetzen.</p>
                  <p className='text-white'>Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, 
                  Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes 
                  auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes 
                  gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten17} icon={<Icon open={daten17} />} >
                  <AccordionHeader onClick={handleOpenAcc17}>Erhebung von Zugriffsdaten und Logfiles</AccordionHeader>
                  <AccordionBody  style={{ display: daten17 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im 
                  Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). 
                  Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über 
                  erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und 
                  der anfragende Provider.</p>
                  <p className='text-white'>Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) 
                  für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, 
                  sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten18} icon={<Icon open={daten18} />} >
                  <AccordionHeader onClick={handleOpenAcc18}>Google Analytics</AccordionHeader>
                  <AccordionBody  style={{ display: daten18 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und 
                  wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google 
                  LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer 
                  werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
                  <p className='text-white mb-3'>Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, 
                  das europäische Datenschutzrecht einzuhalten. Weitere Informationen finden Sie <a target='blank' className='text-blue-400 hover:underline' href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active' >hier</a>.</p>
                  <p className='text-white mb-3'>Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes 
                  durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit 
                  der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus 
                  den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.</p>
                  <p className='text-white mb-3'>Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse 
                  der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den 
                  Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen 
                  und dort gekürzt.</p>
                  <p className='text-white mb-3'>Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google 
                  zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; 
                  die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten 
                  an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin 
                  herunterladen und installieren: <a target='blank' className='text-blue-400 hover:underline' href='http://tools.google.com/dlpage/gaoptout?hl=de' >Link zu Browser Plugins</a>.</p>
                  <p className='text-white mb-3'>Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, 
                  erfahren Sie in der Datenschutzerklärung von <a target='blank' className='text-blue-400 hover:underline' href='https://policies.google.com/technologies/ads' >Google</a> sowie 
                  in den Einstellungen für die Darstellung von Werbeeinblendungen durch <a target='blank' className='text-blue-400 hover:underline' href='https://adssettings.google.com/authenticated' >Google</a>.</p>
                  <p className='text-white'>Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten19} icon={<Icon open={daten19} />} >
                  <AccordionHeader onClick={handleOpenAcc19}>Onlinepräsenzen in sozialen Medien</AccordionHeader>
                  <AccordionBody  style={{ display: daten19 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort 
                  aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf der 
                  jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien deren jeweiligen 
                  Betreiber.</p>
                  <p className='text-white'>Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer 
                  sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen 
                  verfassen oder uns Nachrichten zusenden.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten20} icon={<Icon open={daten20} />} >
                  <AccordionHeader onClick={handleOpenAcc20}>Einbindung von Diensten und Inhalten Dritter</AccordionHeader>
                  <AccordionBody  style={{ display: daten20 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen 
                  (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 
                  lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten 
                  einzubinden (nachfolgend einheitlich bezeichnet als “Inhalte”).</p>
                  <p className='text-white'>Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, 
                  da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser 
                  Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung 
                  der Inhalte verwenden. Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für 
                  statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser 
                  Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter 
                  anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung 
                  unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten21} icon={<Icon open={daten21} />} >
                  <AccordionHeader onClick={handleOpenAcc21}>Google Fonts</AccordionHeader>
                  <AccordionBody  style={{ display: daten21 ? "block" : "none" }} >
                  <p className='text-white'>Wir binden die Schriftarten ("Google Fonts") des Anbieters Google LLC, 1600 Amphitheatre Parkway, 
                  Mountain View, CA 94043, USA, ein. Datenschutzerklärung: <a target='blank' className='text-blue-400 hover:underline' href='https://www.google.com/policies/privacy/' >hier</a>,
                  Opt-Out: <a target='blank' className='text-blue-400 hover:underline' href='https://adssettings.google.com/authenticated' >hier</a>.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten22} icon={<Icon open={daten22} />} >
                  <AccordionHeader onClick={handleOpenAcc22}>Google ReCaptcha</AccordionHeader>
                  <AccordionBody  style={{ display: daten22 ? "block" : "none" }} >
                  <p className='text-white'>Wir binden die Funktion zur Erkennung von Bots, z.B. bei Eingaben in Onlineformularen ("ReCaptcha") des 
                  Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung: <a target='blank' className='text-blue-400 hover:underline' href='https://www.google.com/policies/privacy/' >hier</a>,
                  Opt-Out: <a target='blank' className='text-blue-400 hover:underline' href='https://adssettings.google.com/authenticated' >hier</a>.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten23} icon={<Icon open={daten23} />} >
                  <AccordionHeader onClick={handleOpenAcc23}>Google Maps</AccordionHeader>
                  <AccordionBody  style={{ display: daten23 ? "block" : "none" }} >
                  <p className='text-white'>Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters Google LLC, 1600 Amphitheatre 
                  Parkway, Mountain View, CA 94043, USA, ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer 
                  gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden. 
                  Die Daten können in den USA verarbeitet werden. Datenschutzerklärung: <a target='blank' className='text-blue-400 hover:underline' href='https://www.google.com/policies/privacy/' >hier</a>,
                  Opt-Out: <a target='blank' className='text-blue-400 hover:underline' href='https://adssettings.google.com/authenticated' >hier</a>.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <div className='flex w-full    bg-slate-500 mt-4 pb-4 px-6 rounded-md text-white items-center '>
              <Accordion open={daten24} icon={<Icon open={daten24} />} >
                  <AccordionHeader onClick={handleOpenAcc24}>Verwendung von Facebook Social Plugins</AccordionHeader>
                  <AccordionBody  style={{ display: daten24 ? "block" : "none" }} >
                  <p className='text-white mb-3'>Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung 
                  und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Social Plugins ("Plugins") des 
                  sozialen Netzwerkes facebook.com, welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland 
                  betrieben wird ("Facebook"). Die Plugins können Interaktionselemente oder Inhalte (z.B. Videos, Grafiken oder Textbeiträge) darstellen 
                  und sind an einem der Facebook Logos erkennbar (weißes „f“ auf blauer Kachel, den Begriffen "Like", "Gefällt mir" oder einem „Daumen 
                  hoch“-Zeichen) oder sind mit dem Zusatz "Facebook Social Plugin" gekennzeichnet. Die Liste und das Aussehen der Facebook Social Plugins 
                  kann hier eingesehen werden: <a target='blank' className='text-blue-400 hover:underline' href='https://developers.facebook.com/docs/plugins/' >hier</a>.</p>
                  <p className='text-white mb-3'>Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, 
                  das europäische Datenschutzrecht einzuhalten <a target='blank' className='text-blue-400 hover:underline' href='https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active' >hier</a>.</p>
                  <p className='text-white mb-3'>Durch die Einbindung der Plugins erhält Facebook die Information, dass ein Nutzer die entsprechende 
                  Seite des Onlineangebotes aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann Facebook den Besuch seinem Facebook-Konto 
                  zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel den Like Button betätigen oder einen Kommentar abgeben, wird die 
                  entsprechende Information von Ihrem Gerät direkt an Facebook übermittelt und dort gespeichert. Falls ein Nutzer kein Mitglied von 
                  Facebook ist, besteht trotzdem die Möglichkeit, dass Facebook seine IP-Adresse in Erfahrung bringt und speichert. Laut Facebook wird 
                  in Deutschland nur eine anonymisierte IP-Adresse gespeichert.</p>
                  <p className='text-white mb-3'>Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook 
                  sowie die diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre der Nutzer, können diese den 
                  Datenschutzhinweisen von Facebook entnehmen: <a target='blank' className='text-blue-400 hover:underline' href='https://www.facebook.com/about/privacy/' >hier</a>.</p>
                  <p className='text-white'>Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass Facebook über dieses Onlineangebot Daten über 
                  ihn sammelt und mit seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss er sich vor der Nutzung unseres Onlineangebotes bei 
                  Facebook ausloggen und seine Cookies löschen. Weitere Einstellungen und Widersprüche zur Nutzung von Daten für Werbezwecke, sind innerhalb der 
                  Facebook-Profileinstellungen möglich: <a target='blank' className='text-blue-400 hover:underline' href='https://www.facebook.com/settings?tab=ads' >hier</a> oder 
                  über die US-amerikanische Seite <a target='blank' className='text-blue-400 hover:underline' href='http://www.aboutads.info/choices/' >hier</a> oder 
                  die EU-Seite <a target='blank' className='text-blue-400 hover:underline' href='http://www.youronlinechoices.com/' >hier</a>. 
                  Die Einstellungen erfolgen plattformunabhängig, d.h. sie werden für alle Geräte, wie Desktopcomputer oder mobile Geräte übernommen.</p>
                  </AccordionBody>
              </Accordion>           
          </div>
          <p className='mt-6'>Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke. Weitere Informationen finden Sie <a target='blank' className='text-blue-400 hover:underline' href='https://datenschutz-generator.de/' >hier</a>.</p>
        </div>
      </div>
    )
  }
  