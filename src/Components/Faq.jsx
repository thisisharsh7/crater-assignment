
export default function Faq() {
    return (
        <div className="flex px-20 text-white py-20 gap-20 w-full justify-center">
            <div className="flex flex-col flex-1 pt-10 gap-8 items-center  max-w-4xl" id="faqs">
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-[38px] leading-tight font-medium">
                        Ask us anything
                    </h1>
                    <p className="text-[20px]">Have any questions? We&apos;re here to assist you.</p>
                </div>
                <form className="flex w-full justify-center  ">
                    <div className="flex-1 flex  border-2 ">
                        <input
                            name="query"
                            id="query"
                            placeholder="Post your question here"
                            autoCorrect={true}
                            className="w-full px-4 py-2 bg-transparent outline-none "
                        />
                        <input type="submit" value="POST" className=" px-6 py-3 hover:bg-transparent hover:text-white  text-[#0f1711] bg-white font-medium tracking-wide cursor-pointer" />
                    </div>
                </form>
                <div className='flex flex-col gap-6  py-8 pt-12'>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[20px]">
                        <div>Q: What is Crater?</div>
                        <p className="text-[18px]">Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[20px]">
                        <div>Q: What are the features?</div>
                        <p className="text-[18px]">Crater provides a wide range of useful features including sentiment analysis, audience engagement tools, social media management, insurance coverage for digital accounts, and automated tax management. Additionally, it offers tools to help maximize your YouTube views.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[20px]">
                        <div>Q: Is Crater only for Creators?</div>
                        <p className="text-[18px]">Crater can also be used by startups, agencies, talent managers to manage their social media.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[20px]">
                        <div>Q: Is my data safe?</div>
                        <p className="text-[18px]">Crater uses official Instagram/ Facebook/ TikTok/ Linkedin APIs to access data. We are regulated by the API guidelines of Instagram/ Facebook/ Youtube/ Linkedin and don&apos;t indulge in unauthorized activities on your Social Media Accounts. Also, We don&apos;t store any unnecessary data about your profile at our end.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}