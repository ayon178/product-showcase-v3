'use client'

import React from 'react'
import { IoMdCall } from 'react-icons/io'

const Cta = () => {
  return (
    <div className="container-fluid mx-auto cta_bg flex items-start px-20 py-32 justify-center flex-col h-screen">
      <h1 className="text-3xl font-bold">
        To learn more about our solutions,
        <br /> you are free to call us for details
      </h1>
      <p className="text-xl font-semibold mt-4 mb-2">
        For questions or make a booking, call at this number.
      </p>
      <div className="flex gap-2 items-center mt-4 bg-yellow-400 px-3 py-2 left_top_right_bottom_radius">
        <IoMdCall className="text-2xl text-textPrimary" />
        <p className=" font-semibold text-xl">01000000000</p>
      </div>
    </div>
  )
}

export default Cta
