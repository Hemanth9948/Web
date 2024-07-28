// src/components/UserPage.jsx
import React, { useEffect } from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';
import Services from './Services';
import Testimonials from './Testimonials';
import scrollreveal from 'scrollreveal';
import ProfilePage  from './Profile'; // Ensure this path and import are correct

const UserPage = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ProfilePage />
      <Footer />
    </div>
  );
};

export default UserPage;
