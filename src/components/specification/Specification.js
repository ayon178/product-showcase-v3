const Specification = () => {
  return (
    <>
      <div className="container mx-auto mt-16 specification_bg py-10">
        <h1 className="text-primaryText text-xl md:text-2xl text-center font-semibold w-fit mx-auto border-b-2 border-primary pb-2">
          Product Specification
        </h1>
        <div className="md:flex justify-between items-center">
          <div>
            <h1>Image here</h1>
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
            <div className="specification_bg_inner h-64 flex items-center justify-center mt-10">
              <h1 className="text-primaryText text-xl md:text-2xl font-bold">
                Free installation &<br /> checking session
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto md:flex justify-between items-center">
        <div>
          <h1>Image here</h1>
        </div>
        <div>
          <h1>Image here</h1>
        </div>
      </div>
    </>
  )
}

export default Specification
