import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-primary-400 text-white p-4">
    <div className="text-center">
      <Link href="#" className="mx-2 hover:text-primary-200">Privacy Policy</Link>
      <Link href="#" className="mx-2 hover:text-primary-200">Terms of Service</Link>
      {/* Social Media Icons Placeholder */}
    </div>
    <div className="text-center mt-4">
      {/* Update the year and company name accordingly */}
      <p>© 2023 BYUI Group 11. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
