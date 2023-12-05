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

const ProgramCard = ({
    props,
    nickname,
}: {
    props: Program;
    nickname: string;
}) => {
    const usdToPln = 4.0;
    return (
        <div className="overflow-hidden rounded-lg bg-gray-800 p-8 text-white shadow-lg">
            <section className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-normal">
                <div className="group h-64 w-64 flex-1 overflow-clip rounded-md transition-transform md:flex-none">
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

                        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-auto flex-col gap-2">
                    <h2 className="text-3xl font-semibold">
                        {props.programName}
                    </h2>

                    <h3 className="text-xl uppercase">
                        {props.cpaUser && (
                            <>
                                potential reward 🗽🇺🇸:
                                <span className="pl-2 pr-2 text-primary">
                                    {props.cpaUser ?? ''}$ (
                                    {props.cpaUser * usdToPln} PLN)
                                </span>
                            </>
                        )}
                        🇵🇱:
                        <span className="pl-2 pr-2 text-primary">
                            {props.cpaUserPL ?? ''} PLN
                        </span>
                    </h3>
                    <CardActionsSection props={props} nickname={nickname} />
                </div>
            </section>
        </div>
    );
};

export default ProgramCard;
