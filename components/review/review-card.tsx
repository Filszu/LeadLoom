import { Star, DollarSign, Trophy } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import * as Flags from 'country-flag-icons/react/3x2'

interface ReviewCardProps {
  name: string
  avatar: string
  rating: number
  joinedDate: string
  totalWithdraw: number
  completedChallenges: number
  country: string
  content: string
}

export function ReviewCard({
  name,
  avatar,
  rating,
  joinedDate,
  totalWithdraw,
  completedChallenges,
  country,
  content
}: ReviewCardProps) {
  const CountryFlag = Flags[country as keyof typeof Flags]

  return (
    <Card className="w-[300px] flex-shrink-0 mx-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold">{name}</h3>
              <CountryFlag className="w-5 h-5 ml-2" />
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="mt-4 text-gray-600 italic">
          "{content}"
        </blockquote>
        <div className="mt-4 space-y-2 text-sm">
          <p>Joined: {joinedDate}</p>
          <p className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            Total Withdraw: ${totalWithdraw.toLocaleString()}
          </p>
          <p className="flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            Completed Challenges: {completedChallenges}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

