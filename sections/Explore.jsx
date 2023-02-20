'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import { staggerContainer} from '../utils/motion';
import { useState } from 'react';
import { ExploreCard,  TitleText, TypingText} from '../components';
import { exploreMore } from '../constants';
// import World from './World';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return(
  <section className={`${styles.paddings}`}
  id="explore">
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    classname={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| Our Nights" textStyles="text-center"/>
      <TitleText title={<>Your Ultimate Destination for Entertainment:
      <br className="md:block hidden"/>Don't Miss Our Events!</>} textStyles="text-center"/>
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreMore.map((World, index)=>(
          <ExploreCard
          key={World.id}
          {...World}
          index={index}
          active={active}
          handleClick={setActive}/>
        ))}
      </div>
    </motion.div>
  </section>
  )
}

export default Explore;
