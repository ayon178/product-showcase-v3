import React from 'react'
import Image from 'next/image'

// Images
import marketImageOne from '../../assets/market/market_1.png'
import marketImageTwo from '../../assets/market/market_2.png'
import marketImageThree from '../../assets/market/market_3.png'
import marketImageFour from '../../assets/market/market_4.png'
import iconOne from '../../assets/market/icon_1.png'
import iconTwo from '../../assets/market/icon_2.png'
import iconThree from '../../assets/market/icon_3.png'
import iconFour from '../../assets/market/icon_4.png'

const MarketV2 = () => {
  return (
    <div className="bg-yellow-500 my-56 h-[580px] lg:flex gap-8 justify-between container mx-auto px-8">
      <div className="py-8 mb-24 lg:mb-0 pt-20">
        <h1 className="text-primaryText text-4xl font-extrabold border-b-4 border-slate-800 pb-2 w-fit">
          Our Market Sectors
        </h1>
        <p className="mt-4 text-primaryText font-semibold">
          Since 1964, we provide the best solutions for our valuable customers
        </p>
      </div>
      <div className="-mt-[10px]">
        <div className="flex gap-4">
          <div className="relative">
            <Image
              src={marketImageOne}
              alt="Market Image"
              width={300}
              height={300}
            />
            <div className="flex gap-2 absolute bottom-4 justify-center left-0 right-0 font-medium">
              <h1>Auto Space Services &nbsp; &nbsp;|</h1>
              <Image src={iconOne} alt="Market Image" width={20} height={20} />
            </div>
          </div>
          <div className="-mt-[100px] relative">
            <Image
              src={marketImageTwo}
              alt="Market Image"
              width={400}
              height={300}
            />
            <div className="flex gap-2 absolute bottom-8 md:bottom-5 justify-center left-0 right-0 font-medium">
              <h1>Auto Space Services &nbsp; &nbsp;|</h1>
              <Image src={iconTwo} alt="Market Image" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="-mb-[10px] relative">
            <Image
              src={marketImageThree}
              alt="Market Image"
              width={400}
              height={300}
            />
            <div className="flex gap-2 absolute bottom-4 justify-center left-0 right-0 font-medium">
              <h1>Auto Space Services &nbsp; &nbsp;|</h1>
              <Image
                src={iconThree}
                alt="Market Image"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="-mb-[100px] relative">
            <Image
              src={marketImageFour}
              alt="Market Image"
              width={300}
              height={300}
            />
            <div className="flex gap-2 absolute bottom-[43%] justify-center left-0 right-0 font-medium">
              <h1>Auto Space Services &nbsp; &nbsp;|</h1>
              <Image src={iconFour} alt="Market Image" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketV2
