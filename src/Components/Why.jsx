
import List from "./list";

export default function Why() {
    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8">
            <div className="flex flex-col flex-1 md:pt-10 pt-5 gap-12 items-center" id="why-crater">
                <h1 className="lg:text-[38px] md:text-[34px] text-[27px] leading-tight font-medium">Why Crater ?</h1>
                <div className="flex max-w-6xl sm:flex-row flex-col">
                    <ul className="lg:px-10 md:px-5 sm:px-3 px-5 lg:py-16 py-12 sm:rounded-l-md sm:rounded-t-none rounded-t-md bg-[#2c372ea9] flex flex-col gap-5 flex-1 w-full justify-between">
                        <li className="sm:text-center text-left xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px] font-semibold tracking-wide pb-2 sm:pl-0 pl-8">Without Crater</li>
                        <li>
                            <List hText={"Manual Business Management"} pText={"Spend hours, Limited focus on Creativity and struggle to optimize margins"} lIcon={"material-symbols:error-outline-rounded"} Iclr={"text-red-500"} />
                        </li>
                        <li>
                            <List hText={"Manual Social Media Management"} pText={"Spend hours, Limited focus on Creativity and struggle to optimize margins"} lIcon={"material-symbols:error-outline-rounded"} Iclr={"text-red-500"} />
                        </li>
                        <li>
                            <List hText={"Manual Financial Management"} pText={"Spend hours, Limited focus on Creativity and struggle to optimize margins"} lIcon={"material-symbols:error-outline-rounded"} Iclr={"text-red-500"} />
                        </li>
                        <li>
                            <List hText={"Costly Solutions"} pText={"Spend hours, Limited focus on Creativity and struggle to optimize margins"} lIcon={"material-symbols:error-outline-rounded"} Iclr={"text-red-500"} />
                        </li>
                        <li>
                            <List hText={"Vulnerability to Cyber Threats"} pText={"Spend hours, Limited focus on Creativity and struggle to optimize margins"} lIcon={"material-symbols:error-outline-rounded"} Iclr={"text-red-500"} />
                        </li>
                    </ul>
                    <ul className="lg:px-10 md:px-5 sm:px-3 px-5 lg:py-16 py-12 sm:rounded-r-md sm:rounded-b-none rounded-b-md bg-[#1f2921b0] flex flex-col gap-5 flex-1 w-full justify-between">
                        <li className="sm:text-center text-left xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px] font-semibold tracking-wide pb-2 sm:pl-0 pl-8">With Crater</li>
                        <li>
                            <List hText={"Automated Business Management"} pText={"Save time, Focus on creativity and increse margins by more than 30%"} lIcon={"material-symbols:check-circle-outline-rounded"} Iclr={"text-green-500"} />
                        </li>
                        <li>
                            <List hText={"AI-powered Social Media Management"} pText={"Manage multiple Social Media accounts, AI-powered replies and ML-powered views and revenue predictor"} lIcon={"material-symbols:check-circle-outline-rounded"} Iclr={"text-green-500"} />
                        </li>
                        <li>
                            <List hText={"AI-powered Financial Management"} pText={"Monitor and control finances and let AI file taxes in less than 10 minutes"} lIcon={"material-symbols:check-circle-outline-rounded"} Iclr={"text-green-500"} />
                        </li>
                        <li>
                            <List hText={"Affordability"} pText={"Cost-effective subscription plans and Value for money"} lIcon={"material-symbols:check-circle-outline-rounded"} Iclr={"text-green-500"} />
                        </li>
                        <li>
                            <List hText={"Cyber Threat Mitigation"} pText={"Protect against cyber threats and Enhanced security measures"} lIcon={"material-symbols:check-circle-outline-rounded"} Iclr={"text-green-500"} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}