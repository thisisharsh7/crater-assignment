import { useState } from "react"

const arrText = ['Rebels', 'Creators', 'Freelancers', 'Makers', 'Go-getters', 'Leaders', 'Challengers']
export default function Hero() {
    const [txt, setTx] = useState('Challengers')
    setTimeout(() => {
        if (txt === arrText[0]) {
            setTx(arrText[1])
        } else if (txt === arrText[1]) {
            setTx(arrText[2])
        } else if (txt === arrText[2]) {
            setTx(arrText[3])
        } else if (txt === arrText[3]) {
            setTx(arrText[4])
        } else if (txt === arrText[4]) {
            setTx(arrText[5])
        } else if (txt === arrText[5]) {
            setTx(arrText[6])
        } else {
            setTx('Rebels')
        }
    }, 2000)
    return (

        <div className="flex lg:flex-row flex-col xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8 text-white">
            <div className="flex flex-col flex-1 items-start lg:py-14 md:py-10 py-5  relative gap-4 xl:text-[10px] lg:text-[6.5px] md:text-[8px] text-[5.3px]">
                <h1 className="text-[5.4em] leading-tight font-bold  before:absolute before:top-0 before:bg-white md:before:w-16 before:w-8 md:before:h-1 before:h-0.5 before:rounded-full">AI-powered Business Manager for
                    <span className="truncate text-[#0f1711] [text-shadow:1px_-1px_2px_rgba(255,255,255,1)]"> {txt}</span>
                </h1>
                <p className="sm:text-[2em] text-[13px] text-[#d7d7d7] sm:pb-10 pb-6">Focus on doing what you love, instead of having to open 10 different social media platforms, negotiate brand deals, chase invoices, manage payments, or file taxes.</p>
                {/* <p>It&apos;s like having your own <span>BUSINESS MANAGER !</span></p> */}
                <button className="hover:bg-white sm:text-[1.8em] text-[12px] hover:text-[#0f1711] text-white transition-all duration-500 font-semibold tracking-wider py-3 px-4  hover:border-[#0f1711]  border-2 ">
                    <a href="#get-early-access ">GET EARLY ACCESS</a>
                </button>
            </div>
            <div className="flex-1 self-end">
                <img src="./hero.png" alt="" className="w-full" />
            </div>
        </div>
    )
}