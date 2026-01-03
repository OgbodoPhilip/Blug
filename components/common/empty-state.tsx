import { LucideIcon } from 'lucide-react'
import React from 'react'

type Props = {}

export default function EmptyState ({message,icon:Icon}:{message:string,icon:LucideIcon}) {
  return (
    <div className='empty-state'>
        <Icon className='size-10 text-primary'/>
        <p>{message}</p>

 </div>
  )
}