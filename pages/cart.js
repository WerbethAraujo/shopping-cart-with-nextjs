import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartState';
import Navbar from '../components/Navbar';
import CartList from '../components/CartList';

const cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  return (
    <div>
      <Navbar />

      <div className='container mx-auto'>
        {cartItem.length <= 0 ? (
          <h1 className='text-center text-4xl mt-32'>
            Seu carrinho esta vazio 😭
          </h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} data={item} />)
        )}
      </div>
    </div>
  );
};

export default cart;
