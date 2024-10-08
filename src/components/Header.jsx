"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import AddUser from '../assets/add-user.svg';
import Search from '../assets/search.svg';
import Like from '../assets/like.svg';
import Shop from '../assets/shop.svg';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return path === pathname ? "text-gray-500 underline" : "";
  };

  return (
    <header className='w-[1286px] ml-[54px] flex py-[30px] items-center'>
      <Image src={Logo} alt="logo" />
      <div className="ml-[266px] w-[430px] flex justify-between">
        <Link href='/' className={`hover:text-gray-500 hover:underline ${isActive('/')}`}>Home</Link>
        <Link href='/shop' className={`hover:text-gray-500 hover:underline ${isActive('/shop')}`}>Shop</Link>
        <Link href='/contact' className={`hover:text-gray-500 hover:underline ${isActive('/contact')}`}>Contact</Link>
        <Link href='/blog' className={`hover:text-gray-500 hover:underline ${isActive('/blog')}`}>Blog</Link>
      </div>
      <div className="ml-[158px] flex space-x-[45px]">
        <Image src={AddUser} alt="add user" className='cursor-pointer' />
        <Image src={Search} alt="search" className='cursor-pointer' />
        <Image src={Like} alt="like" className='cursor-pointer' />
        <Image src={Shop} alt="shop" className='cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
