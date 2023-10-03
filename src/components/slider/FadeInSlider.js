import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { gsap } from 'gsap'
import { AnimatePresence } from 'framer-motion'
import mainImage from '../../assets/slider.JPG'
import secondImage from '../../assets/slider.png'
import thirdImage from '../../assets/market.jpg'

const images = [
  {
    image: mainImage,
    alt: 'Image 1',
    title: 'Slide One Title',
    text: 'Slide One Text',
  },
  {
    image: secondImage,
    alt: 'Image 2',
    title: 'Slide Two Title',
    text: 'Slide Two Text',
  },
  {
    image: thirdImage,
    alt: 'Image 3',
    title: 'Slide Three Title',
    text: 'Slide Three Text',
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const zoomAnimation = gsap.fromTo(
      '.slide-img',
      { scale: 1 },
      { scale: 1.2, duration: 5, ease: 'power2.inOut' } // Adjust the duration for slower zoom
    )

    return () => {
      zoomAnimation.kill()
    }
  }, [currentSlide])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images[currentSlide].image.src}
            alt={images[currentSlide].alt}
            className="object-cover w-full h-full slide-img"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="text-5xl text-primaryText font-semibold">
              {images[currentSlide].title}
            </h1>
            <p className="text-lg text-primaryText font-semibold text-center mt-3">
              {images[currentSlide].text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Slider
