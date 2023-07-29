
import List from "./list";

export default function Why() {
    return (
        <div className="flex px-20 text-white py-20 gap-20">
            <div className="flex flex-col flex-1 pt-10 gap-12 items-center" id="why-crater">
                <h1 className="text-[38px] leading-tight font-medium">Why Crater ?</h1>
                <div className="flex max-w-6xl">
                    <ul className="px-10 py-16 rounded-l-md bg-[#2c372ea9] flex flex-col gap-5 flex-1 w-full justify-between">
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
                    <ul className="px-10 py-16 rounded-r-md bg-[#1f2921b0] flex flex-col gap-5 flex-1 w-full justify-between">
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