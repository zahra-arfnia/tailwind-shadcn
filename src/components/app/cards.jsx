export default function Cards() {
    return (
        <div className=" flex flex-wrap md:flex-row flex-col">
        <div className="md:w-2/6  mt-12 card flex gap-3 hover:shadow-2xl w-full">
            
            <img class="w-10 h-10" src="https://img.icons8.com/stickers/100/performance-2.png" alt=""></img>


            <div className=" w-full flex flex-col ">
                <div className="flex justify-start text-left font-medium w-1/2 text-xl">
                    Performance Optimization
                </div>
                <div className="flex justify-start text-left text-sm w-3/4 text-slate-600">
                    Enhancing React apps by minimizing re-renders, lazy loading components, 
                    and utilizing memoization techniques for improved performance and speed
                </div>
            </div>
        </div>

        <div className="w-full md:w-2/6 mt-12 card flex gap-3 hover:shadow-2xl	">
            
        <img class="md:w-10  h-10" src="https://img.icons8.com/nolan/64/request-service.png" alt=""></img>


            <div className=" w-full flex flex-col ">
                <div className="flex justify-start text-left font-medium w-1/2 text-xl">
                Redux State Management
                </div>
                <div className="flex justify-start text-left text-sm w-3/4 text-slate-600">
                Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.
                </div>
            </div>
        </div>


        <div className="w-full md:w-2/6 mt-12 card flex gap-3 hover:shadow-2xl	">
            
        <img class="w-10 h-10" src="https://img.icons8.com/color/48/design--v1.png" alt=""></img>


            <div className=" w-full flex flex-col ">
                <div className="flex justify-start text-left font-medium w-2/3 text-xl">
                
Tailwind Responsive Design
                </div>
                <div className="flex justify-start text-left text-sm w-3/4 text-slate-600">
                Create responsive web interfaces effortlessly using Tailwind CSS utility classes, ensuring a consistent experience across all device sizes.
                </div>
            </div>
        </div>


        <div className="w-full md:w-2/6 mt-12 card flex gap-3 hover:shadow-2xl	">
            
        <img class="w-10 h-10" src="https://img.icons8.com/3d-fluency/94/deployment.png" alt=""></img>


            <div className=" w-full flex flex-col ">
                <div className="flex justify-start text-left font-medium w-3/4 text-xl">
                Vite Production Deployment
                </div>
                <div className="flex justify-start text-left text-sm w-3/4 text-slate-600">
                Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.
                </div>
            </div>
        </div>


        <div className="w-full md:w-2/6 mt-12 card flex gap-3 hover:shadow-2xl	">
            
        <img class="w-10 h-10" src="https://img.icons8.com/color/48/combine.png" alt=""></img>


            <div className=" w-full flex flex-col ">
                <div className="flex justify-start text-left font-medium w-1/2 text-xl">
                
React Library Integration
                </div>
                <div className="flex justify-start text-left text-sm w-3/4 text-slate-600">
                Seamlessly add functionality to React applications by integrating third-party libraries, ensuring smooth interactions and enhanced capabilities.
                </div>
            </div>
        </div>


        <div className="w-full md:w-2/6 mt-12 card flex gap-3 hover:shadow-2xl	">
            
        <img class="w-10 h-10" src="https://img.icons8.com/color/48/checked-identification-documents.png" alt=""></img>


            <div className=" w-full flex flex-col ">
                <div className="flex justify-start text-left font-medium w-1/2 text-xl">
                
                React App Authentication
                </div>
                <div className="flex justify-start text-left text-sm w-3/4 text-slate-600">
                Secure React applications with robust authentication mechanisms, using libraries like Firebase, Auth0, or custom JWT-based solutions.
                </div>
            </div>
        </div>
       </div> 
    );
}