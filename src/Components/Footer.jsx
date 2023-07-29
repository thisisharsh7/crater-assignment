import { Icon } from "@iconify/react";


export default function Foter() {
    return (
        <div className="flex flex-col items-center xl:px-20 lg:px-16 md:px-10 px-6   py-8 gap-20 bg-[#323a3435] text-white">
            <div className="flex  flex-col  flex-1 gap-7 items-center w-full">
                <div className="flex sm:flex-row flex-col gap-7 items-center py-4 justify-between w-full border-b-[1px]">
                    <div className="lg:text-[38px] sm:text-[30px] lg:leading-[38px] sm:leading-[30px] text-[28px] uppercase font-normal cursor-pointer">
                        Crater
                    </div>
                    <div className="lg:text-[28px] sm:text-[24px] text-[24px] flex items-center gap-8">
                        <button className="hover:text-[#56f6be]">
                            <Icon icon="bi:instagram" />
                        </button>
                        <button className="hover:text-[#56f6be]">
                            <Icon icon="bi:facebook" />
                        </button>
                        <button className="hover:text-[#56f6be]">
                            <Icon icon="bi:linkedin" />
                        </button>

                        <button className="hover:text-[#56f6be]">
                            <Icon icon="bi:whatsapp" />
                        </button>

                    </div>
                </div>

                <div className="flex justify-between w-full lg:text-[18px] md:text-[14px] sm:flex-row flex-col sm:gap-2 gap-16 sm:items-start items-center sm:text-left text-center">

                    <ul className="xl:w-80 lg:w-72 sm:w-60 w-full flex flex-col gap-2">
                        <li>An AI-powered Business Manager for Creators & Freelancers.</li>
                        <li>Sports Inddex N Tech Private Limited</li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>contact@thecrater.co</li>
                    </ul>

                    <ul className="xl:w-72 lg:w-60 sm:w-52 w-full  flex sm:gap-1 sm:items-start sm:flex-row flex-col items-center">
                        <li className="lg:text-[24px] sm:text-[20px] text-[28px]"><Icon icon="mdi:map-marker-outline" /></li>
                        <li>14/4, J Block , 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu, 600102</li>
                    </ul>

                </div>
            </div>
            <p className="text-[14px]">
                &copy; 2023 Crater - All Right Reserved.
            </p>
        </div>
    )
}