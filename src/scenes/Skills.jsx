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
      <div className='md:flex md:justify-between md:gap-16 mt-12'>
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
            <span className='text-red'>My Skills / Technologies</span>
          </p>
          <LineGradient width='w-full' />
        </motion.div>
      </div>
        

      {/* Skills */}
      <div className='flex flex-col md:flex-row mt-20 gap-20 mr-24'>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/HTML.png" className='w-24 h-24' />
            HTML
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/CSS.png" className='w-24 h-24' />
            CSS
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/JS.png" className='w-24 h-24' />
            JavaScript
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/Python.png" className='w-24 h-24' />
            Python
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
          <img src="/Node.png" className='w-24 h-24' />
            Node
          </motion.div>
        </p>
      </div>

      <div className='flex flex-col md:flex-row mt-20 gap-20 mr-24'>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/Next.png" className='w-24 h-24' />
            Next
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/Git.png" className='w-24 h-24' />
            Git
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/MongoDB.png" className='w-24 h-24' />
            MongoDB
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/React.png" className='w-24 h-24' />
            React
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full border-x-8'>
          <motion.div
            className='text-center text-lg'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img src="/Express.png" className='w-24 h-24' />
            Express
          </motion.div>
        </p>
      </div>

      
    </section>
  )
}