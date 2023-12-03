// pages/index.tsx

import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-retro-300 text-white">
        <nav className="flex justify-between items-center p-4">
          <div className="text-retor-300">Handcrafted Haven</div>
          <div>
            <a href="#" className="mx-2 hover:text-retro-200">Home</a>
            <a href="#" className="mx-2 hover:text-retro-200">Products</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-retro-100 text-center p-10">
        <h1 className="text-3xl text-retro-300">Welcome to Handcrafted Haven - Where Craftsmanship Meets Elegance</h1>
        <p className="text-retro-100 mt-4">Discover the unique beauty of handcrafted products made with passion.</p>
        <button className="bg-retor-200 text-white px-4 py-2 mt-4 hover:bg-retor-300">Explore Our Collection</button>
      </section>

      {/* Featured Products Section */}
      <section className="bg-retor-300 p-10">
        <h2 className="text-2xl text-retro-400 mb-4">Featured Products</h2>
        {/* Product Cards Placeholder */}
      </section>

      
      {/* Footer Section */}
      <footer className="bg-retro-400 text-white p-4">
        <div className="text-center">
          <a href="#" className="mx-2 hover:text-retro-200">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-retro-200">Terms of Service</a>
          {/* Social Media Icons Placeholder */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
