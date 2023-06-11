'use client';
import {motion} from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn,staggerContainer} from '../utils/motion';

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto
    ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Afro Beats"
      textStyles="text-center"/>

      <motion.p variants={fadeIn('up', 'tween', 0,.2,1)}
      className="mt-[8px] font-normal sm:text-[32px] 
      text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white">Welcome to Afro Beats</span>, where the rhythms of the islands meet the energy of the city! 
        Step into a vibrant atmosphere where the music is loud, the drinks are flowing, 
        and the dance floor is always packed.We're <span className="font-extrabold text-white">open every day</span> except Monday,Wednesday and Sunday 
        with <span className="font-extrabold text-white">drinks deals</span> that will keep you coming back for more.
        Come experience the warmth and spirit of the islands at our Afro-Caribbean night club!
      </motion.p>

      <motion.img variants={fadeIn('up', 'tween',0.3,1)}
      src="arrow-down.svg"
      alt="explore more"
      className="w-[18px] h-[28px] object-contain mt-[28px]"/>
    </motion.div>
  </section>
);

export default About;
