// type Program = { admitadID: string | null
//     cons: string[] | null
//     cpa: number | null
//     cpaPL: number | null
//     cpaUser: number | null
//     cpaUserPL: number | null
//     created_at: string
//     description: string | null
//     id: string
//     img: string | null
//     programID: string | null
//     programName: string | null
//     pros: string[] | null
//     url: string | null}
import { FaLocationArrow } from 'react-icons/fa';
import { PiNavigationArrowFill } from 'react-icons/pi';
import { Program } from '@/types';
import Image from 'next/image';

import kerfus from '@/public/imgs/programsImgs/kerfus.webp';
import wot from '@/public/imgs/programsImgs/WOT.jpg';

import leadloomBanner from '@/public/imgs/banners/leadloom0.jpg';
import { Button } from '../ui/button';
import Link from 'next/link';

const ProgramCard = (props: Program) => {
    const usdToPln = 4.0;
    return (
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg p-8 ">
            <section className="flex items-center flex-wrap justify-center md:justify-normal gap-8">
                <div className="w-64 h-64 rounded-md overflow-clip flex self-center self justify-center items-center ">
                    <Image
                        src={props.img || leadloomBanner}
                        alt={props.programName || 'Program Image'}
                        width={500}
                        height={500}
                        // sizes="fill
                        // sizes="(min-width: 808px) 50vw, 100vw"
                        // style={{
                        //     objectFit: 'cover',
                        // }}

                        className="w-full h-full object-cover"
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className="font-semibold text-4xl">
                        {props.programName}
                    </h2>

                    <h3 className="uppercase text-2xl">
                        potential reward 🗽🇺🇸:
                        <span className="text-primary pl-2 pr-2">
                            {props.cpaUser ?? ''}$
                        </span>
                        🇵🇱:
                        <span className="text-primary pl-2 pr-2">
                            {props.cpaUserPL ?? ''} PLN
                        </span>
                        
                    </h3>
                    <div>
                            <Button asChild className="p-6">
                                <Link href="/login">
                                    <span className='text-white flex justify-center items-center gap-1 text-lg'>
                                     
                                    
                                    GO & PLAY 
                                    <FaLocationArrow size={22} />  
                                    </span>
                                    
                                </Link>
                            </Button>


                            <Button variant="outline" className="p-6">
                            <span className='text-white flex justify-center items-center gap-1 text-lg'>
                                     
                                    
                                     READ MORE
                                     <FaLocationArrow size={22} />  
                                     </span>
                            </Button>
                            

                        </div>
                </div>
            </section>
            <section className="hidden">
                <div className="flex items-center flex-wrap justify-center md:justify-normal gap-8">
                    {/* Program details */}
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold">
                            {props.programName}
                        </h2>
                        <p className="text-gray-400 w-auto">
                            {props.description}
                        </p>

                        {/* Other program details go here */}

                        {/* Example: Pros and Cons */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Pros</h3>
                            <ul className="list-disc pl-4">
                                {props.pros &&
                                    props.pros.map((pro, index) => (
                                        <li
                                            key={index}
                                            className="text-green-400"
                                        >
                                            {pro}
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Cons</h3>
                            <ul className="list-disc pl-4">
                                {props.cons &&
                                    props.cons.map((con, index) => (
                                        <li
                                            key={index}
                                            className="text-red-400"
                                        >
                                            {con}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProgramCard;
