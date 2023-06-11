'use client';

import React from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <div className="relative z-10">
      <Navbar />
    </div>
    <div className="relative z-0">
      <Hero />
    </div>
    <div className="relative z-0"> {/* Add z-10 class */}
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative"> {/* Keep the relative class */}
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    {/* <WhatsNew />
      <Insights /> */}
    <div className="relative"> {/* Keep the relative class */}
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
    <Footer />
  </div>
  );

export default Page;

