import { useRef } from "react";
import Member from "./Member";
import { Icon } from "@iconify/react";

export default function Community() {
    const memberScroll = useRef()
    function scrollRight() {
        memberScroll.current.scrollBy(400, 0)
    }
    function scrollLeft() {
        memberScroll.current.scrollBy(-450, 0)
    }
    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8 ">
            <div className="flex flex-col w-full  flex-1 md:pt-10 pt-5 gap-12 items-center">
                <h1 className="lg:text-[38px] md:text-[34px] text-[27px] leading-tight font-medium text-center">10,000 + Users have signed up!</h1>
                <div className=" w-full flex sm:gap-12 gap-2 items-center pt-5">
                    <button onClick={scrollLeft} className="text-[24px]">
                        <Icon icon="ps:left" />
                    </button>
                    <div className="grid lg:grid-cols-[repeat(4,minmax(450px,1fr))] sm:grid-cols-[repeat(4,minmax(400px,1fr))] grid-cols-[repeat(4,minmax(100%,1fr))] overflow-x-scroll [&::-webkit-scrollbar]:hidden scroll-smooth pb-6 sm:px-4 px-2 sm:gap-10 gap-4 grid-flow-col w-full " ref={memberScroll}>
                        <Member detail={"I have been able to increase my Youtube views by more than 30% by using their Views Predictor."} name={"Mitansh"} work={"Youtuber"} avatar={"./mitansh.jpeg"} />
                        <Member detail={"Crater is the ultimate all-in-one solution. I can't imagine going back to managing everything manually."} name={"Chintan"} work={"Solo Entreprenur"} avatar={"./chintan.jpeg"} />
                        <Member detail={"I was skeptical at first, but after using Crater for just a few weeks, I'm completely sold. The AI-powered features are incredibly accurate and make my life so much easier."} name={"Manisha"} work={"Architect"} avatar={"./Manisha.jpeg"} />
                        <Member detail={"The amount of money they saved for me was massive, didn't know AI could reply like me and better."} name={"Pallavi"} work={"Freelancer"} avatar={"./pallavi.jpeg"} />
                    </div>
                    <button onClick={scrollRight} className="text-[24px]">
                        <Icon icon="ps:right" />
                    </button>
                </div>
            </div>
        </div>
    )
}