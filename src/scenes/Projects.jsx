import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ name, title, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue rounded-lg`
  const projectTitle = name.split(' ').join('-').toLowerCase();
  
  return (
    <motion.div variants={projectVariant} className='relative w-full md:w-[45%] mb-8'>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        <div className={overlayStyles}>
          <p className='text-2xl'>{name}</p>
          <p className='mt-7'>{title}</p>
        </div>
        <img src={`/${projectTitle}.png`} alt={title} className='w-full h-64 object-cover rounded-lg' />
      </a>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className='pt-24 pb-24 bg-deep-blue'>
      {/* Headings */}
      <motion.div
        className='w-1/2 mx-auto text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <div className='mb-4 font-semibold text-4xl text-red'>
          Projects
        </div>
        <LineGradient width='w-full' />
      </motion.div>

      <motion.div
        className='flex flex-wrap justify-center mt-36 mb-36'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {/* Project 1 */}
        <Project name="Project 1" title={`"Who Wants To Be A Millionaire" Quiz App`} link="https://whowants.vercel.app" />
        {/* Project 2 */}
        <Project name="Project 2" title="Hospital Automation Website" link="https://ncbauto.fly.dev" />
      </motion.div>

    </section>
  )
}
