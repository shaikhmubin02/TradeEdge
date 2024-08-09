import UserProfile from '@/components/UserProfile'
import React from 'react'
import Providers from '../providers'; 

const page = () => {
  return (
    <div>
      <div>Dashboard</div>
      <div>
        <Providers>
          <UserProfile />
        </Providers>
      </div>
    </div>
    
    
  )
}

export default page