import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="auto-resizable-iframe ">
    <div>
    <iframe className=""
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
    </div>
  </div>
)
export default Video