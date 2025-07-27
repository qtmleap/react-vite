'use client'

import { Loader2 } from 'lucide-react'

export function Fallback() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50'>
      <Loader2 className='h-12 w-12 text-primary animate-spin' />
    </div>
  )
}
