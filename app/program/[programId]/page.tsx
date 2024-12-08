import getProgram from '@/lib/dbOperations/getProgram';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import banner from '@/public/imgs/banners/leadloom0.jpg';
import banner2 from '@/public/imgs/banners/leadLoomBanner.png';
import mountains from '@/public/imgs/banners/mountains_yellow.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next/types';

type Props = {
    params: { programId: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 60 * 60 * 24 * 3; // 3days

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
    const id = params.programId;

    // fetch data
    const program = await getProgram({}, params.programId);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    const previousKeywords = (await parent).keywords || [];

    const pageDescription =
        "LeadLoom is the collection of free to play games that rewards you for playing. Let's play " +
        (program?.programName || 'with LeadLoom') +
        ' ➡️ ' +
        ((program?.description &&
            program?.description?.substring(0, 150) + '...') ||
            '');
    return {
        title: "Let's play" + program?.programName || 'with LeadLoom',
        description: pageDescription,
        keywords: `${program?.programName}, ${previousKeywords}`,
        openGraph: {
            // images: [`${program?.img??program?.img}`, ...previousImages],
            images: [
                {
                    url: `https://lead-loom.vercel.app/${
                        program?.img || '/imgs/avatars/leadloom_girl.png'
                    }`,
                },
                // ...previousImages
            ],
            description: pageDescription,
            title: "Let's play" + program?.programName || 'with LeadLoom',
        },
    };
}

export default async function ProgramPage({ params, searchParams }: Props) {
    const program = await getProgram({}, params.programId);
    if (!program) {
        return notFound();
    }

    const userName = searchParams.user;
    const friendName = searchParams.friend;

    const mobilePlatform = searchParams.platform;
    let mobileApp = 'web';

    // const msg = `Hey ${friendName}, I just joined ${program.programName} and I think you should too!`;

    let msg = '';
    console.log('program?.img', program?.img);

    if (userName && friendName) {
        msg = `Hey ${friendName}, ${userName} invited you to play🎉. Have fun😉!!`;
    } else if (userName) {
        msg = `Hey ${userName}, LeadLoom invited you to play🎉. GLHF🔥!!`;
    } else if (friendName) {
        msg = `Hey ${friendName}, your Friend invited you to play🎉. Have fun😉!!`;
    }

    if (mobilePlatform) {
        if (mobilePlatform === 'ios') {
            mobileApp = `ios`;
        } else if (mobilePlatform === 'android') {
            mobileApp = `android`;
        }else
        {
            mobileApp = `web`;
           
        }
    }

    const date = new Date();
    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

    // Format as dd_mm_yy
    const formattedDate = `${day}_${month}_${year}`;

    // first 6 letters
    const shortProgramName = program.programID?.slice(0, 6);

    const subid3 = `${
        userName ?? userName
    }_${formattedDate}_${shortProgramName}_${mobileApp}`;

    const url = `${program.url}${userName ? `&subid1=${userName}` : ''}${
        friendName ? `&subid2=${friendName}` : ''
    }&subid3=${subid3}`;

    const trackingUrl = `https://pro.ciac.me/?utm_source=leadloom&title=${program.programName}&goto=${url}`;

    let mobileTrackingUrl = url;

    if(mobileApp !== 'web'){
        mobileTrackingUrl = "./mobile?redirect="+url;
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
                className=" flex flex-col  items-center justify-center gap-4 rounded-lg bg-yellow-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-md backdrop-filter md:p-20 lg:p-40
"
            >
                <h1 className="text-3xl">{msg}</h1>
                <h2 className="text-2xl">{program.programName}</h2>

                {/* <h3>{url}</h3> */}
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

                {(mobileApp !== 'android'||!mobileApp)&&
                <Link href={`${trackingUrl}`}>
                    <Button className="mr-2 p-6 text-2xl text-white">
                        PLAY FOR FREE
                    </Button>
                </Link>
                }
                {mobileApp === 'android'&&
                <Link href={`${mobileTrackingUrl}`} target="_blank">
                    <Button className="mr-2 p-6 text-2xl text-white">
                        PLAY FOR FREE on android
                    </Button>
                    {/* <h2>{mobileTrackingUrl}</h2> */}
                </Link>
                }

            </div>
        </section>
    );
}
