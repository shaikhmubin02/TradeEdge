// components/Hero.tsx
"use client";

import { useRouter } from 'next/navigation';
import { SecondaryButton } from './Button';
import { signIn, useSession } from 'next-auth/react';


const Hero = () => {

  const session = useSession();
  const router = useRouter(); 

  return (
    <div>
      <div className='flex flex-col md:flex-row text-3xl md:text-4xl font-bold justify-center pt-10 md:pt-20 text-center md:text-left'>
         The Indian Cryptocurrency 
        <span className='text-blue-600 mx-0 md:mx-2'> Revolution</span>
      </div>
      <div className='flex text-black-900 justify-center pt-6'>
        Create a frictionless wallet with just a Google Account.
      </div>
      <div className='flex text-black-900 justify-center pt-1'>
        Convert your INR into Cryptocurrency
      </div>
      <div className='flex text-black-900 justify-center pt-6'>
        {session.data?.user ? (
          <SecondaryButton onClick={() => {router.push('/dashboard')}}>
            Go to Dashboard
          </SecondaryButton>
        ) : (
          <SecondaryButton onClick={() => signIn('google')}>
            Login with Google
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};

export default Hero;
