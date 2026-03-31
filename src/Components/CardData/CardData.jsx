import React, { use } from 'react';

const CardData = ({ dataPromises }) => {
  const cardData = use(dataPromises)
  console.log(cardData);
  return (

    <div className='grid grid-cols-1 container mx-auto md:grid-cols-2 container mx-auto lg:grid-cols-3 gap-6 container mx-auto'>

      {cardData.map(data => (
        <div key={data.id}>
          {/* card design start  */}
          <div className="card w-full bg-base-100 shadow-xl border border-gray-300">
            <div className="card-body relative flex gap-5">
              <span className="badge badge-xs badge-warning top-3 right-4 absolute">{data.tag}</span>

              <div className="">
                <img src={data.img} alt="icon" />
                <h2 className="text-3xl font-bold my-3">{data.name}</h2>
                <p className='text-md text-gray-400 py-2'>{data.description}</p>

                <p className="text-3xl font-bold">${data.price} <span className='text-xl text-gray-400'>/{data.period}</span></p>
              </div>
              {/* --- feature design start  --- */}
              <ul className="mt-6 flex flex-col gap-3 text-gray-500">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className='text-md leading-tight'>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* feature style end  */}
              <div className="mt-6">
                <button className="bg-gradient-to-r from-[#4b19fd] to-[#3051e1] btn btn-primary btn-block text-2xl rounded-full h-[60px]">Buy Now</button>
              </div>
            </div>
          </div>
          {/* card design end  */}
        </div>
      ))}
    </div>
  );
};

export default CardData;