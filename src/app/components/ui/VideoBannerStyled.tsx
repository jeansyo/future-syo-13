import React from 'react'

export default function VideoBannerStyled({
    controls=false,
    autoPlay=true,
    muted=true,
    loop=false,
    src,
    type="video/mp4"
}: any) {
  return (
    <div
        className='w-full h-full'
    >
        <video 
            className='w-full h-full object-cover' 
            controls={controls} 
            autoPlay={autoPlay} 
            muted={muted}
            loop={loop}
        >
            <source src={src} type={type}/>
        </video>
    </div>
  )
}
