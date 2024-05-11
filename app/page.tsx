'use client'

import { CarouselDemo } from '@/components/Carousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex justify-center items-center h-screen'>
      <CarouselDemo />
    </main>
  )
}
