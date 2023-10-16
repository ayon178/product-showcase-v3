import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import mainSliderImage from '../../assets/Product2.png'
import gsap, { Power2 } from 'gsap'
import { motion } from 'framer-motion'

// Images
import slideOneBg from '../../assets/slider/slider_bg_1.png'
import slideTwoBg from '../../assets/slider/slider_bg_2.png'
import slideThreeBg from '../../assets/slider/slider_bg_3.png'
import slideOneProduct from '../../assets/slider/slider_1.png'
import slideTwoProduct from '../../assets/slider/slider_2.png'
import slideThreeProduct from '../../assets/slider/slider_3.png'

const RandomPositionSlider = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiper = swiperRef.current.swiper

    if (swiper) {
      // Add an event listener for slide change
      swiper.on('slideChange', () => {
        // Background animation========>
        const sliderContainer = document.querySelector(
          '.slider_container_random_slider'
        )

        const activeSlide = document.querySelector(
          `.slide-${swiper.activeIndex}`
        )

        if (activeSlide) {
          if (sliderContainer) {
            // Set the background image for the current slide
            if (swiper.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url(${slideThreeBg.src})`
            } else if (swiper.activeIndex === 1) {
              sliderContainer.style.backgroundImage = `url(${slideTwoBg.src})`
            } else if (swiper.activeIndex === 2) {
              sliderContainer.style.backgroundImage = `url(${slideOneBg.src})`
            }
          }
        }

        // Use GSAP to animate the image
        gsap.to(sliderContainer, {
          opacity: 0,
          scale: 1,
          transformOrigin: 'center center',
          duration: 0.5,
          onComplete: () => {
            // Restore the opacity after animation (optional)
            gsap.to(sliderContainer, {
              opacity: 1,
              scale: 1.07,
              duration: 0.3,
            })
          },
        })

        // Product image animation========>
        const imageElement = document.querySelectorAll('.random_slide_image')

        imageElement.forEach(element => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.8,
              transformOrigin: 'center center',
              delay: 1,
              duration: 2,
            },
            {
              opacity: 1.5,
              scale: 1,
              duration: 2,
              transformOrigin: 'center center',
              ease: Power2.easeInOut,
            }
          )
        })

        // Text animation========>
        // Run GSAP animation for the slider header text (fade down)
        gsap.fromTo(
          `.slide-header-right`,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 1, delay: 1, ease: Power2.easeInOut }
        )
        gsap.fromTo(
          `.slide-header-left`,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1, delay: 1, ease: Power2.easeInOut }
        )
        // Run GSAP animation for the slider paragraph text (fade up)
        gsap.fromTo(
          `.slide-text`,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, delay: 1, ease: Power2.easeInOut }
        )
      })
    }
  }, [slideOneBg, slideTwoBg, slideThreeBg])

  return (
    <div className="overflow_hidden w-screen">
      <Swiper
        effect="fade"
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative h-screen w-screen z-10 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="slider_container_random_slider"
        ></motion.div>
        <SwiperSlide className="slide-2">
          <div
            className={` relative h-full flex items-center justify-center px-10`}
          >
            <div className="mt-5 md:flex container mx-auto ps-5 md:ps-10 items-center justify-between">
              {/* Text container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-full md:w-[50%] mt-10 md:mt-0 flex flex-col justify-start pr-0 md:pr-10"
              >
                <h1 className="slide-header-right text-primaryText text-2xl md:text-5xl text-center md:text-left slide-header font-extrabold">
                  Thermography
                </h1>
                <p className="text-primaryText slide-text mt-10 font-medium text-center md:text-left slide-text text-[1.4rem] w-full mr-auto md:w-3/4">
                  to assess the condition of your Compressors & Electrical
                  Machineries
                </p>
                <button className="bg-primary slide-text px-4 py-2 w-36 mr-auto rounded-sm mt-4 text-primaryText text-md font-semibold">
                  Call to Order
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-full md:w-[40%] overflow-hidden random_slide_image mt-14"
              >
                <Image
                  src={slideThreeProduct}
                  alt="Royal Melbourne Hospital"
                  width="85%"
                  height="100%"
                  className="py-1 w-[85%]"
                />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-0">
          <div
            className={`relative h-full flex items-center justify-center px-10`}
          >
            <div className="mt-5 md:flex container mx-auto ps-5 md:ps-10 items-center justify-between">
              <div className="w-full mt-14 md:w-[40%] overflow-hidden random_slide_image">
                <Image
                  src={slideOneProduct}
                  alt="Royal Melbourne Hospital"
                  width="65%"
                  height="100%"
                  className="py-1 w-[65%]"
                />
              </div>
              {/* Text container */}
              <div className="w-full md:w-[50%] mt-10 md:mt-0 flex flex-col justify-start md:justify-end pr-0 md:pr-10">
                <h1 className="slide-header-left text-primaryText text-2xl md:text-5xl text-center md:text-right slide-header font-extrabold">
                  Digital Air Leak Detector
                </h1>
                <p className="slide-text text-primaryText mt-10 font-medium text-center md:text-right slide-text text-[1.4rem] w-full ml-auto md:w-3/4">
                  to accurately locate the leaks in your production system
                </p>
                <button className="bg-primary slide-text px-4 py-2 w-36 mr-auto md:mr-0 ml-auto rounded-sm mt-4 text-primaryText text-md font-semibold">
                  Call to Order
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-1">
          <div
            className={` relative h-full flex items-center justify-center px-10`}
          >
            <div className="mt-5 md:flex container mx-auto ps-5 md:ps-10 items-center justify-between">
              {/* Text container */}
              <div className="w-full md:w-[50%] mt-10 md:mt-0 flex flex-col justify-start pr-0 md:pr-10">
                <h1 className="slide-header-right text-primaryText text-2xl md:text-5xl text-center md:text-left slide-header font-extrabold">
                  Air Flow Meter
                </h1>
                <p className="text-primaryText slide-text mt-10 font-medium text-center md:text-left slide-text text-[1.4rem] w-full mr-auto md:w-3/4">
                  to quantify the Air Leaks in your compressed air flow
                </p>
                <button className="bg-primary slide-text px-4 py-2 w-36 mr-auto rounded-sm mt-4 text-primaryText text-md font-semibold">
                  Call to Order
                </button>
              </div>

              <div className="w-full md:w-[45%] overflow-hidden random_slide_image">
                <Image
                  src={slideTwoProduct}
                  alt="Royal Melbourne Hospital"
                  width="85%"
                  height="100%"
                  className="py-1 w-[85%]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default RandomPositionSlider
