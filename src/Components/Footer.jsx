import { Icon } from "@iconify/react";


export default function Foter() {
    return (
        <div className="flex flex-col items-center px-20  py-8 gap-20 bg-[#323a3435] text-white">
            <div className="flex  flex-col  flex-1 gap-4 items-center w-full">
                <div className="flex items-center py-3 justify-between w-full border-b-[1px]">
                    <div className="text-[26px] leading-[22px] uppercase font-normal cursor-pointer">
                        Crater
                    </div>
                    <div className="text-[22px] flex items-center gap-8">
                        <button>
                            <Icon icon="bi:instagram" />
                        </button>
                        <button>
                            <Icon icon="bi:facebook" />
                        </button>
                        <button>
                            <Icon icon="bi:linkedin" />
                        </button>

                        <button>
                            <Icon icon="bi:whatsapp" />
                        </button>

                    </div>
                </div>

                <div className="flex justify-between w-full text-[16px]">

                    <ul className="w-72 flex flex-col gap-2">
                        <li>An AI-powered Business Manager for Creators & Freelancers.</li>
                        <li>Sports Inddex N Tech Private Limited</li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>contact@thecrater.co</li>
                    </ul>

                    <ul className="w-60  flex gap-1 items-start ">
                        <li className="text-[24px]  "><Icon icon="mdi:map-marker-outline" /></li>
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