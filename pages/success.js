import React from 'react';
import Link from 'next/link';

const Success = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <div className='text-center'>
        <h1 className='text-8xl font-bold mb-5'>Obrigado!</h1>
        <p className='text-center text-2xl'>Pedido realizado com sucesso</p>

        <Link href='/'>
          <p className='bg-red-600 text-white py-4 px-12 mt-4 hover:bg-red-800 cursor-pointer'>
            Continue Comprando
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Success;
