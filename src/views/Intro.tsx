import { useState } from 'react'
import styled from 'styled-components'

import Loading from "../assets/intro/w-loading.mp4"
import BG from "../assets/intro/w-bg.mp4"
import Logo from "../assets/logo.png"
import IC_Home from "../assets/intro/ic-home.png"
import IC_Share from "../assets/intro/ic-share.png"
import IC_Bgm_On from "../assets/intro/ic-bgm-on.png"
import IC_Skip from "../assets/intro/ic-skip.png"
import LeftFrame from "../assets/intro/frame-lft.png"
import RightFrame from "../assets/intro/frame-rgt.png"

function Intro() {
  const [isLoading, setIsLoading] = useState(true)
  // const [whiteActive, setWhiteActive] = useState(false)

  return (
    <div className='Intro'>
      <header className="fixed z-20">
        { isLoading == false ? <img className='logo fixed w-[169px] left-[32px] top-[16px]' src={Logo} alt="" /> : null }
        { isLoading == false ? <div className="menu w-screen absolute flex justify-end items-center -left-[18px] top-[48px]">
          <a className="cursor-pointer" href="/ko">
            <img className='btn-home h-[43px] m-[17px]' src={IC_Home} alt="" />
          </a>
          <a className="cursor-pointer" href="/ko">
            <img className='btn-share h-[43px] m-[17px]' src={IC_Share} alt="" />
          </a>
          <a className="cursor-pointer" href="/ko">
            <img className='btn-btm h-[43px] m-[17px]' src={IC_Bgm_On} alt="" />
          </a>
          <a className="cursor-pointer" href="/ko">
            <img className='btn-skip h-[43px] m-[17px]' src={IC_Skip} alt="" />
          </a>
        </div> : null }

        { isLoading == false ? <div className="frame">
          <img className="left-frame w-[32rem] fixed left-[2.2rem] bottom-[2.2rem]" src={LeftFrame} alt="" />
          <div className="square w-[0.55rem] h-[0.55rem] border-[0.5px] border-[#282844] fixed left-[2rem] bottom-[24.2rem] rotate-45"></div>
          <div className="square w-[0.55rem] h-[0.55rem] border-[0.5px] border-[#282844] fixed left-[2rem] bottom-[27.5rem] rotate-45"></div>
          <img className="right-frame w-[32rem] fixed right-[2.2rem] bottom-[2.2rem]" src={RightFrame} alt="" />
          <div className="square w-[0.55rem] h-[0.55rem] border-[0.5px] border-[#282844] fixed right-[2rem] bottom-[24.2rem] rotate-45"></div>
          <div className="square w-[0.55rem] h-[0.55rem] border-[0.5px] border-[#282844] fixed right-[2rem] bottom-[27.5rem] rotate-45"></div>
      
          <div className="w-screen fixed flex justify-center items-center">
            <div className="square w-[0.55rem] h-[0.55rem] bg-[#282844] border-[0.5px] border-[#282844] fixed bottom-[1.9rem] mr-[88px] rotate-45"></div>
            <div className="square w-[0.55rem] h-[0.55rem] bg-[#282844] border-[0.5px] border-[#282844] fixed bottom-[1.9rem] rotate-45"></div>
            <div className="out-square w-[0.8rem] h-[0.8rem] border-[0.5px] border-[#282844] fixed bottom-[1.75rem] rotate-45"></div>
            <div className="square w-[0.55rem] h-[0.55rem] bg-[#282844] border-[0.5px] border-[#282844] fixed bottom-[1.9rem] ml-[88px] rotate-45"></div>
          </div>
        </div> : null }
      </header>
      
      <div className="bg">
        { isLoading == false ?
          <video className="w-screen h-screen object-cover overflow-hidden  -z-10" muted autoPlay loop>
            <source src={ BG } type="video/mp4" />
          </video>
        : null }
        { isLoading == true ?
          <video className="w-screen h-screen object-cover overflow-hidden z-30" muted autoPlay onEnded={ ()=>{ setIsLoading(false) } }>
            <source className="opacity-[50%]" src={ Loading } type="video/mp4" />
          </video>
        : null }
      </div>

    </div>
  )
}

export default Intro