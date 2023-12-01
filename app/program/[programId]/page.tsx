import getProgram from '@/lib/dbOperations/getProgram';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import banner from '@/public/imgs/banners/leadloom0.jpg';
import banner2 from '@/public/imgs/banners/leadLoomBanner.png';
import mountains from '@/public/imgs/banners/mountains_yellow.jpg';
import { Button } from '@/components/ui/button';

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
    }

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
                className="flex flex-col items-center  justify-center rounded-lg bg-yellow-100 bg-opacity-10 bg-clip-padding p-40 backdrop-blur-md backdrop-filter gap-4
"
            >
                <h1>{msg}</h1>
                <h2>{program.programName}</h2>
                

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

                        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>

                <Button className="mr-2 p-6 text-white">PLAY FOR FREE</Button>
            </div>
        </section>
    );
}
