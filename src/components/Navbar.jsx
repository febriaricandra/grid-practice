import React from 'react'
import {GoSearch} from 'react-icons/go'
import {BsCart3} from 'react-icons/bs'
import {VscAccount} from 'react-icons/vsc'

export default function Navbar() {
    return (
        <header className='flex justify-between max-w-[1000px] mx-auto my-4'>
            <div className="logo">
                <h1 className='font-bold text-2xl'>Lore's Shop</h1>
            </div>
            <div className="hidden sm:block md:block">
                <ul className='flex'>
                    <li className='ml-4 font-medium'>
                        <a href="#">Home</a>
                    </li>
                    <li className='ml-4 font-medium'>
                        <a href="#">About</a>
                    </li>
                    <li className='ml-4 font-medium'>
                        <a href="#">Blog</a>
                    </li>
                    <li className='ml-4 font-medium'>
                        <a href="#">Shop</a>
                    </li>
                    <li className='ml-4 font-medium'>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex">
                <GoSearch className='ml-2' size={20} />
                <BsCart3 className='ml-2' size={20} />
                <VscAccount className='ml-2' size={20} />
            </div>
        </header>
    )
}
