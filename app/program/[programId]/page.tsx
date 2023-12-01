import getProgram from '@/lib/dbOperations/getProgram';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import banner from '@/public/imgs/banners/leadloom0.jpg';
import banner2 from '@/public/imgs/banners/leadLoomBanner.png';
import mountains from '@/public/imgs/banners/mountains_yellow.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function ProgramPage({
    params,
    searchParams,
}: {
    params: { programId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const program = await getProgram({}, params.programId);
    if (!program) {
        return notFound();
    }

    const userName = searchParams.user;
    const friendName = searchParams.friend;

    // const msg = `Hey ${friendName}, I just joined ${program.programName} and I think you should too!`;

    let msg = '';

    if (userName && friendName) {
        msg = `Hey ${friendName}, ${userName} invited you to play🎉. Have fun😉!!`;
    } else if (userName) {
        msg = `Hey ${userName}, LeadLoom invited you to play🎉. GLHF🔥!!`;
    } else if (friendName) {
        msg = `Hey ${friendName}, your Friend invited you to play🎉. Have fun😉!!`;
    }

    const url = `${program.url}${userName ? `&subid1=${userName}` : ''}${friendName ? `&subid2=${friendName}` : ''}`;

    return (
        <section
            className="
            flex flex-col items-center justify-center gap-4
        "
        >
            <div className="max-h-10 w-full overflow-clip">
                <Image
                    alt="Leadloom Banner - cute cats and money"
                    src={mountains}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
            </div>
            <div
                className=" flex flex-col  items-center justify-center gap-4 rounded-lg bg-yellow-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-md backdrop-filter md:p-20 lg:p-40
"
            >
                <h1 className="text-3xl">{msg}</h1>
                <h2 className="text-2xl">{program.programName}</h2>

                <div className="group h-64 w-64 flex-none overflow-clip rounded-md transition-transform">
                    <Image
                        src={program.img || banner}
                        alt={program.programName || 'Program Image'}
                        width={500}
                        height={500}
                        // sizes="fill
                        // sizes="(min-width: 808px) 50vw, 100vw"
                        // style={{
                        //     objectFit: 'cover',
                        // }}

                        className="h-full w-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    
                </div>

                    {/* <h3>{url}</h3> */}

                <Link href={`${url}`}>
                    <Button className="mr-2 p-6 text-2xl text-white">
                        PLAY FOR FREE
                    </Button>
                </Link>
            </div>
        </section>
    );
}
