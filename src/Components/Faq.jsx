import { Icon } from "@iconify/react";

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
                <div className='flex flex-col gap-6  py-8 sm:text-[10px] text-[7.5px] pt-12'>
                <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[1em]">
                        <div className="flex justify-between text-[2em] ">
                            <p>Q: What is Crater?</p>
                            <button className="text-white text-[1.5em] items-start">
                                <Icon icon="mingcute:down-fill" />
                            </button>

                        </div>
                        <p className="text-[1.8em]">Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[1em]">
                        <div className="flex justify-between text-[2em] ">
                            <p>Q: What is Crater?</p>
                            <button className="text-white text-[1.5em] items-start">
                                <Icon icon="mingcute:down-fill" />
                            </button>

                        </div>
                        <p className="text-[1.8em]">Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[1em]">
                        <div className="flex justify-between text-[2em] ">
                            <p>Q: What is Crater?</p>
                            <button className="text-white text-[1.5em] items-start">
                                <Icon icon="mingcute:down-fill" />
                            </button>

                        </div>
                        <p className="text-[1.8em]">Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full border-[1.5px] px-4 py-3 text-[1em]">
                        <div className="flex justify-between text-[2em] ">
                            <p>Q: What is Crater?</p>
                            <button className="text-white text-[1.5em] items-start">
                                <Icon icon="mingcute:down-fill" />
                            </button>

                        </div>
                        <p className="text-[1.8em]">Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}