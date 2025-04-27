import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
        setIsScrolled(true);
      } else {
        setShowTopBar(true);
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div 
        className={`transition-all duration-300 z-40 ${
          showTopBar ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <TopBar />
      </div>
      <Header />
      <main className={`flex-grow ${isScrolled ? 'pt-16' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 