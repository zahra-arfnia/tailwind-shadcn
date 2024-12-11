import { Button } from "../ui/button";

export default function Section1() {
    return (
        <>
        <div className="flex flex-wrap-reverse md:flex-nowrap  items-center md:items-center">
            
            <div className="w-full md:w-7/12 flex flex-col items-start justify-between gap-12 md:gap-11">
                <div className="flex flex-col items-start">
                    <div className="text-3xl lg:text-6xl font-extrabold">Scalable Apps</div>
                    <div className="text-3xl lg:text-6xl font-extrabold">with frameworks</div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate et neque</div>
                    <div className="text-xs lg:text-base">earum iste hic consequatur nulla deserunt architecto numquam!</div>
                </div>
                <div className="flex gap-4 md:flex-row flex-col w-full">
                    <Button className="px-4 py-5 l">Download for Free</Button>
                    <Button className="bg-white text-black hover:bg-slate-50 py-5 px-5">Github repo</Button>
                </div>
            </div>
            
            
            <img
                src="src/assets/images/hero-source.svg"
                alt=""
                className=" md:w-5/12  h-4/12"
            />
           
        </div>

        <div className="flex flex-col md:items-start mt-12 gap-1 ml-6 items-center">
            <p className="text-xl lg:text-4xl font-bold">Everything you need to start a website</p>
            <p className="text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequuntur.</p>
        </div>
        </>
    );
}
