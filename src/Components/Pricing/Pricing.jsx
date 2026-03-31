import React, { use } from 'react';

const Pricing = ({ cardPromises }) => {
    const card = use(cardPromises);

    return (
        <div className='px-6 py-6'>
            <div>
                <h2 className='font-bold text-4xl text-center py-3'>Simple, Transparent Pricing</h2>
                <p className='font-semibold text-md text-center text-gray-500 pb-9'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
                {card.map((price) => (
                    <div key={price.id} className=" bg-base-100 shadow-xl border max-h-max rounded-xl bg-gradient-to-r from-zinc-100 to-gray-200 border-cyan-900 ">
                        <div className="card-body">
                            <span className="badge badge-xs badge-warning">{price.tagType}</span>
                            <div className='space-y-2'>
                                <h2 className="text-3xl font-bold">{price.name}</h2>
                                <div>
                                    <span className="text-2xl font-bold">${price.price}</span>
                                    <span className='text-gray-500'>/{price.period}</span>
                                </div>
                            </div>

                            <ul className="mt-6 flex flex-col gap-3 text-gray-500">
                                {price.features.map((feature, index) => (
                                    <li key={index} className={`flex items-start ${!feature.isAvailable ? 'opacity-40' : ''}`}>
                                        
                                        {feature.isAvailable ? (
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 shrink-0 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}

                                        <span className={`text-md leading-tight ${!feature.isAvailable ? 'line-through' : ''}`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <button className="btn btn-primary btn-block h-[50px] rounded-full text-2xl items-center">
                                    {price.button}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;