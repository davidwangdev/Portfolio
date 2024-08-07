import LineGradient from "../components/LineGradient";
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className='pt-10'>
      {/* Header section */}
      <div className='flex justify-center mt-16'>
        <motion.div
          className='w-full max-w-lg text-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className='font-semibold text-4xl mb-6'>
            <span className='text-red'> Skills / Technologies </span>
          </p>
          <LineGradient width='w-full' />
        </motion.div>
      </div>
      {/* Skills */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-12 mt-12'>
        {['SQL', 'Excel', 'Tableau', 'Python', 'Power BI', 'Googling', 'PyTorch', 'R', 'Pandas', 'PowerPoint'].map((skill, index) => (
          <motion.div
            key={skill}
            className='flex flex-col items-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 + index * 0.1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={`/${skill}.png`} className='w-20 h-20 mb-2' alt={`${skill} logo`} />
            <p className='text-center text-lg'>{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
