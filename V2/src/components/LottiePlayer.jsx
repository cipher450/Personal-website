import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function LottiePlayer({width,height,customClass,animation}) {
  return (
    
      <Player
    className={customClass}
  autoplay
  loop
  src={animation}
  style={{ height: height, width: width }}
>
  
</Player>
   
  )
}
