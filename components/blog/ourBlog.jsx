import React from 'react';
import { contents } from '../../constants';

const ContentCard = ({ img, title, desc }) => (
  <div className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl bg-transparent">
    <img
      src={img}
      alt="bg"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative flex flex-col justify-end p-6">
      <h2 className="text-white text-3xl font-semibold">
        {title}
      </h2>
      <p className="text-white font-normal my-2 leading-relaxed font-sans">
        {desc}
      </p>
    </div>
  </div>
);

const BlogPage = () => (
  <section className="container mx-auto px-8 py-10 lg:py-28">
    <h1 className="block text-blue-gray-900 text-2xl leading-snug lg:text-4xl font-sans font-semibold">
      Good girl with bad habits
    </h1>
    <p className="max-w-lg font-normal text-gray-500 mt-2 font-xl">
      Meet our favorite paradox: a good girl with a few mischievous quirks. She's
      the heart of the party, spreading joy with every laugh and dance move. Let us
      hear what she has to say about how to have a splendid night out. Remember to
      join us for a night of carefree fun, where even the good ones let loose and
      make unforgettable memories.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
      {contents.map(({ img, title, desc }) => (
        <ContentCard key={title} img={img} title={title} desc={desc} />
      ))}
    </div>
  </section>
);

export default BlogPage;

