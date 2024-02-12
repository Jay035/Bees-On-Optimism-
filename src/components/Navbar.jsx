import { useState } from "react";
import logo from "../assets/Logo-frame.svg";

export default function Navbar({modalOpen, toggleModal}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center tracking-tight text-[#1C191C] w-full gap-x-12 py-4 border-b border-[#1C191C] px-4 lg:px-14">
      <section className="">
        <img src={logo} alt="logo" />
      </section>
      <div className="hidden lg:flex flex-col md:flex-row md:gap-4 text-sm gap-3 mb-20 lg:mb-0">
        <p
        onClick={toggleModal}
          className="border-b-0 cursor-pointer hover:border-b-[0.05px] transition-all border-[#1C191C] font-medium w-fit"
        >
          ROADMAP
        </p>
        <a
          href="https://t.me/BeesOnOptimism"
          className="border-b-0 hover:border-b-[0.05px] border-[#1C191C] transition-all font-medium w-fit"
        >
          TELEGRAM
        </a>
        <a
          href="https://x.com/BeesOnOptimism"
          className="border-b-0 hover:border-b-[0.05px] border-[#1C191C] transition-all font-medium w-fit"
        >
          TWITTER
        </a>
      </div>
      <section
        className={` bg-[#EBF9FF] lg:relative px-4 absolute w-full h-screen z-[9999999] lg:gap-5 lg:bg-transparent lg:w-fit lg:h-fit flex flex-col lg:flex-row justify-center gap-8 items-center ${
          menuOpen ? "left-0 top-0" : "-left-full lg:left-0"
        }`}
      >
        <div className="lg:hidden flex flex-col md:flex-row items-center md:gap-4 text-sm gap-3 mb-6 lg:mb-0">
        <p
        onClick={toggleModal}
          className="border-b-[0.05px] cursor-pointer border-[#1C191C] font-medium w-fit"
        >
          ROADMAP
        </p>
              <a
          href="https://t.me/BeesOnOptimism"
          className="border-b-0 hover:border-b-[0.05px] border-[#1C191C] transition-all font-medium w-fit"
        >
          TELEGRAM
        </a>
        <a
          href="https://x.com/BeesOnOptimism"
          className="border-b-0 hover:border-b-[0.05px] border-[#1C191C] transition-all font-medium w-fit"
        >
          TWITTER
        </a>
        </div>
 <a href="https://app.uniswap.org/swap?chain=optimism">
 <button className="text-[12.3px] border min-[2000px]:text-xl font-semibold bg-black hover:text-black hover:bg-white transition-colors hover:border-black p-[10px] rounded-[50px] w-44 md:w-[200px] min-[2000px]:p-5 min-[2000px]:w-[400px] text-white tracking-[-2%] h-8 flex justify-center items-center">
          BUY ON UNISWAP
        </button>

 </a>
        
      </section>

      {/* hamburger / Menu Icon */}
      <div
        className="z-[99999999] lg:hidden flex flex-col gap-1 items-center cursor-pointer "
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-[1.6rem] h-[3px] bg-[#1C191C] block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] ` : ``
          }`}
        ></span>
        <span
          className={`w-[1.6rem] h-[3px] bg-[#1C191C] block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`w-[1.6rem] h-[3px] bg-[#1C191C] block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] -translate-y-1.5 ` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}
