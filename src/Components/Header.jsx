
export default function Header() {
    return (
        <div className="bg-[#fafafa] py-4 px-20 flex justify-between items-center text-[#0f1711]">
            <div className="text-[26px] uppercase font-normal">
                Crater
            </div>
            <ul className="flex items-center text-[#0f1711b5] gap-10 text-[15px] font-semibold">
                <li className="hover:text-[#0f1711] transition-all duration-200  ">
                    <a href="#how-we-work">HOW WE WORK</a>
                </li>
                <li className="hover:text-[#0f1711] transition-all duration-200  ">
                    <a href="#why-us" >WHY US?</a>
                </li>
                <li className="hover:text-[#0f1711] transition-all duration-200  ">
                    <a href="#faqs">FAQs</a>
                </li>
                <li className="hover:bg-[#0f1711] text-[#0f1711] hover:text-white transition-all cursor-pointer duration-500 py-1 px-3 h-full border-[#0f1711]  border-2 ">
                    <a href="#get-early-access ">GET EARLY ACCESS</a>
                </li>
            </ul>
        </div>
    )
}