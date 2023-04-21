import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from 'framer-motion';

export default function Skills() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  {/* Skills to include:
  React, JS, HTML, CSS, Tailwind, Next, Node, MongoDB, Git, Express
  */}

  return (
    <section id="skills" className='pt-10 pb-24 ml-24'>
      {/* Header section */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{ 
          hidden: { opacity: 0, x: -50},
          visible: {opacity: 1, x: 0},
        }}>
          <p className='font-semibold text-4xl mb-5'>
            <span className='text-red'>Skills</span>
          </p>
          <LineGradient width='w-1/3' />
        </motion.div>

        <div className='mt-16 md:mt-0 mr-24'>
          {isAboveMediumScreens ? (
            <>
              <p className='mt-10 mb-7 text-white rounded-full border-2 p-6 border-cyan-500'>
                <img src="/react.png" width={50} />
                <div className='text-center text-lg'>
                  React
                </div>
              </p>
              <p className='mt-10 mb-7 text-white rounded-full border-2 p-6 border-cyan-500'>
                <img src="/react.png" width={50} />
                <div className='text-center text-lg'>
                  React
                </div>
              </p>
              <p className='mt-10 mb-7 text-white rounded-full border-2 p-6 border-cyan-500'>
                <img src="/react.png" width={50} />
                <div className='text-center text-lg'>
                  React
                </div>
              </p>
              <p className='mt-10 mb-7 text-white rounded-full border-2 p-6 border-cyan-500'>
                <img src="/react.png" width={50} />
                <div className='text-center text-lg'>
                  React
                </div>
              </p>
            </>

            
          )
          :
          (
            <div>
            </div>
          )
          }
        </div>
      </div>

      {/* Skills */}

      
    </section>
  )
}