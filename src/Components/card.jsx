
export default function Card(props) {
    return (
        <div className="flex flex-col bg-[#0f1711]  px-8 py-5 gap-8 justify-between xl:w-[400px]  shadow-[10px_10px_0_-2px_rgba(0,0,0,0.72)]">
            <p className="w-full">{props.detail}</p>
            <div className="flex items-center gap-2 w-full">
                <div className="w-12">
                    <img src={props.avatar} alt="" className="w-full rounded-full" />
                </div>
                <div className="flex flex-col leading-tight text-[15px]">
                    <p className="font-medium">{props.name}</p>
                    <p className="font-light text-[13px]">{props.work}</p>
                </div>
            </div>
        </div>
    )

}