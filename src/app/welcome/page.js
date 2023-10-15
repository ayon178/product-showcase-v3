'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInDown, fadeInUp } from '@/animation/animation'

const page = () => {
  const handleRedirect = url => {
    if (typeof window !== undefined) {
      if (url === 'theme1') {
        window.open('/', '_blank')
      } else if (url === 'theme2') {
        window.open('https://product-showcase-demo2.vercel.app/', '_blank')
      }
    }
  }
  return (
    <div className="container-fluid bg-white h-screen w-screen relative">
      <div className="flex items-center justify-center flex-col h-full">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          className="text-4xl font-bold text-primaryText"
        >
          Welcome to demo outlook{' '}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 1 },
            },
          }}
          className="text-xl text-primaryText mt-6 mb-3"
        >
          Product Showcasing Site for Mill Maintenance Equipment
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 1.5 },
            },
          }}
          className="flex gap-4"
        >
          <button
            onClick={() => handleRedirect('theme1')}
            className="bg-primaryText hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded"
          >
            View Theme 1
          </button>
          <button
            onClick={() => handleRedirect('theme2')}
            className="bg-primaryText hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded"
          >
            View Theme 2
          </button>
        </motion.div>
      </div>
      <p className="absolute bottom-0 left-0 right-0 text-center bg-primaryText text-white py-2 font-bold">
        This is a demo outlook. It is subject to changes depending on feedbacks
        & review updates.
      </p>
    </div>
  )
}

export default page
