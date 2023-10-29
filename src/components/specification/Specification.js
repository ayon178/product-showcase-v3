import Image from 'next/image'

// Images
import productOne from '../../assets/spec/product_one.png'
import productTwo from '../../assets/spec/product_two.png'
import productThree from '../../assets/spec/product_three.png'
import imageOne from '../../assets/spec/image_one.png'

import iconOne from '../../assets/spec/icon_1.png'
import iconTwo from '../../assets/spec/icon_2.png'
import iconThree from '../../assets/spec/icon_3.png'
import iconFour from '../../assets/spec/icon_4.png'
import VideoPlayer from '../shared/VideoPlayer'

const topPartData = [
  {
    icon: iconOne,
    title: 'Thermal Imaging ',
  },
  {
    icon: iconTwo,
    title: 'Electrical Trouble Shooting',
  },
  {
    icon: iconThree,
    title: 'HVAC Application',
  },
  {
    icon: iconFour,
    title: 'Complete CBM',
  },
]

const leftPartData = [
  {
    icon: iconOne,
    title: 'Locating Micro Leaks',
  },
  {
    icon: iconTwo,
    title: 'ULTRASONIC Technology',
  },
  {
    icon: iconThree,
    title: 'Immediate Detection',
  },
  {
    icon: iconFour,
    title: 'Precise Location of Air Leak',
  },
]

const iconData = [
  {
    icon: iconOne,
    title: 'Data Logging Facility ',
  },
  {
    icon: iconTwo,
    title: 'Various Line Sizes',
  },
  {
    icon: iconThree,
    title: 'Leak Quantity ',
  },
  {
    icon: iconFour,
    title: 'Air Sensor',
  },
]

const Specification = () => {
  return (
    <>
      <h1 className="text-primaryText mt-16 mb-5 text-xl md:text-2xl text-center font-semibold w-fit mx-auto border-b-2 border-primary pb-2">
        Product Specification
      </h1>
      <div className="container mx-auto  specification_bg py-10">
        <div className="md:flex justify-between items-center">
          <div className="flex w-[50%] items-center relative">
            <Image
              src={productOne}
              alt="product one"
              width={500}
              height={500}
              className="mx-auto "
            />
            <div className="absolute top-[5rem] right-[-5%]">
              <h1 className="text-xl font-semibold text-primaryText mb-2">
                IR Scanning / Thermography
              </h1>
              {/* <p className="text-slate-700">
                Thermal images diagnose the Electrical Machinery
                <br />
                and their current conditions
              </p> */}
            </div>
            <div className="-ml-32">
              {topPartData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#FEE03B] py-2 pr-10 left_top_right_bottom_radius_big my-2"
                >
                  <Image src={data.icon} alt="icon" width={20} height={20} />{' '}
                  <h1 className=" font-semibold no_wrap">
                    &nbsp;&nbsp;| &nbsp;&nbsp;{data.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[50%] -mr-20">
            <h1 className="text-center text-xl font-semibold text-primaryText mb-2">
              View inspection video
            </h1>
            <VideoPlayer videoId="Zhs1DwQB85c" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto md:flex justify-between items-center mt-8 secondaryBg">
        <div className="flex items-center relative">
          <Image
            src={productThree}
            alt="product one"
            width={500}
            height={500}
            className="mx-auto"
          />
          <div className="absolute top-[18%] right-[5%]">
            <h1 className="text-xl font-semibold text-primaryText mb-2">
              Digital Air Leak Detector
            </h1>
            {/* <p className="text-slate-700">
              Air flow calculation will detect any <br /> Leakage or Damage in
              Compressed air
            </p> */}
          </div>
          <div className="-ml-28">
            {leftPartData.map((data, index) => (
              <div
                key={index}
                className="flex items-center bg-[#FEE03B] py-2 pr-10 left_top_right_bottom_radius_big my-2"
              >
                <Image src={data.icon} alt="icon" width={20} height={20} />{' '}
                <h1 className=" font-semibold no_wrap">
                  &nbsp;&nbsp;| &nbsp;&nbsp;{data.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center relative">
          <Image
            src={productTwo}
            alt="product one"
            width={500}
            height={500}
            className="mx-auto"
          />
          <div className="absolute top-[18%] right-[14%]">
            <h1 className="text-xl font-semibold text-primaryText mb-2">
              Air Flow Meter
            </h1>
            {/* <p className="text-slate-700">
              Air flow calculation will detect any <br /> Leakage or Damage in
              Compressed air
            </p> */}
          </div>
          <div className="-ml-28">
            {iconData.map((data, index) => (
              <div
                key={index}
                className="flex items-center bg-[#FEE03B] py-2 pr-10 left_top_right_bottom_radius_big my-2"
              >
                <Image src={data.icon} alt="icon" width={20} height={20} />{' '}
                <h1 className=" font-semibold no_wrap">
                  &nbsp;&nbsp;| &nbsp;&nbsp;{data.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Specification
