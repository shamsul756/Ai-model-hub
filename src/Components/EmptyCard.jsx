import React from 'react';
import { MdOutlineHourglassEmpty, MdRemoveShoppingCart } from 'react-icons/md';

const EmptyCard = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
    };

    const handleDelete = (item)=>{
        const filterArray = carts.filter(c=> c.id !== item.id)
        setCarts(filterArray)

    }

    return (
        <div className='space-y-5'>
            {carts.length === 0 ? (
              
                <div className='container mx-auto space-y-5'>
                    <div>
                        <MdOutlineHourglassEmpty className='text-9xl justify-center items-center mx-auto text-cyan-950' />
                    </div>
                    <h1 className='text-3xl md:font-bold text-6xl text-center text-cyan-950'>No card selected</h1>
                    <h3 className='text-2xl text-gray-400 py-9 text-center'>Please select a card to continue</h3>
                </div>
            ) : (
                
                <>
                    {carts.map(item => (
                        <div key={item.id}>
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
                                    <MdRemoveShoppingCart onClick={() => handleDelete(item)} className='text-4xl text-gray-300 hover:text-red-400 cursor-pointer transition-colors' />
                                </div>
                            </div>
                        </div>
                    ))}

                    
                    <div className='container mx-auto flex bg-black text-white justify-between px-4 py-5 rounded-2xl'>
                        <h2 className='font-bold text-5xl text-yellow-300'>Total</h2>
                        <p className='font-semibold text-4xl text-amber-500'>${totalPrice}</p>
                    </div>

                    <div className='container mx-auto'>
                        <button
                            onClick={handlePayment}
                            className='font-bold text-3xl bg-gradient-to-r from-[#6102fa] to-[#2e12c7] py-4 px-4 w-full text-center rounded-full text-white cursor-pointer'
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default EmptyCard;