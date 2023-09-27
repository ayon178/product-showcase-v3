'use client'

import marketImage from '../../assets/market.jpg'
import { FiTool } from 'react-icons/fi'
import { GiCommercialAirplane } from 'react-icons/gi'
import { MdTrain } from 'react-icons/md'
import MarketCard from './MarketCard'
import { useEffect, useRef } from 'react'
import useOnScreen from '@/hooks/useOnScreen'
import { motion, useAnimation } from 'framer-motion'

const marketData = [
  {
    image: marketImage,
    title: 'Construction Products',
    icon: FiTool,
  },
  {
    image: marketImage,
    title: 'Aero Space Services',
    icon: GiCommercialAirplane,
  },
  {
    image: marketImage,
    title: 'Railway Insfrastructure',
    icon: MdTrain,
  },
]

const Market = () => {
  const marketSectionRef = useRef(null)
  const isMarketSectionRef = useOnScreen(marketSectionRef)
  const marketControls = useAnimation()

  useEffect(() => {
    if (isMarketSectionRef) {
      marketControls.start('visible')
    }
  }, [isMarketSectionRef, marketControls])

  return (
    <div ref={marketSectionRef} className="mt-16 container mx-auto">
      <h1 className="text-primaryText text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-primary pb-2">
        Our Market Sectors
      </h1>

      <div className="mx-auto text-center w-full px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {marketData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={marketControls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 + index * 0.4 },
              },
            }}
          >
            <MarketCard data={item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Market
