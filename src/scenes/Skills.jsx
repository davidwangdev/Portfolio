import LineGradient from "../components/LineGradient";
import {motion} from 'framer-motion';




export default function Skills() {

  return (
    <section id="skills" className='pt-10 pb-24 ml-24'>
      {/* Header section */}
      <div className='flex justify-between gap-16 mt-12'>
        <motion.div
          className='w-1/3'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{ 
          hidden: { opacity: 0, x: -50},
          visible: {opacity: 1, x: 0},
        }}>
          <p className='font-semibold text-4xl mb-5'>
            <span className='text-red'>Skills / Technologies</span>
          </p>
          <LineGradient width='w-full' />
        </motion.div>
      </div>
        

      {/* Skills */}
      <div className='flex flex-row mt-10 gap-x-24 mr-24'>
        <p className='mt-10 mb-10 text-white p-10 border-green-500 rounded-full border-8'>
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
            <img src="/SQL.svg" className='w-28 h-24 m-2 p-3' />
            SQL
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white p-10 border-green-500 rounded-full border-8'>
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
            <img src="/Excel.png" className='w-28 h-24 m-2 p-3' />
            Excel
          </motion.div>
        </p>
              <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full'>
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
            <img src="/Tableau.jpg" className='w-28 h-24 rounded-full m-2 p-3' />
            Tableau
          </motion.div>
        </p>
              <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full'>
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
            <img src="/Python.png" className='w-28 h-24 rounded-full m-2 p-3' />
            Python
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full border-x-8'>
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
          <img src="/PowerBI.webp" className='w-28 h-24 m-2 p-3' />
            Power BI
          </motion.div>
        </p>
      </div>

      <div className='flex flex-row mt-10 gap-x-24 mr-24'>
        <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full border-x-8'>
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
            <img src="/R.jpg" className='w-28 h-24 rounded-lg m-2 p-3' />
            R
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full border-x-8'>
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
            <img src="/Git.png" className='w-28 h-24 m-2 p-3' />
            Git
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full border-x-8'>
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
            <img src="/Java.jpg" className='w-28 h-24 rounded-full m-2 p-3' />
            Java
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full border-x-8'>
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
            <img src="/Word.png" className='w-28 h-24 m-2 p-3' />
            Word
          </motion.div>
        </p>
        <p className='mt-10 mb-10 text-white border-8 p-10 border-green-500 rounded-full border-x-8  '>
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
            <img src="/PowerPoint.webp" className='w-28 h-24 m-2 p-3' />
            PowerPoint
          </motion.div>
        </p>
      </div>

      
    </section>
  )
}