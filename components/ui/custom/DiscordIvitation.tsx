import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { SiDiscord, SiStarship } from 'react-icons/si';

export default function DiscordInvitationCard() {
    return (
        <Card className="my-5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl">
            <CardContent className="p-6 sm:p-10">
                <h2 className="mb-6  flex-col content-center justify-center gap-2 text-center text-3xl font-bold sm:text-4xl md:flex">
                    <div className="flex items-center justify-center">
                        <span className="flex items-center">J</span>
                        <SiStarship size={30} />
                        <span className="flex items-center">IN</span>
                    </div>
                    <div>our Discord server</div>
                    <div className="flex content-center justify-center">
                        <SiDiscord size={40} />
                    </div>
                </h2>

                <div className="mb-8 space-y-4 text-center text-lg sm:text-xl ">
                    <p className="font-semibold">
                        🎁 Bonus 1: Get a nice surprise
                    </p>
                    <p className="font-semibold">
                        🚀 Bonus 2: Early access to new features
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link target="_blank" href="https://discord.gg/D9GDbDKDpY">
                        <Button className="transform rounded-full bg-white px-8 py-3 text-lg font-bold text-purple-600 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-100 hover:text-purple-700 hover:shadow-lg">
                            Join Now
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { useState, useEffect } from "react"
// import "./discord-invitation-card.css"

// export default function DiscordInvitationCard() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <Card className="w-full text-white shadow-xl overflow-hidden relative">
//       <div className="absolute inset-0 bg-gradient animate-gradient"></div>
//       <CardContent className="p-6 sm:p-10 relative z-10">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">JOIN our Discord server</h2>
//         <div className="space-y-4 text-lg sm:text-xl mb-8">
//           <p className="font-semibold">🎁 Bonus 1: Exclusive access to premium content</p>
//           <p className="font-semibold">🚀 Bonus 2: Early access to new features</p>
//         </div>
//         <div className="flex justify-center">
//           <Button
//             className="bg-white text-[#7289da] hover:bg-[#7289da] hover:text-white text-lg px-8 py-3 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
//           >
//             Join Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
