import React, { use } from 'react';
import CardElement from '../CardElement';

const CardData = ({ dataPromises, carts, setCarts }) => {
  const cardData = use(dataPromises)
  
 
  return (

    <div className='grid grid-cols-1 container mx-auto md:grid-cols-2 container mx-auto lg:grid-cols-3 gap-6 container mx-auto'>

      {cardData.map(data => (
      <CardElement key={data.id} data={data} carts={carts} setCarts={setCarts}/>
      ))}
    </div>
  );
};

export default CardData;