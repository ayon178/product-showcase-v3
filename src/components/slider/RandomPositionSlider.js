import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import mainSliderImage from '../../assets/Product2.png'
import gsap, { Power2 } from 'gsap'

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

        // Use GSAP to animate the image
        gsap.to(sliderContainer, {
          opacity: 0.2,
          scale: 1.2,
          duration: 0.5,
          onComplete: () => {
            // Restore the opacity after animation (optional)
            gsap.to(sliderContainer, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
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
              scale: 0.5,
              transformOrigin: 'center center',
              delay: 0.5,
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
          { opacity: 1, x: 0, duration: 1, delay: 0.7, ease: Power2.easeInOut }
        )
        gsap.fromTo(
          `.slide-header-left`,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1, delay: 0.7, ease: Power2.easeInOut }
        )
        // Run GSAP animation for the slider paragraph text (fade up)
        gsap.fromTo(
          `.slide-text`,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, delay: 1.3, ease: Power2.easeInOut }
        )
      })
    }
  }, [])

  return (
    <div className="overflow-hidden w-screen">
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
        className="mySwiper  relative h-screen w-screen z-10"
      >
        <div className="slider_container_random_slider"></div>
        <SwiperSlide>
          <div className={`relative h-full flex items-center justify-center`}>
            <div className="mt-5 md:flex container mx-auto ps-5 md:ps-10 items-center justify-between">
              <div className="w-full md:w-[50%] overflow-hidden random_slide_image">
                <Image
                  src={mainSliderImage}
                  alt="Royal Melbourne Hospital"
                  width="85%"
                  height="100%"
                  className="py-1 w-[85%]"
                />
              </div>
              {/* Text container */}
              <div className="w-full md:w-[50%] mt-10 md:mt-0 flex flex-col justify-start md:justify-end pr-0 md:pr-10">
                <h1 className="slide-header-left text-white text-2xl md:text-5xl text-center md:text-right slide-header font-bold">
                  Text Writeup
                </h1>
                <p className="slide-text text-white mt-10 font-semibold text-center md:text-right slide-text text-[.9rem] w-full ml-auto md:w-3/4">
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
        <SwiperSlide>
          <div className={` relative h-full flex items-center justify-center`}>
            <div className="mt-5 md:flex container mx-auto ps-5 md:ps-10 items-center justify-between">
              {/* Text container */}
              <div className="w-full md:w-[50%] mt-10 md:mt-0 flex flex-col justify-start pr-0 md:pr-10">
                <h1 className="slide-header-right text-white text-2xl md:text-5xl text-center md:text-left slide-header font-bold">
                  Text Writeup
                </h1>
                <p className="text-white slide-text mt-10 font-semibold text-center md:text-left slide-text text-[.9rem] w-full mr-auto md:w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium nemo nihil nobis eveniet ullam, earum dolorem
                  corporis! Quod unde debitis voluptate cumque cum atque
                  deleniti, voluptas laboriosam ipsam et aut!
                </p>
                <button className="bg-primary slide-text px-4 py-2 w-36 mr-auto rounded-sm mt-4 text-primaryText text-sm font-semibold">
                  Call to Order
                </button>
              </div>

              <div className="w-full md:w-[50%] overflow-hidden random_slide_image">
                <Image
                  src={mainSliderImage}
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
