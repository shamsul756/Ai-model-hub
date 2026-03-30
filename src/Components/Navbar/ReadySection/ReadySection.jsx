import React from 'react';

const ReadySection = () => {
    return (
        <div className='bg-gradient-to-r from-[#433799] to-[#6d0fdf] py-[100px]'>
            <div className='container mx-auto'>
            <h1 className='text-2xl md:text-5xl text-center p-3 m-3 text-white'>Ready to Transform Your Workflow?</h1>
            <p className='text-white text-center p-3'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            <div className='flex gap-3 justify-center items-center p-2'>
                 <button className="border bg-white  transition-all px-7
                 py-2 rounded-[50px] font-semibold text-2xl shadow-cyan-500/30 flex items-center group text-[#4f39f6] cursor-pointer">View Pricing</button>
                <button  className="border border-white px-6 py-2 rounded-[50px] font-semibold text-2xl flex items-center  group text-white">Explore Products</button>
               
            </div>
            <p className='text-white text-center p-5' >14-day free trial • No credit card required • Cancel anytime</p>
        </div>
        </div>
    );
};

export default ReadySection;