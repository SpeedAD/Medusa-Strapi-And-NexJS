"use client"

import { motion } from "framer-motion"
import { EarthCanvas } from "../../canvas"
import { SectionWrapper } from "@modules/hoc"
import { slideIn } from "utils/motion"

const AnimatedTemplate = () => {
  return (
    <div className="xl:flex-col flex-col-reverse flex gap-10 overflow-hidden">
        <div className="flex flex-col items-center text-center mb-16">
        <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Order from around the globe
          </p>
        </div>
        <motion.div
        variants={slideIn('right', "tween", 0.2, 0.1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
        >
            <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(AnimatedTemplate, "animated")
