import { Button } from "../ui/button";
export default function Lastsection() {
  return (
    <div className=" flex flex-col mt-8 gap-14">
      <div className="flex flex-col items-center gap-8">

        <p className="font-medium">Works with your technologies</p>
        <div className="flex items-center gap-2 md:gap-20">
        <img src="src/assets/images/js.png" alt="" className=" md:w-14  h-14" />
        <img src="src/assets/images/ts.png" alt="" className=" md:w-11  h-11" />
        <img src="src/assets/images/react.svg" alt="" className=" md:w-11  h-11" />
        <img src="src/assets/images/redux.png" alt="" className=" md:w-11  h-11" />
        <img src="src/assets/images/tailwind.png" alt="" className=" md:w-11  h-11" />
        <img src="src/assets/images/nextjs.png" alt="" className=" md:w-11  h-11" />
        </div>

        <div className="bg-black w-8/12 h3/4 rounded-xl py-16 flex flex-col gap-11 justify-center items-center">
        <p className="text-xl lg:text-6xl font-medium text-white" >Build faster websites</p>
        <p className="text-xs lg:text-base text-white px-2">Pull content from anywhere and serve it fast with Astro's next-gen island architecture</p>
        <Button className="bg-white text-black hover:bg-slate-50 p-3 px-4 w-5/12 md:w-2/12" >Get stated</Button>
       
        </div>

      </div>



      <div>
        <p className="text-xs lg:text-base ">Copyright © 2024. All rights reserved</p>
        <p className="text-xs lg:text-base ">Made by Web3Templates</p>
      </div>
    </div>
  );
}
