import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/imgs/logo-elektron.jpg';
import Link from 'next/link';
import Script from 'next/script';
// import { FiGithub } from 'react-icons/fi'

const inter = Inter({ subsets: ['latin'] });

const defaultUrl = process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'LeadLoom',
    description: 'LeadLoom - play games and win valuable prizes',
    keywords:
        'filszu, filshu, leadloom,lead-loom,lead loom, free, games, earn,',
        
    openGraph: {
        title: 'LeadLoom',
        description: 'LeadLoom - play games and win valuable prizes ',
        url: 'https://lead-loom.vercel.app',
        siteName: 'LeadLoom',
        images: [
            {
                url: 'https://lead-loom.vercel.app/imgs/avatars/leadloom_girl.png',
                width: 500,
                height: 500,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // <meta name="msapplication-TileColor" content="#cbf7ee">
    // <meta name="theme-color" content="#ffffff">
    // Open Graph
    // 'og:type': 'website',
    // 'og:site_name': 'Radio Elektron',
    // 'og:url': 'https://radio-elektron.vercel.app/',
    // 'og:title': 'Radio Elektron',
    // 'og:description': 'Radio Elektron by Filszu',
    // 'og:image': 'https://radio-elektron.vercel.app/imgs/logo-elektron.jpg',
};

export default function RootLayout({
    children,
    newSongModal,
}: {
    children: React.ReactNode;
    newSongModal: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
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
                        2023
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
        </html>
    );
}
