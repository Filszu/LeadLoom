'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { FaLocationArrow } from 'react-icons/fa';
import { useState } from 'react';
import { Program } from '@/types';
import { cn } from '@/lib/utils';

const CardActionsSection = (props: Program) => {
    const [showProgramInfo, setshowProgramInfo] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    return (
        <div>
            <div>
                <Button disabled={!acceptedTerms} className="p-6 mr-2">
                    <Link href="/login">
                        <span className="text-white flex justify-center items-center gap-1 text-lg">
                            GO & PLAY
                            <FaLocationArrow size={22} />
                        </span>
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    className="p-6"
                    onClick={() => {
                        setshowProgramInfo(!showProgramInfo);
                        setAcceptedTerms(true);
                    }}
                >
                    <span className="text-white flex justify-center items-center gap-1 text-lg">
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

                className='animate-[wiggle_1s_ease-in-out_infinite]'
            >
                <div className="flex items-center fljustify-center md:justify-normal gap-8">
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

export default CardActionsSection;
