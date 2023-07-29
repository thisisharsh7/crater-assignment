import { Icon } from "@iconify/react";

export default function Platform() {
    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8">
            <div className="flex flex-col flex-1 pt-5 gap-12 items-center text-center">
                <h1 className="lg:text-[38px] md:text-[34px] text-[27px] leading-tight font-medium">Get all your Platform Data. All in one place.</h1>
                <ul className="flex sm:flex-row flex-col lg:gap-12  md:gap-8 lg:text-[22px] md:text-[20px] text-[19px] gap-6 justify-around w-full items-center font-bold">
                    <li className="flex items-center gap-3">
                        <Icon icon="logos:youtube-icon" />
                        <a href="/" >Yoututbe</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Icon icon="skill-icons:instagram" />
                        <a href="/" >Instagram</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Icon icon="logos:twitch" />
                        <a href="/" >Twitch</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Icon icon="logos:linkedin-icon" />
                        <a href="/" >Linkedin</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <a href="/" >+more</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}