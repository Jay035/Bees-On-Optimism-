// import heroImg from "../assets/hero-img.png";
import chevronRight from "../assets/chevrons-right.svg";
import shield from "../assets/Vector.svg";
import frame from "../assets/Frame.png";

export default function Content() {
  return (
    <main className=" pb-8 lg:pb-0 text-[#1C191C] overflow-x-hidden lg:grid grid-cols-[auto_682px] min-[2000px]:grid-cols-[auto_850px]">
      <section className="pt-8">
        {/* justify-start items-start lg:h-[130vh] */}
        <p className="px-6 md:px-10 lg:pl-14 font-medium text-sm flex items-center">
          ERC404, AN EXPERIMENTAL TOKEN{" "}
          <img src={chevronRight} alt="chevron right" />
        </p>
        <h1 className="tracking-tighter px-6 md:px-10 lg:pl-14 border-b border-[#1C191C] pb-12 sm:pb-14 max-[400px]:text-6xl text-7xl leading-[0.9] font-Stratos-Bold md:text-8xl lg:text-[120px] xl:text-[11rem] min-[2000px]:text-[12rem] mt-6 mb-16 lg:mb-[71px]">
          FIRST <br />
          <span className="font-Stratos-Semi-Bold text-[#483EA7]">ERC404</span>
          <br /> TOKEN <br /> ON OPTIMISM
        </h1>
        <div className="mb-16 px-6 md:px-10 lg:pl-14 lg:mb-24 w-full sm:max-w-[308px] min-[2000px]:max-w-[700px]">
          <h2 className="text-lg min-[2000px]:text-4xl font-semibold leading-6">
            ‘BEES ON OPTIMISM’ IS A COLLECTION OF 100 AVATARS OR
            &quot;REPLICANTS&quot;,
          </h2>
          <p className="text-[12.3px] min-[2000px]:text-xl font-medium tracking-[-0.01em] mt-6 mb-8">
            {" "}
            100 REPLICANTS BOUND TO THE $BEE TOKEN BUILT ON ERC404, AN
            EXPERIMENTAL TOKEN STANDARD ENABLING PERSISTENT LIQUIDITY AND
            SEMI-FUNGIBILITY FOR ETHEREUM NFTS.
          </p>
          <a className="text-[12.3px] border min-[2000px]:text-xl font-semibold bg-black hover:text-black hover:bg-white transition-colors hover:border-black p-[10px] rounded-[50px] w-44 md:w-[200px] min-[2000px]:p-5 min-[2000px]:w-[400px] text-white tracking-[-2%] h-8 flex justify-center items-center" href="https://app.uniswap.org/swap?chain=optimism">
          <  >
          BUY ON UNISWAP
        </>
            </a>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:pl-[5px] min-[2000px]:pl-5 border-t border-[#1C191C] md:border-t-0 md:border-l">
        <div className="overflow-hidden w-full sm:max-w-md lg:max-w-none lg:w-full border-b-[1.5px]">
          <div className="whitespace-nowrap scroll-text-group mt-8 flex items-center gap-2 pb-[27px]  pt-[28px] border-[#1C191C] mb-[5px]">
            <img className="w-7 md:w-[41px]" src={shield} alt="shield icon" />
            <p className="font-Stratos-Bold lg:leading-[100px] text-4xl lg:text-[80px] tracking-tighter">
              ERC20 x ERC721
            </p>
          </div>
        </div>
        <img className="xl:w-[667px] lg:h-[683px]" src={frame} alt="frame" />

        <div className="overflow-hidden w-full sm:max-w-md lg:max-w-none lg:w-full">
          <div className="whitespace-nowrap scroll-text-group">
            <p className="font-Stratos-Bold lg:leading-[100px] text-4xl lg:text-[80px] mt-8 tracking-tighter">
              $HONEY Airdrop coming soon
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
