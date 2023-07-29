import { Icon } from "@iconify/react";


export default function Foter() {
    return (
        <div className="flex flex-col px-20 bg-black text-white py-8 gap-20">
            <div className="flex  flex-col  flex-1 gap-12 items-center">
                <div className="flex items-center py-4 justify-between w-full border-b-[1px]">
                    <div className="text-[26px] leading-1 uppercase font-normal">
                        Crater
                    </div>
                    <div className="text-[26px] flex items-center gap-8">
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

                <div>
                    <ul>
                        <li>An AI-powered Business Manager for Creators & Freelancers.</li>
                        <li>Sports Inddex N Tech Private Limited</li>
                        <li>14/4, J Block , 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu, 600102</li>
                    </ul>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>contact@thecrater.co</li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2023 Crater - All Right Reserved.</p>
        </div>
    )
}