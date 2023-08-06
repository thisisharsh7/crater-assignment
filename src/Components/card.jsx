import { useState, useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getWindowWidth, slideUpVariants } from './animate';
import { motion, useScroll } from 'framer-motion';


export default function Card({ detail, title, imgSrc, iwidth, iheight }) {
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
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    return (
        <motion.div ref={ref} className="flex flex-col backdrop-blur-2xl background-transparent gap-3   px-8 py-5  justify-between xl:max-w-md lg:max-w-sm md:max-w-[320px]   shadow-[0_3px_17px_9px_rgba(0,0,0,0.41)] items-center text-center" style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
        }}>
            <LazyLoadImage src={imgSrc}
                width={(windowWidth.innerWidth < 568) ? "100%" : iwidth}
                height={(windowWidth.innerWidth < 568) ? "100%" : iheight}
                effect="blur"
                alt=""
            />
            <div className="flex flex-col">
                <p className="lg:text-[23px] text-[19px] font-medium">{title}</p>
                <p className="w-full lg:text-[16px] text-[13px] pt-3" >{detail}</p>
            </div>
        </motion.div>
    )
}
