import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LeadLoom App',
    short_name: 'LeadLoom',
    description: 'LeadLoom - play games and win valuable prizes',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}