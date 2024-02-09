export default function HeroSection() {
  return (
    <section className="flex justify-center min-h-svh w-full p-1 bg-whitePrimary font-s1 text-blackPrimary">
      <div className="relative flex flex-col w-11/12 pt-2 gap-1 md:pt-5 md:gap-0">
        {/* top container */}
        <div className="flex w-full justify-center uppercase md:justify-between">
          <p className="hidden md:flex font-s5 text-8xl">20</p>
          <div className="flex flex-col text-center justify-between gap-3 md:justify-normal ">
            <p className="font-s3 text-2xl">Developer</p>
            <p className="text-sm md:text-base">
              Acting with a new level of confidence
            </p>
          </div>
          <p className="hidden md:flex font-s5 text-8xl">24</p>
        </div>

        {/* second container */}
        <div className="flex uppercase items-center justify-center md:justify-between">
          <img className="hidden w-24 md:flex" src="/svgs/globe.svg" />
          <div className="hidden md:flex w-1/4">
            <span className="border border-blackPrimary w-full min-w-2"></span>
          </div>
          <p className="font-s6 text-8xl">Anish.aby</p>
          <div className="hidden md:flex w-1/4">
            <span className="border border-blackPrimary w-full min-w-2"></span>
          </div>
          <img className="hidden w-24 md:flex" src="/svgs/globe.svg" />
        </div>

        {/* Date for mobile view */}
        <div className="flex w-full justify-between font-s5 text-3xl md:hidden">
          <p>20</p>
          <p>24</p>
        </div>

        {/* always learning container */}
        <div className="hidden w-full justify-between font-s1 text-lg md:flex uppercase mt-5">
          <div>
            <p>Always</p>
            <p>learning</p>
          </div>
          <div className="text-right">
            <p>Always</p>
            <p>growing</p>
          </div>
        </div>

        <div className="absolute top-1/2 w-full flex justify-between uppercase">
          <img src="/svgs/developerLeft.svg" />
          <img src="/svgs/developerRight.svg" />
        </div>

        {/* bottom bar */}
        <div className="absolute flex flex-col text-xs bottom-0 w-full h-24 items-center md:text-xl z-10 bg-whitePrimary">
          <p className="font-s5 font-[14px] md:hidden">Scroll down for more</p>
          <div className="flex w-full h-1/2 items-center justify-between md:h-full">
            <div className="flex gap-4">
              <div className="uppercase items-center">
                <p className="font-s3">spot</p>
                <p>ssot</p>
              </div>
              <img src="/svgs/copyright.svg" />
            </div>
            <p className="tracking-tighter font-s5 font-black">アニッシュ</p>
            <div className="flex max-w-52 md:min-w-80">
              <span className="border border-blackPrimary w-full min-w-5"></span>
            </div>
            <p className="hidden md:flex font-s5">Scroll down for more</p>
            <img className="w-10 flex md:hidden" src="/svgs/globe.svg" />
            <div className="flex max-w-52 min-w-5 md:min-w-80">
              <span className="border border-blackPrimary w-full min-w-2"></span>
            </div>
            <span className="bg-blackPrimary rounded-full px-2">
              <p className="text-whitePrimary">コーダー</p>
            </span>
            <img className="w-12 md:w-24" src="/svgs/barcode.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
