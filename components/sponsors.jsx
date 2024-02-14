import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import InstagramEmbed from './Insta/InstagramEmbed';

const SponsorSection = () => (
  <section id="sponsor" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.h2
        variants={fadeIn('up', 'tween', 0, 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Our Community Commitment</span>
      </motion.h2>

      <motion.p
        variants={fadeIn('up', 'tween', 0.1, 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At Afrobeats, we go beyond the beats to actively engage with and contribute to the vibrant community around us. Our commitment to education, cultural enrichment, and inclusivity is reflected in our various initiatives and partnerships.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Join us in celebrating diversity, empowerment, and the spirit of unity. Our nightclub, located in the heart of Dundee, is not just a venue; it's a hub for cultural exchange, vibrant celebrations, and meaningful community connections.
      </motion.p>

      {/* Instagram Feed Section */}
      <div className="mt-8">
        <motion.h3
          variants={fadeIn('up', 'tween', 0.3, 0.2, 1)}
          className="font-normal sm:text-[24px] text-[16px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Meet Our Community</span>
          {/* instagram embeds with an x overlow to allow user to scroll throught all the post / embeds */}
          <div className="flex flex-col autoflow-x-scroll">
            <InstagramEmbed />
          </div>
        </motion.h3>
      </div>
    </motion.div>
  </section>
);

export default SponsorSection;
