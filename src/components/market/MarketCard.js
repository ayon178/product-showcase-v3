import Image from 'next/image'

const MarketCard = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto bg-white">
      <Image
        className="rounded-md"
        src={data.image}
        alt={data.title}
        width={400}
        height={300}
      />
      <div className="flex items-center justify-center left_top_right_bottom_radius bg-primary w-60 py-2 -mt-6">
        <h1 className="text-[1rem] font-semibold">{data.title}</h1>
        <h1 className="text-[1.5rem] mx-2">|</h1>
        <data.icon className="text-2xl text-primaryText" />
      </div>
    </div>
  )
}

export default MarketCard
