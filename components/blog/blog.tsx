import React from 'react';
import { Typography, Card, CardBody } from '@material-tailwind/react';
import {contents} from '../../constants';

interface ContentCardPropsType {
  img: string;
  title: string;
  desc: string;
}

const ContentCard = ({ img, title, desc }: ContentCardPropsType) => (
  <Card
    className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
    color="transparent"
    placeholder={false}
  >
    <img
      src={img}
      alt="bg"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/70" />
    <CardBody className="relative flex flex-col justify-end"
      placeholder={false}
    >
      <Typography variant="h4" color="white"
        placeholder={false}
      >
        {title}
      </Typography>
      <Typography
        variant="paragraph"
        color="white"
        className="my-2 font-normal"
        placeholder={false}
      >
        {desc}
      </Typography>
    </CardBody>
  </Card>
  );

export const BlogPage = () => (
  <section className="container mx-auto px-8 py-10 lg:py-28">
    <Typography
      variant="h2"
      color="blue-gray"
      className="!text-2xl !leading-snug lg:!text-3xl"
      placeholder={false}
    >
      Good girl with bad habits
    </Typography>
    <Typography
      variant="lead"
      className="mt-2 max-w-lg !font-normal !text-gray-500"
      placeholder={false}
    >
      Meet our favorite paradox: a good girl with a few mischievous quirks.
      She's the heart of the party, spreading joy with every laugh and dance
      move. Let us hear what she has to say about how to have a splendid night out.
      Remember to Join us for a night of carefree fun, where even the good ones let
      loose and make unforgettable memories.
    </Typography>

    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
      {contents.map(({ img, title, desc }) => (
        <ContentCard key={title} img={img} title={title} desc={desc} />
        ))}
    </div>
  </section>
  );

export default BlogPage;
