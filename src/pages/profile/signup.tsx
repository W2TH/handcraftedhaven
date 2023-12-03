import React, { useState, ChangeEvent, FormEvent } from 'react';
import MainLayout from '../../layouts/mainlayout';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success - You can clear the form or redirect the user
        console.log('Signup successful');
      } else {
        // Handle server-side validation error
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('An error occurred during signup');
    }
  };

  return (
    <MainLayout>
      <section className="bg-primary-100 text-center p-10">
        <h1 className="text-3xl text-primary-300">Join Handcrafted Haven as an Artisan</h1>
        <p className="text-primary-100 mt-4">Create your dedicated profile to showcase your craftsmanship.</p>
      </section>

      <section className="bg-primary-200 p-10 flex justify-center">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <div>
            <label htmlFor="name" className="text-primary-400">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
          </div>

          <div>
            <label htmlFor="email" className="text-primary-400">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
          </div>

          <div>
            <label htmlFor="password" className="text-primary-400">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
          </div>

          <div>
            <label htmlFor="description" className="text-primary-400">Description:</label>
            <textarea id="description" name="description" onChange={handleChange} className="ml-2 p-2 border border-primary-300 rounded-lg w-full" rows={4} placeholder="Describe what you sell..."></textarea>
          </div>

          <button type="submit" className="bg-primary-300 text-white px-4 py-2 hover:bg-primary-400 w-full">Sign Up</button>
        </form>
      </section>
    </MainLayout>
  );
};

export default Signup;
