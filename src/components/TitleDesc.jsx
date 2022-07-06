import React from 'react'

export default function TitleDesc({title, descriptions}) {
  return (
    <div className='container mx-auto my-12 text-center'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='font-medium opacity-75 w-1/2 mx-auto my-0'>{descriptions}</p>
    </div>
  )
}
