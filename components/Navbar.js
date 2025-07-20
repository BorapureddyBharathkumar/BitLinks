'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  useAuth,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleShortenClick = () => {
    if (isSignedIn) {
      router.push('/shorten');
    } else {
      router.push('/signin');
    }
  };

  return (
    <nav className='bg-purple-700 text-white'>
      <div className='flex items-center justify-between px-4 py-3 md:px-8'>
        <div className='flex items-center space-x-2'>
          <img className='w-10 h-10' src='/logo.png' alt='BitLinks logo' />
          <Link href='/' className='text-xl font-bold'>BitLinks</Link>
        </div>

        <div className='md:hidden'>
          <button
            className='focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              {menuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        <ul className='hidden md:flex space-x-6 items-center'>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <li><button onClick={handleShortenClick}>Shorten</button></li>
          <Link href='/generatedUrls'><li>Generated URLs</li></Link>
          <Link href='/contact'><li>Contact</li></Link>

          <li className='flex gap-2 items-center'>
            <SignedIn>
              <SignOutButton>
                <button className='bg-purple-500 px-4 py-2 rounded-lg font-bold'>Sign Out</button>
              </SignOutButton>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className='bg-purple-500 px-4 py-2 rounded-lg font-bold'>Sign In</button>
              </SignInButton>
              <Link href='/github'>
                <button className='bg-purple-500 px-4 py-2 rounded-lg font-bold'>GitHub</button>
              </Link>
            </SignedOut>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden px-4 pb-4'>
          <ul className='space-y-3'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <li><button onClick={handleShortenClick}>Shorten</button></li>
            <Link href='/generatedUrls'><li>Generated URLs</li></Link>
            <Link href='/contact'><li>Contact</li></Link>

            <SignedIn>
              <SignOutButton>
                <button className='bg-purple-500 w-full py-2 rounded-lg font-bold'>Sign Out</button>
              </SignOutButton>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className='bg-purple-500 w-full py-2 rounded-lg font-bold'>Sign In</button>
              </SignInButton>
              <Link href='/github'>
                <button className='bg-purple-500 w-full py-2 rounded-lg font-bold'>GitHub</button>
              </Link>
            </SignedOut>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
