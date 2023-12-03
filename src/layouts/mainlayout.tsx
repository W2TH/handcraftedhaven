import React, { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

type MainLayoutProps = {
    children: ReactNode; 
  };
  
  const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
  
  export default MainLayout;
