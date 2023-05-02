import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {register, trigger, formState: { errors }} = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact me!">

      <div className="flex gap-16 mt-5 text-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='mt-28'>
            <p className="font-semibold text-4xl mb-12">
              <span className="text-yellow">Contact Me</span>
              <div className='mt-12'>
                <LineGradient />
              </div>
            </p>
          </div>

          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/9f21407f972fd2496324f3840e15fc58"
            method="POST"
          >
            <label htmlFor="name" className='flex mb-2'>Name:</label>
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md mb-6"
              type="text"
              name="name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <label htmlFor="name" className='flex mb-2'>Email:</label>      
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md mb-6"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, //email regex validation
              })}
            />
            {errors.email && (
              <p className="text-red">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <label htmlFor="name" className='flex mb-2'>Message:</label>
            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md mb-6"
              name="message"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
              
            />
            {errors.message && (
              <p className="text-red">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              Send Message!
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
