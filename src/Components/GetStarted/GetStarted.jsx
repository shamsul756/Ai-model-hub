import React from 'react';
import pack from '../../assets/products/package.png';
import user from '../../assets/products/user.png';
import rocket from '../../assets/products/rocket.png';

const GetStarted = () => {
    return (
        <div className='container mx-auto px-4 py-10'>
           <h2 className='text-5xl font-bold text-center'>Get Started in 3 Steps</h2>
           <p className='text-gray-500 text-center font-semibold py-5 my-5'>Start using premium digital tools in minutes, not hours.</p>
            {/* 3 Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                {/* Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 relative">
                    <span className="text-xs font-semibold text-[#d6d5df] bg-purple-600 px-3 py-1 rounded-full absolute -top-3 right-4">
                        01
                    </span>
                    <div className="flex items-center justify-center mb-5">
                        <img src={user} alt="user icon" className="w-[80px] h-[90px]" />
                    </div>
                    <h3 className="text-gray-800 font-bold text-xl mt-3 mb-2 text-center">Create Account</h3>
                    <p className="text-gray-500 text-sm">
                        Sign up for free in seconds. No credit <br /> card required to get started.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 relative">
                    <span className="text-xs font-semibold text-[#d6d5df] bg-purple-600 px-3 py-1 rounded-full absolute -top-3 right-4">
                        02
                    </span>
                    <div className="flex items-center justify-center mb-5">
                        <img src={pack} alt="package icon" className="w-[80px] h-[90px]" />
                    </div>
                    <h3 className="text-gray-800 font-bold text-xl mt-3 mb-2 text-center">Choose a Plan</h3>
                    <p className="text-gray-500 text-sm">
                        Pick the plan that fits your needs. <br /> Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 relative">
                    <span className="text-xs font-semibold text-[#d6d5df] bg-purple-600 px-3 py-1 rounded-full absolute -top-3 right-4">
                        03
                    </span>
                    <div className="flex items-center justify-center mb-5">
                        <img src={rocket} alt="rocket icon" className="w-[80px] h-[90px]" />
                    </div>
                    <h3 className="text-gray-800 font-bold text-xl mt-3 mb-2 text-center">Start Using AI</h3>
                    <p className="text-gray-500 text-sm text-center">
                        Access all frontier AI models instantly and <br /> boost your productivity.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;