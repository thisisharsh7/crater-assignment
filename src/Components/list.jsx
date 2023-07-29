import { Icon } from "@iconify/react";

export default function List(props) {
    return (
        <div className="flex items-start gap-4">
            <div className={`text-[34px] ${props.Iclr}`}><Icon icon={props.lIcon} /></div>
            <div className="flex flex-col items-start text-[15px] font-light gap-1">
                <h3 className="text-[18px] font-medium leading-tight tracking-wide">{props.hText}</h3>
                <p>{props.pText}</p>
            </div>
        </div>
    )
}