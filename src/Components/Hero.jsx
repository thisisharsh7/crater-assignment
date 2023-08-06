import { useEffect, useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";
import { slideUpVariants, getWindowWidth } from "./animate";



const arrText = ['Rebels', 'Creators', 'Freelancers', 'Makers', 'Go-getters', 'Leaders', 'Challengers']
export default function Hero() {
    const [txt, setTx] = useState('Challengers')
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleWindowRewidth() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('rewidth', handleWindowRewidth);

        return () => {
            window.removeEventListener('rewidth', handleWindowRewidth);
        };
    }, []);
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
                <motion.h1 className="text-[5.4em] leading-tight font-bold  before:absolute before:top-0 before:bg-white md:before:w-16 before:w-8 md:before:h-1 before:h-0.5 before:rounded-full">AI-powered Business Manager for
                    <span className="truncate text-[#0f1711] [text-shadow:1px_-1px_2px_rgba(255,255,255,1)]"> {txt}</span>
                </motion.h1>
                <motion.p className="sm:text-[2em] text-[13px] text-[#d7d7d7] sm:pb-10 pb-6" variants={slideUpVariants} initial="initial" whileInView="animate" >Focus on doing what you love, instead of having to open 10 different social media platforms, negotiate brand deals, chase invoices, manage payments, or file taxes.</motion.p>
                {/* <p>It&apos;s like having your own <span>BUSINESS MANAGER !</span></p> */}
                <button className=" sm:text-[1.8em] text-[12px] hover:text-[#0f1711] text-white transition-all duration-500 font-semibold tracking-wider py-3 px-4  hover:border-[#0f1711]  border-2 relative before:bg-white before:absolute before:top-0 before:left-0 z-30 before:-z-10  before:transition-all before:duration-500 before:w-0 before:h-0 hover:before:w-full hover:before:h-full ">
                    <a href="#get-early-access ">GET EARLY ACCESS</a>
                </button>
            </div>
            <div className="flex-1 self-end">
                <LazyLoadImage src="./hero.png"
                    width={(windowWidth.innerWidth < 568) ? "100%" : 600}
                    height={(windowWidth.innerWidth < 568) ? "100%" : 400}
                    effect="blur"
                    alt=""
                />
            </div>
        </div>
    )
}