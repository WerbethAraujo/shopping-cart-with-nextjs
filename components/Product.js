import React from 'react';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartState';

const Product = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  function handleAddToCart() {
    if (cartItem.findIndex((prod) => prod.id === product.id) === -1) {
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }

    toast(`${product.name} adicionado ao carrinho ✅`, {
      style: {
        background: '#99ff00',
        color: '#fff',
        fontWeight: 'bold',
      },
    });
  }

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
        <button
          onClick={handleAddToCart}
          className='transition duration-500 ease bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800'
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
