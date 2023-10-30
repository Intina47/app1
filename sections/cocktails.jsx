// import React from 'react';
// import {motion} from 'framer-motion';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Cocktails } from '../constants'; // Import your cocktail data
// import CocktailCard from '../components/Cocktail'; // Import the correct component
// import '../styles/globals.css';
// import {TitleText, TypingText} from '../components';
// import { staggerContainer} from '../utils/motion';
// import styles from '../styles';

// const CocktailSection = () => (
//   <section className="cocktail-section">
//     <div className="container">
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{once: false, amount: 0.25}}
//         className={`${styles.innerWidth} mx-auto flex flex-col`}
//       >
//         <TypingText title="| Our Cocktails" textStyles="text-center" />
//         <TitleText title={(
//           <>Share the Magic:
//             <br className="md:block hidden" />Gather Friends and Toast to Fun!
//           </>
// )} textStyles="text-center"
//         />

//         {/* <h2 className="section-title text-white">Cocktails</h2> */}
//         <div className="overflow-x-auto">
//           <div className="flex space-x-4">
//             {Cocktails.map((cocktail, index) => (
//               <div key={index}> {/* Apply rounded border */}
//                 <CocktailCard cocktail={cocktail} />
//               </div>
//           ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default CocktailSection;
