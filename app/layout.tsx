import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
// import { FiGithub } from 'react-icons/fi'
import { CSPostHogProvider } from './providers';
const inter = Inter({ subsets: ['latin'] });

const defaultUrl = process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
    // metadataBase: new URL(defaultUrl),
    title: 'LeadLoom',
    description: 'LeadLoom - play games and win valuable prizes',
    keywords:
        'filszu, filshu, leadloom,lead-loom,lead loom, free, games, earn, leadloom, leadloom games, earn money, leadloom.games,lidl, earn, earn tokens,play to earn, earn coins, shrek, meme earn rewards, earn prizes, earn gifts, earn free stuff, world of tanks, world of warships, world of warplanes, wargaming, war thunder, wargaming games, wargaming free stuff, wargaming rewards, wargaming prizes, wargaming gifts, enlisted',

    openGraph: {
        title: 'LeadLoom',
        description: 'LeadLoom - play games and win valuable prizes ',
        url: 'https://leadloom.games/',
        siteName: 'LeadLoom',
        images: [
            {
                url: 'https://leadloom.games/imgs/avatars/leadloom_shrek.png',
                width: 500,
                height: 500,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <CSPostHogProvider>
                <body className={inter.className}>
                    {/* {newSongModal} */}
                    <main className="flex min-h-screen  w-full justify-center ">
                        {children}
                    </main>

                    <Toaster />

                    <footer className="mb-10 w-full text-center  ">
                        <h3>
                            Created with ❣️ by{' '}
                            <Link
                                href={'https://lessons.ciac.me/'}
                                className="link-underline text-primary"
                            >
                                Filszu
                            </Link>{' '}
                            2023-2025
                        </h3>
                        <h3 className="">
                            Give a ⭐ on{' '}
                            <Link
                                href={'https://github.com/Filszu'}
                                className="link-underline text-primary"
                            >
                                {/* <FiGithub size={10} />  */}
                                Github repo
                            </Link>
                        </h3>
                    </footer>

                    <Script
                        // strategy='lazyOnload'
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
                    </Script>
                </body>
            </CSPostHogProvider>
        </html>
    );
}
