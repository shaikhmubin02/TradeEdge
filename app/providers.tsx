'use client'

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

const providers = ({children}:{children: React.ReactNode}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )  
}

export default providers