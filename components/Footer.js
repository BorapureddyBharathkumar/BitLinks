import React from 'react'
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white flex items-center justify-around px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} BitLinks - All rights reserved!</p>
        <div className="flex gap-4 text-gray-400">
          <Link href="/" className="hover:underline">
           @Home
          </Link>
          <Link href="/about" className="hover:underline">
            @About
          </Link>
          <Link href="/contact" className="hover:underline">
            @Contact
          </Link>
        </div>
    </footer>
  )
}

export default Footer