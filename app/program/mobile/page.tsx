import Link from 'next/link';

type Props = {
    params: { programId: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 60 * 60 * 24 * 3; // 3days

// export const revalidate = 10;
export default async function ModbileRedirect({ params, searchParams }: Props) {
    // search params redirect

   
    const redirectUrl = searchParams.redirect;
    // get all search params after word redirect including it
    // mobile?redirect=https://dorinebeaumont.com/g/lgqgkhpfjk6ac0379e2d4933c7a322?subid=leadloom&subid1=filszu&subid3=filszu_03_12_24_WOT-re_android
    // get mobile?redirect=https://dorinebeaumont.com/g/lgqgkhpfjk6ac0379e2d4933c7a322?subid=leadloom&subid1=filszu&subid3=filszu_03_12_24_WOT-re_android

  
    return (
        <section
            className="
            flex flex-col items-center justify-center gap-4
        "
        >
            {/* <Link href={`${redirectUrl}`}>{redirectUrl}</Link> */}
            <Link href={`${redirectUrl}`} target='_blank'>{redirectUrl}</Link>
        </section>
    );
}
