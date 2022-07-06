import React from 'react'

export default function Card({title,url,btn}) {
  return (
    <div>
        <img src={url} alt="" />
        <h1 className='font-bold text-xl'>{title}</h1>
        <a className='font-medium' href="/">{btn}</a>
    </div>
  )
}
