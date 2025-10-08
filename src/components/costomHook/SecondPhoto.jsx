import React from 'react'
import { motion } from "framer-motion";
export default function SecondPhoto() {
  return (
    <>
    <motion.img
            className="h-64 w-48 sm:h-72 sm:w-56 md:h-96 md:w-80 rounded-3xl shadow-2xl shadow-black border  border-blue-700 relative z-10 object-cover"
            src="/secondPhoto.jpg"
            alt="photo"
            loading='lazy'
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        
    </>
  )
}
