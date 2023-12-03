import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-primary-300 text-white">
    <nav className="flex justify-between items-center p-4">
      <div className="text-white">Handcrafted Haven</div>
      <div>
        <Link href="/" className="mx-2 hover:text-primary-200">Home</Link>
        <Link href="/profile/signup" className="mx-2 hover:text-primary-200">Sign Up</Link>
        <Link href="/profile/login" className="mx-2 hover:text-primary-200">Login</Link>
        <Link href="/product/products" className="mx-2 hover:text-primary-200">Products</Link>
        <Link href="/product/add-product" className="mx-2 hover:text-primary-200">Add Products</Link>
      </div>
    </nav>
  </header>
);

export default Header;
