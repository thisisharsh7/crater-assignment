export default function Hero() {
    return (

        <div className="flex lg:flex-row flex-col xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8 text-white">
            <div className="flex flex-col flex-1 items-start lg:py-14 md:py-10 py-5 relative gap-4 xl:text-[10px] lg:text-[6.5px] md:text-[8px] text-[5.3px]">
                <h1 className="text-[5.4em] leading-tight font-bold  before:absolute before:top-0 before:bg-white md:before:w-20 before:w-8 before:h-0.5">AI-powered Business Manager for
                    {/* <span>Rebels</span>
                    <span>Creators</span> */}
                    <span> Freelancers</span>
                    {/* <span>Makers</span>
                    <span>Go-getters</span>
                    <span>Leaders</span>
                    <span>Challengers</span> */}
                </h1>
                <p className="sm:text-[2em] text-[13px] text-[#d7d7d7] sm:pb-10 pb-6">Focus on doing what you love, instead of having to open 10 different social media platforms, negotiate brand deals, chase invoices, manage payments, or file taxes.</p>
                {/* <p>It&apos;s like having your own <span>BUSINESS MANAGER !</span></p> */}
                <button className="hover:bg-white sm:text-[1.8em] text-[12px] hover:text-[#0f1711] text-white transition-all duration-500 font-semibold tracking-wider py-3 px-4  hover:border-[#0f1711]  border-2 ">
                    <a href="#get-early-access ">GET EARLY ACCESS</a>
                </button>
            </div>
            <div className="flex-1 self-end">
                <img src="./hero.png" alt="" className="w-full" />
            </div>
        </div>
    )
}