import Head from 'next/head';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

import data from '../data.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />

      <section className='container mx-auto'>
        <h1 className='text-4xl mt-4 text-center'>Nossos Produtos</h1>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
