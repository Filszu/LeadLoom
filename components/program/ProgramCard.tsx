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

import { Program } from '@/types';
import Image from 'next/image';

import kerfus from '@/public/imgs/programsImgs/kerfus.webp';
import wot from '@/public/imgs/programsImgs/WOT.jpg';

const ProgramCard = (props: Program) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg p-6">
            <div className="flex items-center ">
                {/* Image on the right */}
                {props.img && (
                    // img container
                    <div className="w-64 h-64 rounded-md overflow-clip">
                        <Image
                            src={wot}
                            alt={props.programName || 'Program Image'}
                            width={500}
                            height={500}
                            // sizes="fill
                            // sizes="(min-width: 808px) 50vw, 100vw"
                            // style={{
                            //     objectFit: 'cover', 
                            // }}

                            className='w-full h-full object-cover'

                            
                        />
                    </div>
                )}

                {/* Program details */}
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">
                        {props.programName}
                    </h2>
                    <p className="text-gray-400">{props.description}</p>

                    {/* Other program details go here */}

                    {/* Example: Pros and Cons */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Pros</h3>
                        <ul className="list-disc pl-4">
                            {props.pros &&
                                props.pros.map((pro, index) => (
                                    <li key={index} className="text-green-400">
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
                                    <li key={index} className="text-red-400">
                                        {con}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
