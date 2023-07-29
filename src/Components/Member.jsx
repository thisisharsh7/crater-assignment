
export default function Member(props) {
    return (
        <div className="flex flex-col bg-[#0f1711] xl:text-[18px] sm:text-[16px] text-[12px] px-8 py-5 gap-8 justify-between shadow-[10px_10px_0_-2px_rgba(0,0,0,0.72)]">
            <p >{props.detail}</p>
            <div className="flex items-center gap-4 w-full">
                <div className="w-12">
                    <img src={props.avatar} alt="" className="w-full rounded-full" />
                </div>
                <div className="flex flex-col leading-tight gap-1 text-[1em]">
                    <p className="font-medium">{props.name}</p>
                    <p className="font-light text-[13px]">{props.work}</p>
                </div>
            </div>
        </div>
    )

}