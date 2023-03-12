import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='bg-white pt-4 shadow-2xl'>
      <img
        className='mx-auto w-[350px] h-[200px] object-contain'
        src={product.image}
        alt={product.name}
      />
      <div className='mt-4 p-6'>
        <div className='flex items-center justify-between text-[26px]'>
          <h1>{product.name}</h1>
          <h3 className='font-bold text-4xl'>{`R$ ${product.price}`}</h3>
        </div>
        <button className='transition duration-500 ease bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800'>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
