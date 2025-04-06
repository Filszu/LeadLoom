'use client'
import { Button } from '@/components/ui/button'
import { on } from 'events'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

type Props = {
    onClickFunction?: () => void
}

const GoogleBtn = (props: Props) => {
  return (
    <Button 
                    className={`w-full p-6`}
                    variant={"outline"}
                    onClick={props.onClickFunction}
                >
                    <span className="flex items-center justify-center gap-1 text-lg ">
                        <FaGoogle />

                        Sign up with Google
                        {/* {btnText} */}
                    </span>
                </Button>
  )
}

export default GoogleBtn