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
import CardActionsSection from './CardActionsSection';

const ProgramCard = (props: Program) => {
    const usdToPln = 4.0;
    return (
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg p-8 ">
            <section className="flex items-center justify-center md:justify-normal gap-8">
                <div className="w-64 h-64 rounded-md overflow-clip flex-none transition-transform group">
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

                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>

                <div className='flex-auto flex flex-col gap-2'>
                    <h2 className="font-semibold text-3xl">
                        {props.programName}
                    </h2>

                    <h3 className="uppercase text-xl">
                        {props.cpaUser&&(<>
                        potential reward 🗽🇺🇸:
                        <span className="text-primary pl-2 pr-2">
                            {props.cpaUser ?? ''}$ ({props.cpaUser*usdToPln} PLN)
                        </span></>)}
                        🇵🇱:
                        <span className="text-primary pl-2 pr-2">
                            {props.cpaUserPL ?? ''} PLN
                        </span>
                        
                    </h3>
                    <CardActionsSection {...props}/>
                </div>
            </section>
            
        </div>
    );
};

export default ProgramCard;
