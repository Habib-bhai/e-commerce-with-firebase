import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Banner from '@/components/Banner'

export default function Page() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Banner />
      <SignIn />
    </div>
  )
}
