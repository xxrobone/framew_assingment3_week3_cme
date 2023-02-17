import React from 'react'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import BGMED from '../../assets/images/bg_media.png'
import BGMobile from '../../assets/images/bg_mobile.png'

//style 
import './mediafiles.scss'

const MediaFiles = () => {

    const desktop = useIsDesktop()
    
  return (
    <>
       <img src={desktop ? BGMED : BGMobile} alt="" className='bg_main' />
    <div className="content_wrapper media_files">
           <div className='media'>
          <h1>MEDIA FILES</h1>
                       
    </div>
    </div>
    </>
  )
}

export default MediaFiles