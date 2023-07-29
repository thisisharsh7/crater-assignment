import FaqList from "./faqList";



export default function Faq() {

    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 justify-center px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8 ">
            <div className="flex flex-col flex-1 md:pt-10 pt-5 gap-12 items-center max-w-6xl" id='faqs'>
                <div className="text-center flex flex-col sm:gap-3 gap-2">
                    <h1 className="lg:text-[38px] md:text-[34px] text-[27px]  text-center leading-tight font-medium ">
                        Ask us anything
                    </h1>
                    <p className="sm:text-[20px] text-[14px]">Have any questions? We&apos;re here to assist you.</p>
                </div>
                <form className="flex w-full justify-center  sm:text-[19px] text-[15px]">
                    <div className="flex-1 flex  border-2 ">
                        <input
                            name="query"
                            id="query"
                            placeholder="Post your question here"
                            autoCorrect="true"
                            className="w-full px-4 py-2 bg-transparent outline-none placeholder:text-[#ffffffaf]"
                        />
                        <input type="submit" value="POST" className=" sm:px-6 px-4 sm:py-3 py-2 hover:bg-transparent hover:text-white  text-[#0f1711] bg-white font-medium tracking-wide cursor-pointer" />
                    </div>
                </form>
                <div className='flex flex-col gap-6  py-8 sm:text-[10px] text-[7.5px] pt-12 w-full'>
                    <FaqList quest={"What is Crater?"} ans={"Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place."} />
                    <FaqList quest={"What are the features?"} ans={"Crater provides a wide range of useful features including sentiment analysis, audience engagement tools, social media management, insurance coverage for digital accounts, and automated tax management. Additionally, it offers tools to help maximize your YouTube views."} />
                    <FaqList quest={"Is Crater only for Creators?"} ans={"Crater can also be used by startups, agencies, talent managers to manage their social media."} />
                    <FaqList quest={" Is my data safe?"} ans={"Crater uses official Instagram/ Facebook/ TikTok/ Linkedin APIs to access data. We are regulated by the API guidelines of Instagram/ Facebook/ Youtube/ Linkedin and don't indulge in unauthorized activities on your Social Media Accounts. Also, We don't store any unnecessary data about your profile at our end."} />
                </div>
            </div>
        </div>
    )
}