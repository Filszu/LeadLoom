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
import TooltipBadge from '../ui/custom/tooltipBadge';
import { MdAccessTime } from 'react-icons/md';
import { SiWindows } from 'react-icons/si';
import { FcAndroidOs } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const ProgramCard = ({
    props,
    nickname,
}: {
    props: Program;
    nickname: string;
}) => {
    const usdToPln = 4.0;

    const tootltip = {
        content: '',
        text: '',
        variant: 'default' as
            | 'default'
            | 'secondary'
            | 'destructive'
            | 'warning'
            | 'outline',
            
            
    };

    if (props.status === 'new') {
        tootltip.content = 'New program';
        tootltip.text = 'New';
        // tootltip.variant = "outline"
    }
    if (props.status === 'verified') {
        tootltip.content =
            'Verified program - you can trust it. That means that the reward is GUARANTEED after completing the task properly.';
        tootltip.text = 'Verified';
        // tootltip.variant = "secondary"
    }
    if (props.status === 'unverified') {
        tootltip.content =
            'Unverified program - new program that has not been verified yet. That means that it has not been tested yet by LeadLoom team and our COMMUNITY. Become tester and get the BONUS reward! (if available)';
        tootltip.text = 'Unverified';
        tootltip.variant = 'destructive';
    }
    if (props.status === 'paused') {
        tootltip.content =
            'Paused program - the program is temporarily paused. That means that the reward is not available at the moment. Please check back later.';
        tootltip.text = 'temporarily paused';
        tootltip.variant = 'warning';
    }

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
                    <div className="flex items-center gap-2 ">
                        <h2 className="block text-3xl font-semibold">
                            {props.programName}
                        </h2>
                        <div className="flex  ">
                            <TooltipBadge
                                tooltipContent={tootltip.content}
                                tooltipText={tootltip.text}
                                variant={tootltip.variant}
                            />
                        </div>
                    </div>

                    <h3 className="text-xl uppercase">
                        potential reward
                        {props.cpaUser && (
                            <>
                                🗽🇺🇸:
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
                        <span className="flex gap-5">
                            {props.time && (
                                <span className="flex items-center">
                                    <MdAccessTime className="text-2xl" />{' '}
                                    <span className="pl-1 lowercase text-primary">
                                        {props.time}min
                                    </span>
                                </span>
                            )}
                            {props.platform && (
                                <span className="flex items-center gap-1">
                                    {(props.platform.includes(1))&&<SiWindows className="text-xl" />}
                                    {(props.platform.includes(2))&&<FcAndroidOs className="text-xl" />}
                                    {(props.platform.includes(3))&&<FaApple className="text-xl" />}
                                </span>
                            )}
                        </span>
                    </h3>
                    <CardActionsSection props={props} nickname={nickname} />
                </div>
            </section>
        </div>
    );
};

export default ProgramCard;
