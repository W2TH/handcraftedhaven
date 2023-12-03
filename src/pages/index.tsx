import React from 'react';
import MainLayout from '../layouts/mainlayout';
import Link from 'next/link';

const Home: React.FC = () => (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary-100 text-center p-10">
        <h1 className="text-3xl text-primary-300">Welcome to Handcrafted Haven - Where Craftsmanship Meets Elegance</h1>
        <p className="text-primary-100 mt-4">Discover the unique beauty of handcrafted products made with passion.</p>
        <Link href="/product/products" className="bg-primary-300 text-white px-4 py-2 mt-4 hover:bg-primary-400">Explore Our Collection</Link>
      </section>

      {/* Featured Products Section */}
      <section className="bg-primary-200 p-10">
        <h2 className="text-2xl text-primary-400 mb-4">Featured Products</h2>
        {/* Product Cards Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for individual product cards */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl text-primary-400 mb-2">Product Name</h2>
          <p className="text-primary-400">Product Description</p>
          <Link href="/product/detail-product" className="bg-primary-300 text-white px-4 py-2 mt-4 hover:bg-primary-400 block">View More</Link>
          {/* Repeat above block for more products */}
        </div>
        </div>
      </section>
    </MainLayout>
  );
  
export default Home;
