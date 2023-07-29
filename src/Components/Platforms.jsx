import { Icon } from "@iconify/react";

export default function Platform() {
    return (
        <div className="flex px-20 text-white py-20 gap-20">
            <div className="flex flex-col flex-1 pt-10 gap-12 items-center">
                <h1 className="text-[38px] leading-tight font-medium">Get all your Platform Data. All in one place.</h1>
                <ul className="flex gap-12 text-[22px] justify-around w-full items-center font-bold">
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