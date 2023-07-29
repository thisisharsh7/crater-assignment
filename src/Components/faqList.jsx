import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function FaqList(props) {
    const sumRef = useRef()
    const rotateRef = useRef()
    const sumShow = () => {
        sumRef.current.classList.toggle('hidden')
    }
    function showSummary() {
        setTimeout(sumShow, 300)
        rotateRef.current.classList.toggle('rotate-180')
    }
    return (
        <div className="border-[1.5px] transition-all duration-500 ">
            <div className=" relative flex flex-col gap-3 px-4 py-3 text-1em  ">
                <div className="flex justify-between text-[2em] z-10 ">
                    <p>Q: {props.quest}</p>
                    <button className="text-white text-[1.5em] items-start transition-all duration-500" ref={rotateRef} onClick={showSummary} >
                        <Icon icon="mingcute:down-fill" />
                    </button>

                </div>
                <p className="text-[1.75em] hidden " ref={sumRef}>{props.ans}</p>
            </div>
        </div>
    )
}