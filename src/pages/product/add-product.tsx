import MainLayout from '../../layouts/mainlayout';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const AddProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    // productImage: '', // Handle image separately if needed
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log('Product added successfully');
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('An error occurred while adding the product');
    }
  };

  return (
    <MainLayout>
    {/* Add Product Section */}
    <section className="bg-primary-100 text-center p-10">
      <h1 className="text-3xl text-primary-300">Add Your Handcrafted Product</h1>
      <p className="text-primary-100 mt-4">Showcase your unique creations to the world.</p>
    </section>

    {/* Add Product Form */}
    <section className="bg-primary-200 p-10 flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label htmlFor="productName" className="text-primary-400">Product Name:</label>
          <input type="text" id="productName" name="productName" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
        </div>

        <div>
          <label htmlFor="productDescription" className="text-primary-400">Description:</label>
          <textarea id="productDescription" name="productDescription" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" rows={4} placeholder="Describe your product..."></textarea>
        </div>

        <div>
          <label htmlFor="productPrice" className="text-primary-400">Price:</label>
          <input type="number" id="productPrice" name="productPrice" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" placeholder="0.00" />
        </div>

        <div>
          <label htmlFor="productImage" className="text-primary-400">Product Image:</label>
          <input type="file" id="productImage" name="productImage" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
        </div>

        <button type="submit" className="bg-primary-300 text-white px-4 py-2 hover:bg-primary-400 w-full">Add Product</button>
      </form>
    </section>
  </MainLayout>
  );
};

export default AddProduct;