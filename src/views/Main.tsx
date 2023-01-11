import Logo from "../assets/index-logo.png"
import PlayIn from "../assets/play-btn.png"
import PlayOut from "../assets/play-border.png"

function Main() {

  return (
    <div className="Main">
      <div className="bg">
        <div className="vid relative w-screen flex justify-end">
          <video className="fixed -z-10 w-[92.7%] h-screen object-cover brightness-[50%]" src="https://eversoul.kakaogames.com/videos/bg-section-home-video.9f8fbe6.webm" playsInline autoPlay muted loop></video> 
        </div>
      </div>
      <div className="fixed flex items-center w-[92.7%] h-screen justify-end">
        <img className="h-[14.2rem] absolute left-[14.6rem]" src={Logo} />  {/* left-[234px]" */}
        
        <div className="play-btn pl-[150px] w-[93.8%] h-screen flex justify-center items-center cursor-pointer">
          <img className="play-in w-[105px] transition duration:300 hover:rotate-[180deg] ease-in-out" src={PlayOut} />
          <img className="play-in fixed w-[89px] hover:brightness-50 transition duration:300 ease-in-out" src={PlayIn} />
        </div>

        <div className="fixed flex items-center justify-center w-[92.7%] h-screen">
          <div className="text-2xl text-white">영원한 인연을 시작하시겠습니까?</div>
          
        </div>
      </div>

      
      <header className="fixed flex w-[140px] h-[100%] bg-[#2e2b41] justify-start z-20 overflow-visible">
        <div className="top-items pt-[16px] w-[124px] pl-[24.5px]">
          <img className='logo w-[90px]' src={Logo} alt="" />
          <nav className=" mt-[51px] block">
            <ul className="list list-none">
              <li className="item h-[24px] mb-[41px] text-white text-lg">정령</li>
              <li className="item h-[24px] mb-[41px] text-white text-lg">게임소개</li>
              <li className="item h-[24px] mb-[41px] text-white text-lg">새소식</li>
              <li className="item h-[24px] mb-[41px] text-white text-lg">미디어</li>
            </ul>
          </nav>
        </div>
      </header>

    </div>
  )
}

export default Main