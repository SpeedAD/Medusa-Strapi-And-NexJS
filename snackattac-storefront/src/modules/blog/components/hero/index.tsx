import Image from "next/image"
import hero from "../../../../../public/hero.webp"
import { motion } from "framer-motion"
import {DogCanvas} from "../../../canvas"

const Hero = () => {
  return (
    <div className="h-[60vh] w-full">
      <DogCanvas />
    </div>
  )
}

export default Hero
