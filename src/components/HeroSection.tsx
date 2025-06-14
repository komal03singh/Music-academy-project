import React from 'react'
import {cn} from '@/lib/utils'
import {Spotlight} from '@/components/ui/Spotlight'
import { Button } from '@/components/ui/moving-border'

function HeroSection() {
  return (
    <div className='relative flex flex-col justify-center items-center h-screen w-full'>
        <Spotlight
            className="absolute -top-20 lg:-top-40 left-0 md:-top-5 md:left-60"
            fill="white"
        />

        <div className='flex flex-col justify-center items-center w-full gap-4'>
            <h1 className='text-4xl text-center mb-4 md:text-7xl lg:text-7xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>Master the art of music </h1>
            <p className='text-sm px-6 md:text-base lg:text-base md:w-1/2 lg:w-1/3 text-center text-gray-200/80'>Dive into our comprehensive course and tranform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
        </div>
        
        <div className='mt-10'>
          <Button
          href="/courses"
          borderRadius="2rem"
          className="bg-white dark:bg-black/70 text-black dark:text-white border-neutral-200 dark:border-neutral-900 "
          >
            Explore Courses
          </Button>
        </div>
      
    </div>
  )
}

export default HeroSection
