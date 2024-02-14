import React from 'react';
import BlogPage from '../components/blog/ourBlog';
import '../styles/globals.css';
import { Footer, Navbar } from '../components';

const AfroblogPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <BlogPage />
    <Footer />
  </div>
        );

export default AfroblogPage;
