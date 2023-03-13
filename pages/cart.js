import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartState';
import Navbar from '../components/Navbar';
import CartList from '../components/CartList';

import axios from 'axios';

const cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  async function createCheckoutSession() {
    axios
      .post('api/checkout_sessions', { cartItem })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  }

  function totalPrice() {
    let total = 0;

    cartItem.forEach((item) => (total += item.price * item.quantity));

    return total;
  }

  return (
    <div>
      <Navbar />
      <div className='container mx-6'>
        <h1 className='text-4xl mt-4 '> 🚗 Seu carrinho:</h1>
      </div>
      <div className='container mx-auto'>
        {cartItem.length <= 0 ? (
          <h1 className='text-center text-4xl mt-32'>
            Seu carrinho esta vazio!😭
          </h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} data={item} />)
        )}

        {cartItem.length > 0 && (
          <div className='max-w-[800px] mx-auto mt-4'>
            <h2 className='text-right text-3xl font-bold'>{`Total: ${totalPrice()}`}</h2>
            <button
              onClick={createCheckoutSession}
              className='text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800'
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default cart;
