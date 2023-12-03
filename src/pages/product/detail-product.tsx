import React, { useState, ChangeEvent, FormEvent } from 'react';
import MainLayout from '../../layouts/mainlayout';
import Image from 'next/image';

const ProductPage: React.FC = () => {
  const [reviewData, setReviewData] = useState({
    content: '',
    rating: '',
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        console.log('Review submitted successfully');
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('An error occurred while submitting the review');
    }
  };

  return (
    <MainLayout>
    {/* Product Showcase Section */}
    <section className="bg-primary-100 text-center p-10">
      <h1 className="text-3xl text-primary-300">Our Exclusive Products</h1>
      <p className="text-primary-100 mt-4">Browse our selection of handcrafted items.</p>
    </section>

    {/* Individual Product Detail */}
    <section className="bg-primary-200 p-10 flex justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl text-primary-400 mb-2">Product Name</h2>
        <Image src="/vercel.svg" alt="Product" width={500} height={300} />
        <p className="text-primary-400">Product Description</p>
        <p className="text-primary-400">Price: $XX.XX</p>
        <div className="rating">★★★★☆</div>
        <div className="reviews">
          <h3 className="text-primary-400 mt-4">Customer Reviews</h3>
          {/* Placeholder for reviews */}
          <p className="text-primary-400">Great product! - John Doe</p>
          {/* More reviews */}
        </div>
        <div className="seller-info">
          <h3 className="text-primary-400 mt-4">Seller Information</h3>
          <p className="text-primary-400">Name: Handcrafted Haven Artisan</p>
          {/* More seller info */}
        </div>

        {/* Review Form */}
        <div className="review-form mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="content" className="text-primary-400">Leave a Review</label>
              <textarea id="content" name="content" className="w-full p-2 border border-primary-300 rounded-lg" placeholder="Your review here" onChange={handleChange} rows={4}></textarea>
            </div>
            <div>
              <label htmlFor="rating" className="text-primary-400">Rating:</label>
              <select id="rating" name="rating"  onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg">
                <option value="5">★★★★★</option>
                <option value="4">★★★★☆</option>
                <option value="3">★★★☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="1">★☆☆☆☆</option>
              </select>
            </div>
            <button type="submit" className="bg-primary-300 text-white px-4 py-2 hover:bg-primary-400 w-full">Submit Review</button>
          </form>
        </div>
      </div>
      {/* Repeat above block for more products */}
    </section>
  </MainLayout>
  );
};

export default ProductPage;
