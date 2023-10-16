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
    <div className="real_shadow bg-yellow-300 my-56 h-[480px] lg:flex gap-8 justify-evenly container mx-auto px-8">
      <div className="py-8 mb-24 lg:mb-0 pt-20 w-[50%]">
        <h1 className="text-primaryText text-4xl font-extrabold border-b-4 border-slate-800 pb-2 w-fit">
          Suitable for Multi Industrial Uses
        </h1>
        <p className="mt-4 text-primaryText font-medium text-justify">
          Our equipments are ideal for Textie Industry, Cement Industry, Steel
          Industry, Automotive Industry & Power Plants / Chemical Plants. These
          equipments are also usable in Shopping Malls, Residential &
          Hospitality Sector, Software Parks etc.
        </p>
        <p className="mt-4 text-primaryText font-medium text-justify">
          These equipments are vital instruments for maintenance of machineries,
          energy conservation & fire safety.
        </p>
      </div>
      <div className="-mt-[10px] w-[50%]">
        <div className="flex gap-4">
          <div className="relative">
            <Image
              src={marketImageOne}
              alt="Market Image"
              width={250}
              height={250}
              className="real_shadow"
            />
            <div className="flex gap-2 absolute bottom-4 justify-center left-0 right-0 font-medium">
              <h1 className="text-sm font-semibold">
                Cement Industry &nbsp; &nbsp;|
              </h1>
              <Image src={iconOne} alt="Market Image" width={20} height={20} />
            </div>
          </div>
          <div className="-mt-[100px] relative">
            <Image
              src={marketImageTwo}
              alt="Market Image"
              width={300}
              height={200}
              className="real_shadow"
            />
            <div className="flex gap-2 absolute bottom-[18%] justify-center left-0 right-0 font-medium">
              <h1 className="text-sm font-semibold">
                Textile Industry &nbsp; &nbsp;|
              </h1>
              <Image src={iconTwo} alt="Market Image" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="-mb-[10px] relative">
            <Image
              src={marketImageThree}
              alt="Market Image"
              width={300}
              height={200}
              className="real_shadow"
            />
            <div className="flex gap-2 absolute bottom-4 justify-center left-0 right-0 font-medium">
              <h1 className="text-sm font-semibold">
                Steel Industry &nbsp; &nbsp;|
              </h1>
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
              width={250}
              height={250}
              className="real_shadow"
            />
            <div className="flex gap-2 absolute bottom-[40%] justify-center left-0 right-0 font-medium">
              <h1 className="text-sm font-semibold">
                Automotive Industry &nbsp; &nbsp;|
              </h1>
              <Image src={iconFour} alt="Market Image" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketV2
