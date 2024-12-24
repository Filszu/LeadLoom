"use client"

import { useState, useRef, useEffect } from 'react'
import { ReviewCard } from './review-card'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
    {
        "name": "ShadowBlaze",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Dec 2023",
        "totalWithdraw": 45,
        "completedChallenges": 9,
        "country": "US",
        "content": "Leadloom is incredibly fast and easy to use! The support team is always available, and withdrawals are processed in no time. Highly recommend this platform for anyone looking to earn quickly and connect with an amazing Discord community!"
      },
      {
        "name": "PixelQueen",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Jan 2024",
        "totalWithdraw": 30,
        "completedChallenges": 8,
        "country": "GB",
        "content": "This platform is a breeze to navigate, and the payouts are super quick! The friendly Discord community and responsive support make Leadloom a standout. It's the best way to grow and earn online!"
      },
      {
        "name": "NovaSlayer",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Feb 2024",
        "totalWithdraw": 50,
        "completedChallenges": 12,
        "country": "ES",
        "content": "Withdrawals are lightning-fast, and the challenges are so much fun! I've built great friendships on Discord and love how supportive the Leadloom team is. Easily the best platform I've ever used!"
      },
      {
        "name": "EchoRogue",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Mar 2024",
        "totalWithdraw": 15,
        "completedChallenges": 3,
        "country": "JP",
        "content": "As a new user, I found Leadloom easy to understand and super rewarding. Withdrawals are quick, and the support team goes above and beyond to help. The Discord group is friendly and welcoming!"
      },
      {
        "name": "LunarAce",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Apr 2024",
        "totalWithdraw": 20,
        "completedChallenges": 5,
        "country": "DE",
        "content": "Leadloom makes earning easy and fast! The challenges are exciting, and withdrawals are handled smoothly. The support team is exceptional, and the Discord community is a fantastic bonus!"
      },
      {
        "name": "SkibidiGracz",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "May 2024",
        "totalWithdraw": 25,
        "completedChallenges": 7,
        "country": "PL",
        "content": "Platforma jest szybka i łatwa w obsłudze. Wypłaty są bardzo szybkie, a wsparcie na Discordzie jest wyjątkowe. Świetne miejsce na naukę i zarabianie!"
      },
      {
        "name": "GwiazdorNogger",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Jun 2024",
        "totalWithdraw": 35,
        "completedChallenges": 10,
        "country": "PL",
        "content": "Uwielbiam wyzwania na Leadloom! Wypłaty są ekspresowe, a społeczność Discord jest niesamowita. Polecam każdemu, kto chce zarabiać online."
      },
      {
        "name": "GameMasterPL",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Jul 2024",
        "totalWithdraw": 40,
        "completedChallenges": 12,
        "country": "PL",
        "content": "Leadloom to najlepsza platforma do zarabiania pieniędzy online! Wsparcie jest szybkie, a zadania bardzo angażujące. Gorąco polecam!"
      },
      {
        "name": "SpielMeister",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Aug 2024",
        "totalWithdraw": 18,
        "completedChallenges": 4,
        "country": "DE",
        "content": "Die Plattform ist sehr einfach zu bedienen und die Auszahlungen sind blitzschnell! Toller Support und eine freundliche Discord-Community!"
      },
      {
        "name": "PixelKrieger3",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Sep 2024",
        "totalWithdraw": 22,
        "completedChallenges": 6,
        "country": "DE",
        "content": "Ich liebe die Herausforderungen auf Leadloom! Es macht Spaß, sie zu lösen, und die Belohnungen sind fantastisch. Sehr zu empfehlen!"
      },
      {
        "name": "Lichtjäger",
        "avatar": "/placeholder.svg?height=50&width=50",
        "rating": 5,
        "joinedDate": "Oct 2024",
        "totalWithdraw": 30,
        "completedChallenges": 8,
        "country": "DE",
        "content": "Auszahlungen sind schnell und die Community auf Discord ist großartig. Eine wirklich großartige Plattform, um Spaß zu haben und Geld zu verdienen!"
      }
]

export function ReviewsContainer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(true)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.8 // Scroll 80% of the container width
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount

      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })

      setTimeout(() => {
        if (container) {
          setCanScrollLeft(container.scrollLeft > 0)
          setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
        }
      }, 300)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const handleScroll = () => {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
      }
      container.addEventListener('scroll', handleScroll)

      // Center the initial view
      const centerIndex = Math.floor(reviews.length / 2)
      const cardWidth = 300 // Width of each ReviewCard
      const containerWidth = container.clientWidth
      const initialScrollPosition = (cardWidth * centerIndex) - (containerWidth / 2) + (cardWidth / 2)
      container.scrollLeft = initialScrollPosition

      handleScroll() // Initial check for scroll buttons

      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div 
        ref={scrollContainerRef}
        className="flex  overflow-y-scroll no-scrollbar scroll-smooth py-4 px-[10%]"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2  shadow-md z-20"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2  shadow-md z-20"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

