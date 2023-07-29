import { Icon } from "@iconify/react";

export default function List(props) {
    return (
        <div className="flex items-start xl:text-[10px] lg:text-[8px] sm:text-[6px] text-[8px] sm:gap-4 gap-2">
            <div className={`sm:text-[3.8em] text-[28px] ${props.Iclr}`}><Icon icon={props.lIcon} /></div>
            <div className="flex flex-col items-start xl:text-[12px] lg:text-[10px] sm:text-[9px] text-[6px] font-light gap-1">
                <h3 className="text-[1.8em] font-medium leading-tight tracking-wide">{props.hText}</h3>
                <p className="sm:text-[1.3em] text-[9px]">{props.pText}</p>
            </div>
        </div>
    )
}