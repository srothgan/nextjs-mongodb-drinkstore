import Link from 'next/link';
import {AiOutlinePhone, AiOutlineMail} from "react-icons/ai";
export default function Partyservice() {

    const Zapfen = [
        'Zapfhähne',
        'Partyfässer',
        'Perfectdraft-Zapfanlage',
        'Zapfarmatur für Kegg-Fässer',
        'Böcke',
        'Theken',
        'Zapfinsel',
        'Ausschankwagen',
        'Glühweinkocher',
      ];

    const Party = [
        'Kühlwagen',
        'Stehtische',
        'Stehtische mit Schirm (Set)',
        'Tischsets',
        'Sitzauflagen',
        'Sonnenschirm (groß & klein)',
        'Flaschenkühltruhen',
        'Flaschenkühlschränke',
        'Aschenbecher',
        'Tabletts',
        'Glühweintassen',
        'Biergläser',
        'Pilstulpen',
        'Weizenbiergläser',
        'Kölschstangen',
        'Sektgläser',
        'Weingläser',
        'Longdrinkgläser',
        'Pinnchen',
        'Rialtos',
      ];    
    const Eventpackage = [
        'Aschenbecher',
        'Tabletts',
        'Zapfinsel',
        'Stehtische mit Schirm (Set)',
        'Sonnenschirm klein',
        'Biergläser',
        'Pilstulpen',
        'Weizenbiergläser',
        'Kölschstangen',
        '2 Mitarbeiter',
    ];
    
    const PremiumPackage = [
        'Aschenbecher',
        'Tabletts',
        'Ausschankwagen',
        'Stehtische mit Schirm (Set)',
        'Sitzbänke',
        'Sonnenschirm groß',
        'Biergläser',
        'Pilstulpen',
        'Weizenbiergläser',
        'Kölschstangen',
        'Sektgläser',
        'Weingläser',
        'Longdrinkgläser',
        '4 Mitarbeiter',
    ];
    const WeihnachtsPackage = [
        'Stehtische',
        'Aschenbecher',
        'Tabletts',
        'Theke',
        'Glühweinkocher',
        '2 Heizpilze',
        'Glühweintassen',
    ]
    const PartyPackage = [
        'Stehtische',
        'Aschenbecher',
        'Tabletts',
        'Zapfhähne',
        'Partyfässer',
        'Flaschenkühltruhen',
        'Flaschenkühlschränke',
        'Biergläser',
        'Weizenbiergläser',
    ]
    const packages = [
        { name: "Glühwein Service", items: WeihnachtsPackage, price:50.00, id:"GS" },
        { name: "Party Service", items: PartyPackage, price:70.00, id:"PS"  },
        { name: "Event Service", items: Eventpackage, price:90.00, id:"ES"  },
        { name: "Premium Service", items: PremiumPackage, price:100.00, id:"PreS"  },
    ];
    const formatPrice = (price) => {
        return Number.parseFloat(price).toFixed(2);
      };
    return (
        <div className='p-4 bg-white'>
            <h2 className='pb-8 font-sans text-red-600'>Partyservice</h2>
                <p>Wir haben einen umfangreichen Partyservice, um Events egal ob familiär oder privat zu ermöglichen. Sie finden hier eine Übersicht unserer Produkte und Services. Bei weiterem Interesse kontaktieren Sie uns.</p>
                <div className='w-full flex justify-center my-2'>
                    <Link href='tel: 000001111' className='uppercase text-white bg-red-600 py-2 px-4 rounded-full ml-2 flex items-center '> 
                        <AiOutlinePhone size={22} /> <p className='ml-1'>Telefon</p>
                    </Link>
                    <Link href='mailto:test@mail.de' className='uppercase text-white bg-red-600 py-2 px-4 rounded-full ml-2 flex items-center '> 
                        <AiOutlineMail size={22} /> <p className='ml-1'>E-Mail </p>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 my-2">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="flex flex-col my-4 border rounded-lg p-4 shadow-lg h-full justify-between">
                            <div>
                                <h3 className="pb-4 font-sans text-red-600 text-2xl">{pkg.name}</h3>
                                <div className="flex flex-col gap-4">
                                    {pkg.items.map((item) => (
                                        <div key={item} className="flex items-start space-x-2">
                                            <span className="text-xl">•</span>
                                            <p className="text-lg">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='pl-4 pr-2 py-4 rounded-l-lg border-2 border-red-500 text-black font-bold flex items-center justify-center'>
                                    {formatPrice(pkg.price)} €
                                </div>
                                <Link href='/' className='pl-2 pr-4 py-4 rounded-r-lg bg-red-500 text-white font-bold hover:bg-red-600 transition duration-300 ease-in-out flex items-center justify-center'>
                                    Buchen
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
  }
  