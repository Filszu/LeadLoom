import React from 'react';
import ProgramHomePageCard from './ProgramHomePageCard';
import wot from '@/public/imgs/programsImgs/WOT2.png';
import wow from '@/public/imgs/programsImgs/wow1.jpg';
import foe from '@/public/imgs/programsImgs/foe.jpg';
import { IProgramHomePage } from '@/types';

const programs: IProgramHomePage[] = [
    {
        programName: 'World of Tanks',
        description:
            'World of Tanks is a team-based massively multiplayer online action game dedicated to armored warfare in the mid-20th century. Throw yourself into epic tank battles with other steel cowboys all over the world with World of Tanks. Your arsenal includes more than 400 armored vehicles from America, the United Kingdom, Germany, France, the Soviet Union, China, and Japan. For more information, visit the official website. Join the game and lead your tank to victory!',
        img: wot,
        cpa: 6,
        currency: '$',
        id: 1,
    },
    {
        programName: 'World of Warships',
        description:
            'World of Warships - is an action MMO that plunges players into intense naval combat',
        img: wow,
        cpa: 8,
        currency: '$',
        id: 2,
    },
    {
        programName:"Forge of Empires",
        description:"Build a Stone Age Settlement in the online strategy game Forge of Empires, fight through history and develop a magnificent empire. Start playing now!",
        img: foe,
        cpa: 3,
        currency: '$',
        id: 3,
    
    }
];
const HomePageProgramsContainer = () => {
    return (
        <div className="">
            {programs.map((program) => (
                <ProgramHomePageCard
                    key={program.id}
                    id={program.id}
                    img={program.img}
                    programName={program.programName}
                    description={program.description}
                    cpa={program.cpa}
                    currency={program.currency}
                />
            ))}
            
        </div>
    );
};

export default HomePageProgramsContainer;
