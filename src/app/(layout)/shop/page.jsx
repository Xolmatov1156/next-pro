import Image from 'next/image';
import React from 'react';
import Next from '../../../assets/next.svg'
import Filter from '../../../assets/filter.svg'
import Dots from '../../../assets/dots.svg'
import View from '../../../assets/view.svg'
import Shop1 from '../../../assets/shop1.png'
import Shop2 from '../../../assets/shop2.png'
import Shop3 from '../../../assets/shop3.png'
import Shop4 from '../../../assets/shop4.png'

const Shop = () => {
  return (
    <div>
      <div className='flex justify-center items-center back h-[316px]'>
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
      <div className='w-screen h-[100px] bg-[#F9F1E7] flex items-center px-[100px]'>
        <div className='flex'>
        <Image src={Filter}  alt='filter'/>
          <p className='font-semibold ml-[12px]'>Filter</p>
        <Image src={Dots}  alt='dots' className='mx-[24px]'/>
        <Image src={View}  alt='view' className='mr-[30px]'/>
        <div>
          <p className='font-semibold pl-[34px] border-l-[2px] border-[#9F9F9F]'>Showing 1–16 of 32 results</p>
        </div>
        </div>
        <div className='ml-[348px] flex space-x-[30px]'>
          <label>
            Show
            <input type="number" className='w-[35px] h-[35px] ml-[17px] text-gray-500 text-center' placeholder='16'/>
          </label>
          <label>
            Short by
            <input type="text" className='w-[188px] h-[35px] ml-[17px] text-gray-500 pl-[30px]' placeholder='Default'/>
          </label>
        </div>
      </div>
      <ul className='mt-[63px] w-[1236px] h-[100px] mx-auto flex flex-wrap gap-[30px] space-y-[40px]'>
        <li className='flex flex-col w-[285px] h-[446px] mt-[40px] bg-[#F4F5F7]'>
          <Image src={Shop1} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Syltherine</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 3.500.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop2} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Leviosa</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop3} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Lolito</h3>
          <span className='text-[#898989] my-[10px]'>Luxury big sofa</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 7.000.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 14.000.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop4} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Respira</h3>
          <span className='text-[#898989] my-[10px]'>Outdoor bar table and stool</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] mt-[40px] bg-[#F4F5F7]'>
          <Image src={Shop1} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Syltherine</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 3.500.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop2} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Leviosa</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop3} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Lolito</h3>
          <span className='text-[#898989] my-[10px]'>Luxury big sofa</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 7.000.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 14.000.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop4} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Respira</h3>
          <span className='text-[#898989] my-[10px]'>Outdoor bar table and stool</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] mt-[40px] bg-[#F4F5F7]'>
          <Image src={Shop1} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Syltherine</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 3.500.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop2} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Leviosa</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop3} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Lolito</h3>
          <span className='text-[#898989] my-[10px]'>Luxury big sofa</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 7.000.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 14.000.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop4} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Respira</h3>
          <span className='text-[#898989] my-[10px]'>Outdoor bar table and stool</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] mt-[40px] bg-[#F4F5F7]'>
          <Image src={Shop1} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Syltherine</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 3.500.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop2} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Leviosa</h3>
          <span className='text-[#898989] my-[10px]'>Stylish cafe chair</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 2.500.000</p>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop3} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Lolito</h3>
          <span className='text-[#898989] my-[10px]'>Luxury big sofa</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 7.000.000</p>
            <span className='text-[#B0B0B0] line-through'>Rp 14.000.000</span>
          </div>
          </div>
        </li>
        <li className='flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]'>
          <Image src={Shop4} alt='shop1'/>
          <div className='mt-[16px] px-[17px]'>
          <h3 className='text-[24px] font-semibold'>Respira</h3>
          <span className='text-[#898989] my-[10px]'>Outdoor bar table and stool</span>
          <div className='flex space-x-[16px] items-center'>
            <p className='font-semibold text-[20px]'>Rp 500.000</p>
          </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Shop;
