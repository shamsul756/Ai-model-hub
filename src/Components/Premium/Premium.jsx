import React from 'react';

const Premium = () => {
    return (
        <div className='container mx-auto space-y-5'>
            <h2 className='font-bold text-4xl text-center'>Premium Digital Tools</h2>
            <p className='font-semibold text-gray-500 text-center max-w-[550px] mx-auto'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            <div className='flex gap-2 py-8 items-center justify-center'>
            <button className="bg-gradient-to-r from-[#4b19fd] to-[#3051e1] btn btn-primary text-2xl rounded-full h-[60px]">Products</button>
            <button className="bg-gradient-to-r from-[#4b19fd] to-[#3051e1] btn btn-primary  text-2xl rounded-full h-[60px]">Cart(2)</button>
            </div>
        </div>
    );
};

export default Premium;