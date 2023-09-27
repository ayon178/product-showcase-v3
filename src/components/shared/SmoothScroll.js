// components/SmoothScroll.js
import React, { useEffect } from 'react'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize scrollSpy and register scroll events when the component mounts
    scrollSpy.update()
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})

    // Cleanup when the component unmounts
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <>
      {/* Render the navigation links */}
      <nav>
        <ul>
          <li>
            <Link to="section-1" spy={true} smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to="section-2" spy={true} smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      {children}
    </>
  )
}

export default SmoothScroll
