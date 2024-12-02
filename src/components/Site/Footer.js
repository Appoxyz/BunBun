import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='py-4 w-full flex  items-center justify-center px-4 h-3'>
      {navLinks.map((navLink) => (<Link href={navLink.href} className='text-[#000000] opacity-[50%] font-bold mx-4'>{navLink.name}</Link>))}
    </div>

  )
}

export default Footer

const navLinks = [
  { name: "y7 Studios. All rights reserved", href: "" },
]