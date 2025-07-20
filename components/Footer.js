import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center text-sm md:text-base">
          © {currentYear} BitLinks - All rights reserved!
        </p>

        <div className="flex gap-6 text-gray-400 text-sm md:text-base">
          <Link href="/" className="hover:underline">@Home</Link>
          <Link href="/about" className="hover:underline">@About</Link>
          <Link href="/contact" className="hover:underline">@Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
