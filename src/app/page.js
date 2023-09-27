'use client'

import Navbar from '@/components/shared/Navbar'
import SwiperAutoSlider from '@/components/slider/Slider'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const navbar = document.querySelector('#navbar')
    const timeline = gsap.timeline({ paused: true })

    timeline.to(navbar, {
      backgroundColor: 'red',
    })

    const scrollListener = () => {
      if (window.scrollY === 0) {
        timeline.reverse()
      } else {
        timeline.play()
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <SwiperAutoSlider />
      </main>
    </>
  )
}
