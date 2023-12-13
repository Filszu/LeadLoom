import React from 'react';



import LeadLoomGril2 from '@/public/imgs/avatars/leadloom_girl2_1.png';
import moneyfloor from '@/public/imgs/banners/money_floor.png';
import Image from 'next/image';

const JumpingAvatar = () => {
    return (
        <section className="center flex w-full flex-col  justify-center">
            <div className="h-80"></div>
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={LeadLoomGril2}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                    className="animate-bounce"
                />

                <div className="relative bottom-10 drop-shadow-lg ">
                    <Image
                        src={moneyfloor}
                        alt="Picture of the author"
                        width={200}
                        height={500}
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

export default JumpingAvatar;
