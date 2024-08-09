'use client'

import { useSession } from 'next-auth/react';
import React from 'react';

const UserProfile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
        <p>User ID: {session.user?.id}</p>
        {session.user?.image && <img src={session.user.image} alt="User Profile" />}
      </div>
    );
  }

  return
};

export default UserProfile;
