import React from 'react';
import bannerImg from '../../../../src/assets/products/banner.png';
import icon from '../../../../src/assets/products/Rectangle 3.png';
import { TbPlayerPlay } from 'react-icons/tb';
const Banner = () => {
    return (
        <div>
            <div className="relative min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-[#d6d2f3] border border-cyan-500/30 text-[#4f39f6] text-sm font-medium px-5 py-2 rounded-full">
                           <img src={icon} className="animate-ping" />   New: AI-Powered Tools Available
                        </div>


                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tighter text-[#4f39f6]">
                           Supercharge Your
                            <br />
                            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent text-6xl">
                        Digital Workflow
                    </span>
                </h1>

                <p className="text-lg text-zinc-700 max-w-lg">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                     </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-gradient-to-r from-[#4f39f6] to-[#8a10a8] hover:bg-[#220bcb] transition-all px-4 py-4 rounded-[50px] font-semibold text-lg shadow-md shadow-cyan-500/30 flex items-center gap-3 group text-white cursor-pointer">
                       Explore Products
                        
                    </button>
                     <button className="border border-2 border-[#220bcb] px-4 py-4 rounded-[50px] font-semibold text-lg flex items-center gap-3 group text-black">
                      <span className="group-hover:translate-x-1 transition "><TbPlayerPlay/></span>
                        Watch Demo
                       
                    </button>
                </div>

            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                    <img
                        className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse "
                        src={bannerImg}
                        alt="AI Models Banner"
                    />
                </div>
            </div>
        </div>
            </div >



        </div >
    );
};

export default Banner;