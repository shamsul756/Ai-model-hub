import React, { use } from 'react';

const CardData = ({ dataPromises }) => {
    const cardData = use(dataPromises)
    console.log(cardData);
    return (
        <div>
           
         {cardData.map(data => (
  <div key ={data.id}>
    {/* card desing start  */}
<div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body relative flex gap-5">
    <span className="badge badge-xs badge-warning top-3 right-4 absolute">Most Popular</span>
   
    <div className="">
      <img src={data.img} alt="icon" />
      <h2 className="text-4xl font-bold my-3">{data.name}</h2>
      <p className='text-md text-gray-400 py-2'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
      
      <p className="text-3xl font-bold">$29 <span className='text-xl text-gray-400'>/Mo</span></p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-500 ">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-md'>Unlimited AI generations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-md'>50+ writing templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-md'>Grammar checker</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="bg-gradient-to-r from-[#4b19fd] to-[#3051e1] btn btn-primary btn-block text-2xl rounded-full h-[60px]">Buy Now</button>
    </div>
  </div>
</div>


   {/* card desing end  */}
  </div>
))}
        </div>
    );
};

export default CardData;