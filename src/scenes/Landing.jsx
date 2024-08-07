import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Landing({setSelectedPage}) {

  return (
    <section id="home" className='flex justify-between items-center h-full gap-16 py-10'>
      <div className='order-2 flex justify-center basis-3/5 z-10 mt-32'>
      </div>
        {/* Main Section */}

        <div className='z-30 mt-12'>
          {/* Headings */}
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 1 }}
           variants={{ 
            hidden: { opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
           }}
          >
            <p className='text-6xl z-10 text-start mb-10'>
              Hi, I'm David.
            </p>
          </motion.div>

          <motion.div
            className='flex mt-5 justify-start'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{ 
            hidden: { opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}>
            <AnchorLink 
              className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500'
            >
                Welcome to my portfolio.
            </AnchorLink>
            <AnchorLink 
              className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
              onClick={() => setSelectedPage('contact')}
              href="#contact"
            >
              <div className='bg-deep-blue hover:text-red transition duration-500
              w-full h-full flex items-center justify-center px-10'>
                Contact Me
              </div>
            </AnchorLink>
          </motion.div>

        </div>
    </section>
  )
}