import React from 'react'

export default function Hero() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 sm:grid-rows-2 md:grid-rows-2 my-12 mx-4 gap-2'>
        <div className="w-full row-span-2"><img className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100' src="/image/image 1.png" alt="" /></div>
        <div className="w-full col-span-2"><img className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100' src="/image/image 5.png" alt="" /></div>
        <div className="w-full "><img className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100' src="/image/image 3.png" alt="" /></div>
        <div className="w-full "><img className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100' src="/image/image 2.png" alt="" /></div>
    </section>
  )
}
