'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { staggerContainer, fadeIn} from '../utils/motion';
import { TitleText, TypingText } from '../components';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amout: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Guest List" />
        <TitleText title={<>Join the Party for Free</>} />
        <motion.p variants={fadeIn('up', 'tween', 0,0.2,1)}
          className="mt-[8px] font-normal sm:text-[32px]
      text-[20px] text-center text-secondary-white"
        >
          Ready to dance the night away?
          Come join the party at our night club! With free entry for all before 10PM, you can experience the best music,
          drinks, and entertainment around. Whether you want to let loose on the dance floor, enjoy a cocktail with
          friends, or simply soak in the vibrant atmosphere, our night club has everything you need for a memorable night out.
          So why wait? Join the Guest List now to be a part of the action!
        </motion.p>
        {/* book a booth button with a white bg, and rounded and an on hover effect */}
        <motion.div variants={fadeIn('up', 'tween', 0,0.2,1)}
          className="mt-[50px] flex justify-center"
        >
          {/* make the button backgound color green */}
          <Link href="/reservation?type=Guestlist">
            <button type="button" className="bg-secondary-green rounded-[50px] px-[30px] py-[10px] font-bold text-primary-black">
              Join the Guest List
            </button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/seller.png"
          alt="Moments"
          className="w-[-90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
