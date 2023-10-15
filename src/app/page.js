'use client'

import Benefit from '@/components/benifit/Benefit'
import Brand from '@/components/branding/Brand'
import Cta from '@/components/cta/Cta'
import Market from '@/components/market/Market'
import MarketV2 from '@/components/market/MarketV2'
import Navbar from '@/components/shared/Navbar'
import FocusedSlider from '@/components/slider/FocusedSlider'
import RandomPositionSlider from '@/components/slider/RandomPositionSlider'
import SwiperAutoSlider from '@/components/slider/Slider'
import Specification from '@/components/specification/Specification'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loadingStartTime, setLoadingStartTime] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const token =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('product_v3_token')
      : null

  useEffect(() => {
    const navbar = document.querySelector('#navbar')
    const text = document.querySelectorAll('.text_color')
    const timeline = gsap.timeline({ paused: true })

    timeline.to(navbar, {
      // backgroundColor: 'red',
      backdropFilter: 'blur(10px)',
      duration: 0.1,
      ease: 'power3.inOut',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      marginTop: 0,
      paddingBottom: '1rem',
      paddingTop: '1rem',
      width: '100vw !important',
    })

    timeline.to(text, {
      color: '#fff',
      ease: 'power3.inOut',
    })

    setLoadingStartTime(performance.now())
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

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

  useEffect(() => {
    if (!isLoading) {
      const loadingEndTime = performance.now()
      const loadingTime = loadingEndTime - loadingStartTime
      console.log(`Loading time: ${loadingTime} ms`)
    }
  }, [isLoading, loadingStartTime])

  if (!token) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
  }

  return (
    <>
      <Navbar />
      {/* <SwiperAutoSlider /> */}
      {/* <FocusedSlider /> */}
      <RandomPositionSlider />
      <main className="px-4 md:px-0">
        {/* <Market /> */}
        <MarketV2 />
        <Benefit />
        <Specification />
        <Brand />
        <Cta />
      </main>
    </>
  )
}
