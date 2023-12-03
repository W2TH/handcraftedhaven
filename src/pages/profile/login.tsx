import React from 'react';
import MainLayout from '../../layouts/mainlayout';

const Login: React.FC = () => (
  <MainLayout>
    {/* Login Section */}
    <section className="bg-primary-100 text-center p-10">
      <h1 className="text-3xl text-primary-300">Artisan Login</h1>
      <p className="text-primary-100 mt-4">Access your Handcrafted Haven artisan account.</p>
    </section>

    {/* Login Form */}
    <section className="bg-primary-200 p-10 flex justify-center">
      <form className="space-y-4 w-full max-w-md">
        <div>
          <label htmlFor="email" className="text-primary-400">Email:</label>
          <input type="email" id="email" name="email" className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
        </div>

        <div>
          <label htmlFor="password" className="text-primary-400">Password:</label>
          <input type="password" id="password" name="password" className="ml-2 p-2 border border-primary-300 rounded-lg w-full" />
        </div>

        <button type="submit" className="bg-primary-300 text-white px-4 py-2 hover:bg-primary-400 w-full">Log In</button>
      </form>
    </section>
  </MainLayout>
);

export default Login;
