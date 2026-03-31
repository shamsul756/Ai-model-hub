import React from 'react';
import { MdOutlineHourglassEmpty, MdRemoveShoppingCart } from 'react-icons/md';

const EmptyCard = ({ carts }) => {
    console.log(carts);
    return (
        <div className='space-y-5'>
            {
                carts.map(item =>
                    <div key={item.id}>
                        {/* card demo */}
                   <div className="card bg-base-100 w-full shadow-xl border border-gray-200 rounded-2xl p-4 border-red-800 container mx-auto">
    <div className='flex items-center gap-4'>
        <img
            className='h-[80px] w-[80px] rounded-xl object-contain bg-gray-50 p-1'
            src={item.img}
            alt={item.name}
        />
        <div className="flex-1">
            <h2 className="font-bold text-3xl text-cyan-950">{item.name}</h2>
            <p className='font-semibold text-3xl text-indigo-600'>${item.price}</p>
        </div>
        <MdRemoveShoppingCart className='text-4xl text-gray-300 hover:text-red-400 cursor-pointer transition-colors' />
    </div>
</div>
                        {/* card demo end */}
                    </div>
                )
            }
            <div className='container mx-auto flex bg-black text-white justify-between px-4 py-5' >
            <h2 className='font-bold text-5xl text-yellow-300'>Total</h2>
            <p className='font-semibold text-4xl text-amber-500'>$</p>
            </div>
            <div className='container mx-auto space-y-5'>
                <div>
                    <MdOutlineHourglassEmpty className='text-9xl justify-center items-center mx-auto text-cyan-950' />
                </div>
                <h1 className='text-3xl md:font-bold text-6xl text-center text-cyan-950'>No card selected</h1>
                <h3 className='text-2xl text-gray-400 py-9 text-center'>Please select a card to continue</h3>

            </div>
            
        </div>
    );
};

export default EmptyCard;