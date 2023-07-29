export default function Hero() {
    return (

        <div className="flex px-20 text-white py-20 gap-20">
            <div className="flex flex-col flex-1 items-start py-10 relative gap-4">
                <h1 className="text-[54px] leading-tight font-bold  before:absolute before:top-0 before:bg-white before:w-20 before:h-0.5">AI-powered Business Manager for
                    {/* <span>Rebels</span>
                    <span>Creators</span> */}
                    <span> Freelancers</span>
                    {/* <span>Makers</span>
                    <span>Go-getters</span>
                    <span>Leaders</span>
                    <span>Challengers</span> */}
                </h1>
                <p className="text-[20px] text-[#d7d7d7] pb-10">Focus on doing what you love, instead of having to open 10 different social media platforms, negotiate brand deals, chase invoices, manage payments, or file taxes.</p>
                {/* <p>It&apos;s like having your own <span>BUSINESS MANAGER !</span></p> */}
                <button className="hover:bg-white hover:text-[#0f1711] text-white transition-all duration-500 font-semibold tracking-wider py-3 px-4  hover:border-[#0f1711]  border-2 ">
                    <a href="#get-early-access ">GET EARLY ACCESS</a>
                </button>
            </div>
            <div className="flex-1">
                <img src="./hero.png" alt="" className="w-full" />
            </div>
        </div>
    )
}