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

const iconData = [
  {
    icon: iconOne,
    title: 'Thermal Imaging',
  },
  {
    icon: iconTwo,
    title: 'Manually Usable',
  },
  {
    icon: iconThree,
    title: 'Status Check',
  },
  {
    icon: iconFour,
    title: 'Easy Maintenance',
  },
]

const Specification = () => {
  return (
    <>
      <div className="container mx-auto mt-16 specification_bg py-10">
        <h1 className="text-primaryText text-xl md:text-2xl text-center font-semibold w-fit mx-auto border-b-2 border-primary pb-2">
          Product Specification
        </h1>
        <div className="md:flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={productOne}
              alt="product one"
              width={500}
              height={500}
              className="mx-auto"
            />
            <div className="-ml-28">
              {iconData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#FEE03B] py-2 pr-10 left_top_right_bottom_radius_big my-2"
                >
                  <Image src={data.icon} alt="icon" width={20} height={20} />{' '}
                  <h1 className=" font-semibold ">
                    &nbsp;&nbsp;| &nbsp;&nbsp;{data.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-primaryText text-2xl md:text-3xl text-center md:text-right mt-5 mb-3 font-semibold">
              IR Scanning / Thermography
            </h1>
            <p className="text-center md:text-right text-slate-800">
              Thermal images diagnose the Electrical Machinery
              <br />
              and their current conditions
            </p>
            <Image
              src={imageOne}
              alt="image one"
              width={500}
              height={500}
              className="mx-auto mt-4"
            />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto md:flex justify-between items-center mt-8">
        <div className="flex items-center relative">
          <Image
            src={productThree}
            alt="product one"
            width={500}
            height={500}
            className="mx-auto"
          />
          <div className="absolute top-0 right-[-12%]">
            <h1 className="text-xl font-semibold text-primaryText mb-2">
              Air Leak Prevention
            </h1>
            <p className="text-slate-700">
              Air flow calculation will detect any <br /> Leakage or Damage in
              Compressed air
            </p>
          </div>
          <div className="-ml-28">
            {iconData.map((data, index) => (
              <div
                key={index}
                className="flex items-center bg-[#FEE03B] py-2 pr-10 left_top_right_bottom_radius_big my-2"
              >
                <Image src={data.icon} alt="icon" width={20} height={20} />{' '}
                <h1 className=" font-semibold ">
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
          <div className="absolute top-0 right-[-12%]">
            <h1 className="text-xl font-semibold text-primaryText mb-2">
              Air Flow Meter
            </h1>
            <p className="text-slate-700">
              Air flow calculation will detect any <br /> Leakage or Damage in
              Compressed air
            </p>
          </div>
          <div className="-ml-28">
            {iconData.map((data, index) => (
              <div
                key={index}
                className="flex items-center bg-[#FEE03B] py-2 pr-10 left_top_right_bottom_radius_big my-2"
              >
                <Image src={data.icon} alt="icon" width={20} height={20} />{' '}
                <h1 className=" font-semibold ">
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
