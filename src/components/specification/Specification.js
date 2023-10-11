import Image from 'next/image'

// Images
import productOne from '../../assets/spec/product_one.png'
import productTwo from '../../assets/spec/product_two.png'
import productThree from '../../assets/spec/product_three.png'
import imageOne from '../../assets/spec/image_one.png'

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
              <h1 className="bg-[#FEE03B] font-semibold py-2 pr-10 left_top_right_bottom_radius_big">
                ✬ | Thermal Imaging
              </h1>
              <h1 className="bg-[#FEE03B] font-semibold my-3 py-2 left_top_right_bottom_radius_big">
                ✬ | Thermal Imaging
              </h1>
              <h1 className="bg-[#FEE03B] font-semibold my-3 pb-2 left_top_right_bottom_radius_big">
                ✬ | Thermal Imaging
              </h1>
              <h1 className="bg-[#FEE03B] font-semibold py-2 left_top_right_bottom_radius_big">
                ✬ | Thermal Imaging
              </h1>
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
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={productThree}
            alt="product one"
            width={500}
            height={500}
            className="mx-auto"
          />
          <div className="-ml-28">
            <h1 className="bg-[#FEE03B] font-semibold py-2 pr-10 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
            <h1 className="bg-[#FEE03B] font-semibold my-3 py-2 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
            <h1 className="bg-[#FEE03B] font-semibold my-3 pb-2 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
            <h1 className="bg-[#FEE03B] font-semibold py-2 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <Image
            src={productTwo}
            alt="product one"
            width={500}
            height={500}
            className="mx-auto"
          />
          <div className="-ml-28">
            <h1 className="bg-[#FEE03B] font-semibold py-2 pr-10 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
            <h1 className="bg-[#FEE03B] font-semibold my-3 py-2 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
            <h1 className="bg-[#FEE03B] font-semibold my-3 pb-2 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
            <h1 className="bg-[#FEE03B] font-semibold py-2 left_top_right_bottom_radius_big">
              ✬ | Thermal Imaging
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specification
