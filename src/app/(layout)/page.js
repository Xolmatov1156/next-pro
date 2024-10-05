import Image from 'next/image';
import HomeImg from '../../assets/home.png'
export default function Home() {
  return (
    <>
    <Image src={HomeImg} alt='bg' className='w-screen h-[716px]'/>
    </>
  );
}
