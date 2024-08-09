"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { PrimaryButton } from './Button';
import { useRouter } from 'next/navigation';

const Appbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true); 
    try {
      await signOut({ redirect: false }); 
      router.push('/'); 
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className='border-b px-2 py-2 flex justify-between'>
      <div className='text-xl font-bold flex flex-col justify-center'>
        NexTrade
      </div>
      <div className='flex flex-row justify-center gap-3'>
        <span className='font-medium pt-4'>Welcome, {session?.user.name?.split(' ')[0]}</span>
        <div className='pt-2'>
          {session?.user && !isSigningOut ? (
            <PrimaryButton onClick={handleSignOut}>
              Logout
            </PrimaryButton>
          ) : (
            <PrimaryButton onClick={() => signIn('google')}>
              Sign In
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
