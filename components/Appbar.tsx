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
    setIsSigningOut(true); // Immediately change the button to "Sign In"
    try {
      await signOut({ redirect: false }); // Prevent NextAuth's default redirect
      router.push('/'); // Manually redirect after updating the UI
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className='border-b px-2 py-2 flex justify-between'>
      <div className='text-xl font-bold flex flex-col justify-center'>
        NexTrade
      </div>
      <div>
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
  );
};

export default Appbar;
