import Image from 'next/image'

const BrandCard = ({ data }) => {
  return (
    <div className="shadow border border-gray-200 rounded-lg py-6 px-4">
      <div className="flex items-center justify-center">
        {/* <data.icon className="text-4xl text-primaryText" /> */}
        <Image src={data.icon} alt="icon" width={50} height={50} />
      </div>
      <h1
        className="text-center text-xl font-semibold text-primaryText mt-4"
        dangerouslySetInnerHTML={{ __html: data.title }}
      ></h1>
    </div>
  )
}

export default BrandCard
