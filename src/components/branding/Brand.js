'use client'

import {
  BsEmojiSmileFill,
  BsFillPostcardFill,
  BsBatteryFull,
} from 'react-icons/bs'
import { FaHandHoldingHeart } from 'react-icons/fa'
import BrandCard from './BrandCard'

import Image from 'next/image'
import img1 from '../../assets/market.jpg'
import brandOne from '../../assets/branding/brand_one.png'
import brandTwo from '../../assets/branding/brand_two.png'
import brandThree from '../../assets/branding/brand_three.png'
import brandFour from '../../assets/branding/brand_four.png'

import iconOne from '../../assets/branding/icon_1.png'
import iconTwo from '../../assets/branding/icon_2.png'
import iconThree from '../../assets/branding/icon_3.png'
import iconFour from '../../assets/branding/icon_4.png'
import iconFive from '../../assets/branding/icon_5.png'

const brandData = [
  {
    title: `Equipment<br/>Maintenance`,

    icon: iconOne,
  },
  {
    title: `Fire<br/>Safety`,
    icon: iconTwo,
  },
  {
    title: `Energy<br/>Conservation`,
    icon: iconThree,
  },
  {
    title: `Condition Based<br/>Maintenance`,
    icon: iconFour,
  },
  {
    title: `Immidiate<br/>Detection`,
    icon: iconFive,
  },
]

const imageData = [
  { image: brandOne },
  { image: brandTwo },
  { image: brandThree },
  { image: brandFour },
]

const Brand = () => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-primaryText text-xl md:text-2xl text-center font-semibold w-fit mx-auto border-b-2 border-primary pb-2">
        Our Branding
      </h1>
      <h1 className="text-center mt-8 mb-4 text-2xl font-semibold text-primaryText">
        Why Choose Us?
      </h1>
      <h1 className="text-2xl font-semibold text-primaryText bg-primary px-8 rounded-sm py-1 w-fit mx-auto">
        Cause We Are Qualified
      </h1>
      <p className="mx-auto mt-4 text-center w-full sm:w-[80%] md:w-[60%] lg:w-[50%] text-slate-800">
        &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
        debitis dolore laudantium, aut, consectetur in sit veniam molestiae
        libero velit amet ipsam perferendis aliquid fugit! Quasi impedit facilis
        minima laudantium?&quot;
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-10">
        {brandData.map((data, index) => (
          <BrandCard key={index} data={data} />
        ))}
      </div>

      {/* Images */}
      <div className="left_top_right_bottom_radius_big grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-10 py-5 bg-primary mt-8">
        {imageData.map((data, index) => (
          <Image
            key={index}
            src={data.image}
            alt="image"
            width={100}
            height={100}
            layout="responsive"
            className={`${
              index === 0 ? 'rounded-tl-lg' : index === 3 ? 'rounded-br-lg' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Brand
