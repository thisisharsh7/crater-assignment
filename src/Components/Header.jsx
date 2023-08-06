import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function Header() {
    const boxRef = useRef()
    const clickHam = () => {
        boxRef.current.classList.toggle('-top-52')
        boxRef.current.classList.toggle('top-full')
    }

    return (
        <div className=" xl:px-20 lg:px-16 md:px-10  md:py-8 flex justify-between items-center text-[white] relative ">
            <div className="flex flex-1 justify-between md:bg-transparent bg-[#0f1711] md:px-0 px-6  z-30 md:py-0 py-3">
                <div className="lg:text-[26px] text-[23px] uppercase font-normal">
                    Crater
                </div>
                <div className="text-[28px]  md:hidden flex items-center" onClick={clickHam}>
                    <Icon icon="ci:hamburger-lg" />
                </div>
            </div>
            <ul className="flex md:relative items-center text-white md:gap-10 gap-5 lg:text-[15px] md:top-0 -top-52 absolute right-0 transition-all druation-300  md:bg-transparent backdrop-blur-lg  md:flex-row flex-col md:m-0 m-3 mx-5 z-10 left-0 md:text-[12px] md:rounded-none rounded-md text-[11px] md:py-0 py-8  font-semibold" ref={boxRef}>
                <li className="hover:text-[#56f6be] transition-all duration-700 relative before:bg-[#56f6be] before:absolute before:-bottom-0.5  before:transition-all before:duration-500 before:w-0 hover:before:w-full before:h-[2.5px] before:rounded-full">
                    <a href="#how-we-work">HOW WE WORK</a>
                </li>
                <li className="hover:text-[#56f6be] transition-all duration-200 relative before:bg-[#56f6be] before:absolute before:-bottom-0.5  before:transition-all before:duration-500 before:w-0 hover:before:w-full before:h-[2.5px] before:rounded-full  ">
                    <a href="#why-crater" >WHY CRATER?</a>
                </li>
                <li className="hover:text-[#56f6be] transition-all duration-200 relative before:bg-[#56f6be] before:absolute before:-bottom-0.5  before:transition-all before:duration-500 before:w-0 hover:before:w-full before:h-[2.5px] before:rounded-full  ">
                    <a href="#faqs" >FAQS</a>
                </li>
                <li className="before:left-0 z-30 before:-z-10 before:bottom-0 hover:text-[#0f1711]  transition-all cursor-pointer duration-500 py-1.5 tracking-wide px-2   border-2 border-white hover:border-[#56f6be]  relative before:bg-[#56f6be] before:absolute   before:transition-all before:duration-500 before:w-0 before:h-0 hover:before:w-full hover:before:h-full ">
                    <a href="/">GET EARLY ACCESS</a>
                </li>
            </ul>
        </div>
    )
}