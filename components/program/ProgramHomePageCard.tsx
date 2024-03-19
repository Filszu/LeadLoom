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
import { IProgramHomePage, Program } from '@/types';
import Image, { StaticImageData } from 'next/image';

import kerfus from '@/public/imgs/programsImgs/kerfus.webp';

import leadloomBanner from '@/public/imgs/banners/leadloom0.jpg';
import { Button } from '../ui/button';
import Link from 'next/link';
import CardActionsSection from './CardActionsSection';
import TooltipBadge from '../ui/custom/tooltipBadge';
import { MdAccessTime } from 'react-icons/md';
import { cn } from '@/lib/utils';

const ProgramHomePageCard = (props: IProgramHomePage) => {
    const usdToPln = 4.0;

    const tootltip = {
        content: '',
        text: '',
        variant: 'default' as
            | 'default'
            | 'secondary'
            | 'destructive'
            | 'outline',
    };

    if ('new' === 'new') {
        tootltip.content = 'New program';
        tootltip.text = 'New';
        // tootltip.variant = "outline"

        return (
            <div className="overflow-hidden rounded-lg  p-8 text-white ">
                <section
                    className={cn(
                        `flex flex-col items-center justify-center gap-8 md:flex-row md:justify-normal`,
                        `${props.id %2==0 && ' md:flex-row-reverse'}`,
                    )}
                >
                    <div
                        className={cn(
                            'group h-64 w-64 flex-1 overflow-clip rounded-md transition-transform md:flex-none',
                        )}
                    >
                        <Image
                            src={props.img || leadloomBanner}
                            alt={
                                props.programName ||
                                'Program Image' + props.description ||
                                'Program Description'
                            }
                            width={500}
                            height={500}
                            placeholder="blur"
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
                                    tooltipContent={props.description}
                                    tooltipText={'i'}
                                    variant={tootltip.variant}
                                />
                            </div>
                        </div>
                        <p className="text-4xl font-bold text-primary">
                            +{props.cpa}
                            {props.currency}
                        </p>
                    </div>
                </section>
            </div>
        );
    }
};

export default ProgramHomePageCard;
