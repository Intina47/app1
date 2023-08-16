'use client';

import React from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <div className="relative z-10 position-sticky">
      <Navbar />
    </div>
    <div className="relative z-0">
      <Hero />
    </div>
    <div className="relative z-0">
      <About />
      <div className="gradient-03 z-10" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
  );

export default Page;

   // eslint-disable-next-line no-lone-blocks
   { /* <div className="relative">
      <div className="gradient-04 z-0" />
        <Feedback />
    </div> */ }
