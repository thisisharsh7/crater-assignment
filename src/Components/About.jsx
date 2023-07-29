
export default function About() {
    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8" >
            <div className="flex flex-col flex-1 md:py-10 py-5 gap-12 items-center" id="how-we-work">
                <h1 className="lg:text-[38px] md:text-[34px] text-[27px]  text-center leading-tight font-medium ">
                    All the creator business tools.
                    <br />
                    All with your Crater account.
                </h1>
                <div className="flex flex-wrap w-full justify-center  xl:gap-y-20 xl:gap-x-16 gap-x-10 gap-y-12  py-5">
                    <div className="flex flex-col backdrop-blur-2xl background-transparent  px-8 py-5 xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] gap-3 items-center text-center">
                        <img src="./sentimental.svg" alt="" className="w-full" />
                        <div className="flex flex-col">
                            <p className="lg:text-[23px] text-[19px] font-medium">Sentimental Analysis</p>
                            <p className="w-full lg:text-[16px] text-[13px] pt-3" >Automatically hides damaging, hateful, racist comments and spam from your Social Media posts.</p>
                        </div>
                    </div>

                    <div className="flex flex-col backdrop-blur-2xl background-transparent gap-3   px-8 py-5  justify-between xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] items-center text-center">
                        <img src="./views.svg" alt="" className="w-full" />
                        <div className="flex flex-col">
                            <p className="lg:text-[23px] text-[19px] font-medium">Maximize Your YouTube Views</p>
                            <p className="w-full lg:text-[16px] text-[13px] pt-3" >Compare thumbnails and titles and see which will get more Views on YouTube. Predict YouTube Views before you upload.</p>
                        </div>
                    </div>

                    <div className="flex flex-col backdrop-blur-2xl background-transparent  px-8 py-5 xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] gap-3 items-center text-center">
                        <img src="./audience.svg" alt="" className="w-full" />
                        <div className="flex flex-col">
                            <p className="lg:text-[23px] text-[19px] font-medium">Engage with Your Audience</p>
                            <p className="w-full lg:text-[16px] text-[13px] pt-3" >Al will Reply to 1000s of comments/messages just like how the Creator would in less than a second.</p>
                        </div>
                    </div>
                    <div className="flex flex-col backdrop-blur-2xl background-transparent gap-3   px-8 py-5  justify-between xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] items-center text-center">
                        <img src="./manager.svg" alt="" className="w-full" />
                        <div className="flex flex-col">
                            <p className="lg:text-[23px] text-[19px] font-medium">Social Media Manager</p>
                            <p className="w-full lg:text-[16px] text-[13px] pt-3" >Manage all your Social Media accounts from a single Dashboard.</p>
                        </div>
                    </div>
                    <div className="flex flex-col backdrop-blur-2xl background-transparent  px-8 py-5 xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] gap-3 items-center text-center">
                        <img src="./hack.svg" alt="" className="w-full" />
                        <div className="flex flex-col">
                            <p className="lg:text-[23px] text-[19px] font-medium">Digital Account Recovery</p>
                            <p className="w-full lg:text-[16px] text-[13px] pt-3" >Don&apos;t lose your entire digital business to a hack, protect it with Crater.</p>
                        </div>
                    </div>
                    <div className="flex flex-col backdrop-blur-2xl background-transparent gap-3   px-8 py-5  justify-between xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] items-center text-center">
                        <img src="./ai.svg" alt="" className="w-full" />
                        <div className="flex flex-col">
                            <p className="lg:text-[23px] text-[19px] font-medium">Automation of taxes</p>
                            <p className="w-full lg:text-[16px] text-[13px] pt-3" >Once you sync your accounts, our AI will handle the rest. It will help you file taxes in less than 20 minutes.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}