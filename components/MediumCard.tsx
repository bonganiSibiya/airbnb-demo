import Image from 'next/image'
import React from 'react'
import { CardData } from '../pages'



function MediumCard({img, title}: CardData) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image className='rounded-xl' src={img} layout="fill" />
      </div>
      <h2 className='text-2xl mt-3'>{title}</h2>
    </div>
  )
}

export default MediumCard