"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import {PrimaryButton, SecondaryButton} from './Button';

const Appbar = () => {

  const session = useSession();
  return (
    <div className='border-b px-2 py-2 flex justify-between'>
        <div className='text-xl font-bold flex flex-col justif-center'>
            NexTrade
        </div>
        <div>
            {session.data?.user ? <PrimaryButton onClick={()=>  
              signOut()
            }>Logout</PrimaryButton> : 
            <PrimaryButton onClick={()=>  
              signIn('google')
            }>Signin</PrimaryButton> }
        </div>
    </div>
  )
}

export default Appbar