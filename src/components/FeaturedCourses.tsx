'use client'
import React from 'react'
import CardData from '../data/music_courses.json'
import { BackgroundGradient } from "../components/ui/background-gradient";

interface Cdata {
    id: number,
    title:string,
    slug:string,
    description:string,
    price:number,
    instructor:string,
    isFeatured:boolean,
  }

function FeaturedCourses() {

  const featuredCourses = CardData.courses.filter((course:Cdata)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900 '>
      <div className='text-center'>
        <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED COURSES</h2>
        <p className='m-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
          Learn With the Best
        </p>
      </div>
      
      <div className='mt-10 mx-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        {featuredCourses.map((course:Cdata)=>(
          <div key={course.id} className='m-2'>
            <BackgroundGradient className="rounded-[22px] h-60 p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div className='text-center'>
              <h2 className='text-xl'>{course.title}</h2>
              <p className='text-sm text-gray-200 py-2'>{course.description}</p>
              <button className='mt-2 px-2.5 py-1.5 bg-white text-black text-base rounded-lg'>Learn More</button>
            </div>
            </BackgroundGradient>
          </div>
        ))}
        </div>
      </div>

      <div className='flex justify-center py-15'>
        <button className='px-4 py-2 bg-white text-black text-base rounded-lg'>View All Courses</button>
      </div>
    </div>
  )
}

export default FeaturedCourses
