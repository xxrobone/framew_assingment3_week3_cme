import React from 'react'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import BGMEM from '../../assets/images/bg_members.png'
import BGMobile from '../../assets/images/bg_mobile.png'
//style 
import './Members.scss'

const Members = () => {

  const desktop = useIsDesktop()
  return (
    <>
       <img src={desktop ? BGMEM : BGMobile} alt="" className='bg_main' />
      <div className="content_wrapper members">
           <div className='members'>
          <h1>MEMBERS</h1>
          <h2>Prime</h2>
          <h2>Quill</h2>
          <h2>Slam Tilt {desktop ? <span className='passed'>(R.i.P 13 februari 1980. ✝ 14 december 2016)</span> : ''}</h2>
          <h2>Rob-One</h2>              
           </div>
    </div>
    </>
  )
}

export default Members