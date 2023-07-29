import Card from "./card";

export default function Community() {
    return (
        <div className="flex text-white xl:px-20 lg:px-16 md:px-10 px-6  lg:py-20 md:py-16 py-12 lg:gap-20 gap-8 ">
            <div className="flex flex-col flex-1 md:pt-10 pt-5 gap-12 items-center">
                <h1 className="lg:text-[38px] md:text-[34px] text-[27px] leading-tight font-medium">10,000 + Users have signed up!</h1>
                <div className="flex">
                    <div className="flex gap-10">
                        <Card detail={"I have been able to increase my Youtube views by more than 30% by using their Views Predictor."} name={"Mitansh"} work={"Youtuber"} avatar={"./mitansh.jpeg"} />
                        <Card detail={"Crater is the ultimate all-in-one solution. I can't imagine going back to managing everything manually."} name={"Chintan"} work={"Solo Entreprenur"} avatar={"./chintan.jpeg"} />
                        <Card detail={"I was skeptical at first, but after using Crater for just a few weeks, I'm completely sold. The AI-powered features are incredibly accurate and make my life so much easier."} name={"Manisha"} work={"Architect"} avatar={"./Manisha.jpeg"} />
                        <Card detail={"The amount of money they saved for me was massive, didn't know AI could reply like me and better."} name={"Pallavi"} work={"Freelancer"} avatar={"./pallavi.jpeg"} />
                    </div>
                </div>
            </div>
        </div>
    )
}