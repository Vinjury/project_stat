import React from 'react'

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <>
    <nav class="flex items-center w-full justify-between flex-wrap bg-black-400 p-6 h-24">
    <div className='text-sm lg:flex-grow w-full'>
      <Link href='/' className='"block mt-4 lg:inline-block lg:mt-0 text-teal-20 mr-4'>
        <p className='logo_text'>Home Page</p>
      </Link>

      <Link href='/background' className='"block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'>
        <p className='logo_text'>Backgound</p>
      </Link>

      <Link href='/Statistics' className='"block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'>
        <p className='logo_text'>Statistics</p>
      </Link>

      <Link href='/' className='"block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'>
        <p className='logo_text'>Contact Us</p>
      </Link>
      </div>
      </nav>
    </>
  )
}

export default Nav