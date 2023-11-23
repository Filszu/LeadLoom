
import Link from 'next/link'
import React from 'react'

interface Props {
    children: React.ReactNode
    active?: boolean
    url?: string
}

const NavBtn = (props: Props) => {
    
    return props.active ? 
    <Link href={props.url??""} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">{props.children}</Link>
    : 
    <Link href={props.url??""}  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{props.children}</Link>

}

export default NavBtn