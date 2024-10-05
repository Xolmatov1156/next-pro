import Image from 'next/image';
import React from 'react';
import Bg from '../../../assets/bg.png'
import Next from '../../../assets/next.svg'
import Logo from '../../../assets/small-logo.svg'

const Contact = () => {
  return (
    <div className='relative flex justify-center items-center h-[316px]'>
      <Image src={Bg} alt='bg' className='w-screen absolute h-[316px]'/>
      <div>
        <Image src={Logo}  className='mx-auto' alt='logo'/>
      <h2><strong className='text-[48px] text-black'>Contact</strong></h2>
      <div className='flex ml-[5px] justify-center'>
        <p><strong>Home</strong>
        </p>
        <Image src={Next} alt='next' />
        <p>Contact</p>
      </div>
      </div>
      </div>
  );
};

export default Contact;
