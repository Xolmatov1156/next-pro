import Image from 'next/image';
import React from 'react';
import Next from '../../../assets/next.svg'

const Shop = () => {
  return (
    <div className='relative flex justify-center items-center back h-[316px]'>
      <div>
      <h2><strong className='text-[48px] text-black'>Shop</strong></h2>
      <div className='flex ml-[5px]'>
        <p><strong>Home</strong>
        </p>
        <Image src={Next} alt='next' />
        <p>Shop</p>
      </div>
      </div>
      </div>
  );
};

export default Shop;
