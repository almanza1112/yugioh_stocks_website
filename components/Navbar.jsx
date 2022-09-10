import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className='fixed w-full h-20 z-[100] px-4 md:px-8 transparent'>
        <div className='max-w-screen-2xl flex justify-between items-center w-full h-full'>
            <Image src='' alt=''/>

            <input className='w-full' placeholder='Search by name or set code'/>
            <div>
                <ul className='hidden md:flex items-center'>
                    <Link href='/'>
                        <li>Watchlist</li>
                    </Link>
                    <Link href='/'>
                        <li className='whitespace-nowrap overflow-hidden'>Sign Up</li>
                    </Link>
                    <Link href='/'>
                          <li className='whitespace-nowrap overflow-hidden rounded-lg p-2 bg-neutral-200 text-gray-600'>Log In</li>
                    </Link>
                </ul>
            </div>

              <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>

          <div className={nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70' : ''}>
              <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-teal-600 p-10 ease-in duration-500' : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='' alt=''/>
                          <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div> 
                    <div className='border-b border-white my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Something will go here</p>
                    </div>
                </div>

                <div className=''>
                    <ul>
                        <Link href='/'>
                            <li>Home</li>
                        </Link>
                        <Link href='/'>
                            <li>Watchlist</li>
                        </Link>
                        <Link href='/'>
                              <li>Log In</li>
                        </Link>
                        <Link href='/'>
                            <li className='rounded-lg p-2 bg-neutral-200 text-gray-600 w-fit'>Sign Up</li>
                        </Link>
                          
                    </ul>
                </div>
            </div>
        </div>

    </nav>
)
}

export default Navbar