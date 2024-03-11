import React from 'react'
import { Progress } from '../ui/progress'

interface Props {
    earnings: number,
    treshold: number,
    currency: string
    
}


const EarningsChart = (props: Props) => {
    const progress = (props.earnings / props.treshold) * 100
  return (
    <div>
      <Progress value={progress} />
    </div>
  )
}

export default EarningsChart