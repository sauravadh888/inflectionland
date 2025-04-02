import React from 'react';
import Header from '../components/Header';
import Hero from '../sections/Hero';
import AvatarCluster from '../components/AvatarCluster';
import VisualSection from '../sections/VisualSection';
import Footer from '../components/Footer';
import WaitlistForm from '../components/WaitlistForm';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AvatarCluster />
      <VisualSection />
      <Footer />
      <WaitlistForm />

    </>
  );
};

export default HomePage;
