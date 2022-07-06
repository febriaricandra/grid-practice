import React from 'react'
import Card from './Card'

export default function CardNews() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 mx-2 my-2'>
        <Card url='/image/image 4.png' />
        <Card url='/image/image 4.png' />
        <Card url='/image/image 4.png' />
    </div>
  )
}
