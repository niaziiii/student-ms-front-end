import React from 'react'
import { AdminHomePage, UserHomePage } from '../components';

const HomePage = ({ user }) => {
  if (user.role === 'admin') return <AdminHomePage />
  if (user.role === 'user') return <UserHomePage user={user} />
}

export default HomePage
