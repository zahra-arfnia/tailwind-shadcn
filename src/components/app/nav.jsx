import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Nav() {
  return (
    <div className="flex items-center justify-between p-4 ">


<div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiMenu className="text-4xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 ml-4 ">
            <div className="mb-3 border-b-2">
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Blog</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
            </div>
            <div>
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>DropDown Submenu</DropdownMenuItem>
            <DropdownMenuItem>404 Page</DropdownMenuItem>
            </div>
            <DropdownMenuItem className="mt-2 flex items-center justify-around">
              <Button className=" bg-white text-black hover:bg-slate-50 p-2">
                log in
              </Button>
               <Button className=" p-2">sign up</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

     
      <div className="flex gap-1">
        <p className="font-bold text-lg">tailwind</p>
        <p className="text-lg">css</p>
      </div>

     
      <div className="hidden lg:flex gap-6">
    
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            Features
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another Action</DropdownMenuItem>
            <DropdownMenuItem>DropDown Submenu</DropdownMenuItem>
            <DropdownMenuItem>404 Page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>

 
      <div className="hidden lg:flex gap-2">
        <Button className="bg-white text-black hover:bg-slate-50 p-3 px-4">
          log in
        </Button>
        <Button className="p-3">sign up</Button>
      </div>

      
    </div>
  );
}
