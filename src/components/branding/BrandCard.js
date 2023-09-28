const BrandCard = ({ data }) => {
  return (
    <div className="shadow border border-gray-200 rounded-lg py-6 px-4">
      <div className="flex items-center justify-center">
        <data.icon className="text-4xl text-primaryText" />
      </div>
      <h1 className="text-center text-xl font-semibold text-primaryText mt-4">
        {data.title}
      </h1>
      <p className="text-center text-slate-800 mt-2">{data.description}</p>
    </div>
  )
}

export default BrandCard
