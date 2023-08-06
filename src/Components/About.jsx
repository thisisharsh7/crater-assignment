import Card from "./card"



export default function About() {

    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8" >
            <div className="flex flex-col flex-1 md:py-10 py-5 gap-12 items-center" id="how-we-work">
                <h1 className="lg:text-[38px] md:text-[34px] text-[27px]  text-center leading-tight font-medium ">
                    All the creator business tools.
                    <br />
                    All with your Crater account.
                </h1>
                <div className="flex flex-wrap  w-full max-w-6  xl:px-24 justify-between  sm:gap-y-20 gap-y-10  py-5">
                    <Card detail={"Automatically hides damaging, hateful, racist comments and spam from your Social Media posts."} title={"Sentimental Analysis"} imgSrc={"./sentimental.svg"} iwidth={300} iheight={190} />
                    <Card detail={"Compare thumbnails and titles and see which will get more Views on YouTube. Predict YouTube Views before you upload."} title={"Maximize Your YouTube Views"} imgSrc={"./views.svg"} iwidth={300} iheight={190} />
                    <Card detail={"Al will Reply to 1000s of comments/messages just like how the Creator would in less than a second."} title={"Engage with Your Audience"} imgSrc={"./audience.svg"} iwidth={280} iheight={225} />
                    <Card detail={"Manage all your Social Media accounts from a single Dashboard."} title={"Social Media Manager"} imgSrc={"./manager.svg"} iwidth={280} iheight={225} />
                    <Card detail={"Don&apos;t lose your entire digital business to a hack, protect it with Crater."} title={"Digital Account Recovery"} imgSrc={"./hack.svg"} iwidth={290} iheight={140} />
                    <Card detail={'Once you sync your accounts, our AI will handle the rest. It will help you file taxes in less than 20 minutes.'} title={'Automation of taxes'} imgSrc={"./ai.svg"} iwidth={300} iheight={140} />
                </div>
            </div>
        </div>

    )
}