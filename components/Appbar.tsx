"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { PrimaryButton } from './Button';
import { useRouter } from 'next/navigation';

const Appbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(!!session?.user);
  }, [session]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut({ redirect: false });
      setIsSignedIn(false); 
      router.push('/');
    } catch (error) {
      console.error("Sign out error:", error);
      setIsSigningOut(false); 
    }
  };

  return (
    <div className='border-b px-2 py-2 flex justify-between'>
      <div className='text-xl font-bold flex flex-col justify-center'>
        NexTrade
      </div>
      <div className='flex flex-row justify-center gap-3'>
        {isSignedIn && (
          <span className='font-medium pt-4'>
            Welcome, {session?.user?.name?.split(' ')[0]}
          </span>
        )}
        <div className='pt-2'>
          {isSignedIn && !isSigningOut ? (
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
