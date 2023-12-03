import React from 'react';
import MainLayout from '../../layouts/mainlayout';
import Link from 'next/link';

const ProductsPage: React.FC = () => (
  <MainLayout>
    {/* Product Showcase Section */}
    <section className="bg-primary-100 text-center p-10">
      <h1 className="text-3xl text-primary-300">Our Exclusive Products</h1>
      <p className="text-primary-100 mt-4">Browse our selection of handcrafted items.</p>
    </section>

    {/* Individual Products */}
    <section className="bg-primary-200 p-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Placeholder for product cards */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl text-primary-400 mb-2">Product Name</h2>
          <p className="text-primary-400">Product Description</p>
          <Link href="/product/detail-product" className="bg-primary-300 text-white px-4 py-2 mt-4 hover:bg-primary-400 block">View More</Link>
        </div>
        {/* Repeat above block for more products */}
      </div>
    </section>
  </MainLayout>
);

export default ProductsPage;
