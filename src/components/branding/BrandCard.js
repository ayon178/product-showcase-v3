import Image from 'next/image'

const BrandCard = ({ data }) => {
  return (
    <div className=" border border-gray-200 rounded-lg shadow-lg py-6 px-4 w-48">
      <div className="flex items-center justify-center">
        {/* <data.icon className="text-4xl text-primaryText" /> */}
        <Image src={data.icon} alt="icon" width={30} height={30} />
      </div>
      <h1
        className="text-center text-lg font-semibold text-primaryText mt-4"
        dangerouslySetInnerHTML={{ __html: data.title }}
      ></h1>
    </div>
  )
}

export default BrandCard
