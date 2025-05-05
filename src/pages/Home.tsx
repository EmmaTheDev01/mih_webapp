import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import Partners from '../components/home/Partners';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GalleryPreview />
      <Partners/>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
} 