'use client'

import Link from 'next/link'
import React, { forwardRef } from 'react'
import { IoMdClose } from 'react-icons/io'

const MobileMenu = forwardRef((props, ref) => {
  return (
    <div
      className="h-screen bg-primaryText w-screen absolute top-0 left-0 z-20 md:hidden"
      ref={ref}
    >
      <ul className="flex flex-col items-center gap-6 text-whiteText w-full h-full justify-center">
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Home
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            About
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Categories
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Services
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Services
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/#" className="text-2xl">
            {' '}
            Contact
          </Link>
        </li>
      </ul>
      <IoMdClose
        className="text-whiteText absolute top-5 right-4 text-3xl"
        onClick={props.closeMenu}
      />
    </div>
  )
})

MobileMenu.displayName = 'MobileMenu'

export default MobileMenu
