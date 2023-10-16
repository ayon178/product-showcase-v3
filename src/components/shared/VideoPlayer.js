import { useState } from 'react'
import thumb from '../../assets/spec/thumb.png'

const VideoPlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false)

  const playVideo = () => {
    setPlaying(true)
  }

  return (
    <div className="relative ">
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={thumb.src}
          alt="Video Thumbnail"
          className="w-[85%] h-auto cursor-pointer real_shadow"
          onClick={playVideo}
        />
        {playing && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube Video"
            className="absolute top-0 w-[85%] h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer ${
          playing ? 'hidden' : 'block'
        }`}
        onClick={playVideo}
      >
        <div>
          <i class="fa-regular fa-circle-play play-button"></i>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
