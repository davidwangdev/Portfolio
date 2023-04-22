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
            <span className='text-red'>Technologies</span>
          </p>
          <LineGradient width='w-full' />
        </motion.div>
      </div>
        

      {/* Skills */}
      <div className='flex flex-row mt-20 gap-20 mr-24 transition ease-in delay-150 duration-500'>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/HTML.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            HTML
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/CSS.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            CSS
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/JS.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            JavaScript
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/Python.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            Python
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/Node.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            Node
          </div>
        </p>
      </div>
      <div className='flex flex-row mt-20 gap-20 mr-24'>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/Next.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            Next
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/Git.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            Git
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/MongoDB.png" className='w-24 h-24' />
          <div className='text-center text-lg'>
            MongoDB
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/React.png" className='w-24 h-24'/>
          <div className='text-center text-lg'>
            React
          </div>
        </p>
        <p className='mt-10 mb-10 text-white border-2 p-10 border-cyan-500 rounded-full'>
          <img src="/Express.png" className='w-24 h-24'/>
          <div className='text-center text-lg'>
            Express
          </div>
        </p>
      </div>

      
    </section>
  )
}