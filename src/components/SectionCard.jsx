import React from 'react'
import Card from './Card'

export default function SectionCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 mx-2'>
        <Card url='/image/image 2.png' btn='shop now' title='Sepatu nike' />
        <Card url='/image/image 2.png' btn='shop now' title='Sepatu nike' />
        <Card url='/image/image 2.png' btn='shop now' title='Sepatu nike' />
    </div>
  )
}
