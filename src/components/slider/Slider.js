'use client'

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import gsap, { Power2 } from 'gsap'
// import slideOne from '../../assets/slider_1.JPG'
// import slideTwo from '../../assets/slider_2.JPG'
// import slideThree from '../../assets/slider_3.JPG'
import mainSliderImage from '../../assets/Product2.png'
import Image from 'next/image'

export default function SwiperAutoSlider() {
  const cardData = [
    {
      image: mainSliderImage,
    },
    {
      image: mainSliderImage,
    },
    {
      image: mainSliderImage,
    },
  ]

  const swiperRef = useRef(null)

  useEffect(() => {
    // Initialize Swiper
    const swiper = swiperRef.current.swiper

    // Add an event listener for slide change
    swiper.on('slideChange', () => {
      // Get the active slide index
      const activeSlideIndex = swiper.activeIndex

      // Run GSAP animation for the image (zoom in)
      gsap.fromTo(
        `.slide-${activeSlideIndex}`,
        {
          scale: 0,
          transformOrigin: 'top right',
          translateX: 100,
          translateY: -100,
          opacity: 0,
        },
        {
          scale: 1,
          transformOrigin: 'bottom left',
          translateX: 0,
          translateY: 0,
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        }
      )

      // Run GSAP animation for the slider header text (fade down)
      gsap.fromTo(
        `.slide-${activeSlideIndex} .slide-header`,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, delay: 0.7, ease: Power2.easeInOut }
      )
      // Run GSAP animation for the slider paragraph text (fade up)
      gsap.fromTo(
        `.slide-${activeSlideIndex} .slide-text`,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 1.3, ease: Power2.easeInOut }
      )
    })
  }, [])

  return (
    <Swiper
      effect="fade"
      ref={swiperRef}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="mySwiper slider_container z-10"
    >
      {cardData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={`slide-${index} relative h-full flex items-center justify-center`}
          >
            <div className="mt-5 md:flex container mx-auto ps-5 md:ps-10 items-center justify-between">
              <div className="w-full md:w-[50%] overflow-hidden">
                <Image
                  src={item.image}
                  alt="Royal Melbourne Hospital"
                  width="85%"
                  height="100%"
                  className="py-1 w-[85%]"
                />
              </div>
              {/* Text container */}
              <div className="w-full md:w-[50%] mt-10 md:mt-0 flex flex-col justify-start md:justify-end pr-0 md:pr-10">
                <h1 className="text-white text-2xl md:text-5xl text-center md:text-right slide-header font-bold">
                  Text Writeup
                </h1>
                <p className="text-white mt-10 font-semibold text-center md:text-right slide-text text-[.9rem] w-full ml-auto md:w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium nemo nihil nobis eveniet ullam, earum dolorem
                  corporis! Quod unde debitis voluptate cumque cum atque
                  deleniti, voluptas laboriosam ipsam et aut!
                </p>
                <button className="bg-primary slide-text px-4 py-2 w-36 mr-auto md:mr-0 ml-auto rounded-sm mt-4 text-primaryText text-sm font-semibold">
                  Call to Order
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
