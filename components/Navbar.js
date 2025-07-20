'use client';
import React from 'react';
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

  const handleShortenClick = () => {
    if (isSignedIn) {
      router.push('/shorten');
    } else {
      router.push('/signin');
    }
  };

  return (
    <nav className='flex justify-between px-3 items-center text-white h-18 bg-purple-700'>
      <div className=" font-bold text-lg flex justify-items-center items-center ">
        <img className='w-14' src="/logo.png" alt="" />
        <Link href="/">BitLinks</Link>
      </div>

      <ul className='flex justify-center gap-6 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <li>
          <button onClick={handleShortenClick}>Shorten</button>
        </li>
          
          <Link href="/generatedUrls"><li>GeneratedUrls</li></Link>
          
        <Link href="/contact"><li>Contact</li></Link>

        <li className=' flex gap-3 items-center'>
          <SignedIn>
            <SignOutButton>
              <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 ">
                Sign Out
              </button>
            </SignOutButton>

            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1">
                Sign In
              </button>
            </SignInButton>

            {/* Show GitHub button only when signed out */}
            <Link href="/github">
              <button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>
                GitHub
              </button>
            </Link>
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
