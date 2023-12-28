'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { FaLocationArrow } from 'react-icons/fa';
import { useState } from 'react';
import { Program } from '@/types';
import { cn } from '@/lib/utils';
import { PiUserCirclePlusDuotone } from 'react-icons/pi';
import { FaUserPlus } from 'react-icons/fa';
import { PiUserPlusBold } from 'react-icons/pi';
import { useToast } from '../ui/use-toast';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const CardActionsSection = ({
    props,
    nickname,
}: {
    props: Program;
    nickname: string;
}) => {
    const { toast } = useToast();

    const [showProgramInfo, setshowProgramInfo] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const programUrl = `/program/${props.programID}?user=${nickname}`;
    const refName = 'BRO';
    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button disabled={!acceptedTerms} className="p-6">
                                <Link href={programUrl} target="_blank">
                                    <span className="flex items-center justify-center gap-1 text-lg text-white">
                                        GO & PLAY
                                        <FaLocationArrow size={22} />
                                    </span>
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {!acceptedTerms?(<p>
                                Before joining the program, please read the
                                program description and accept the terms and
                                conditions
                            </p>):
                            <p>
                                🕹️GLHF🫡
                            </p>
                            }
                            
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Button
                    disabled={!acceptedTerms}
                    className="py-6"
                    onClick={() => {
                        toast({
                            title: `Invite your friends to the game🔥💪`,
                            description: `You can invite as many friends as you want to the game/challenge👋. Every friend who completes the challenge guarantees you a 100% reward🔥.
                        🎯But remember that using the same Wi-Fi network or the same IP address will be marked as an invalid prize because it is against the rules. ⭐The default username is ${refName}, you can change this at the top of the address bar`,
                            variant: 'success',
                        });
                    }}
                >
                    <Link
                        href={`${programUrl}&friend=${refName}`}
                        target="_blank"
                    >
                        <span className="flex items-center justify-center gap-1 text-lg text-white">
                            {/* <PiUserCirclePlusDuotone size={28} /> */}
                            <PiUserPlusBold size={28} />
                            {/* <FaUserPlus size={28} /> */}
                        </span>
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    className="p-6"
                    onClick={() => {
                        setshowProgramInfo(!showProgramInfo);
                        setAcceptedTerms(true);
                        toast({
                            title: 'Remember to follow the program rules.',
                            description:
                                "Have fun❣️You can complete each challenge once every 30 days. Don't cheat - any inaccuracies will be detected. And you will be banned🫡",
                            variant: 'success',
                        });
                    }}
                >
                    <span className="flex items-center justify-center gap-1 text-lg text-white">
                        READ MORE
                        <FaLocationArrow size={22} />
                    </span>
                </Button>
            </div>

            <section
                // className={cn(
                //     // 'h-0 overflow-hidden opacity-0',
                //     // showProgramInfo && 'opacity-1 h-auto ',
                //     "overflow-hidden animate-[wiggle]"
                // )}

                // className='animate-[accordionUp_1s_ease-in-out]'

                className={cn(
                    // "overflow-hidden opacity-0",

                    // showProgramInfo && "animate-[accordionDown_1s_ease-in-out]"

                    'grid grid-rows-[0fr] overflow-hidden text-sm opacity-0 transition-all duration-300 ease-in-out',

                    showProgramInfo && 'grid-rows-[1fr] opacity-100',
                )}
            >
                <div className="mt-4 flex gap-8 overflow-hidden">
                    {/* Program details */}
                    <section className="flex-1">
                        <h2 className="text-xl font-semibold">
                            About the program
                        </h2>
                        <p className="w-auto text-gray-400">
                            {props.description}
                        </p>

                        {/* Other program details go here */}
                    </section>
                    <section className="flex-1">
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
                    </section>
                </div>
            </section>
        </div>
    );
};

export default CardActionsSection;
