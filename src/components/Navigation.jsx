import React from 'react'
import { Link } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'

const Navigation = ({ role }) => {
  const user = role;

  if (user.role === "admin") {
    return (
      <div className='w-full text-custom-blue'>
        <ul>
          <li className=' bg-custom-grey w-full p-4 px-8 font-bold border-b'><Link to='/' >Dashboard</Link></li>
          <li className=' bg-custom-grey w-full p-4 px-8 font-bold border-b flex items-center gap-2'><Link to='/users ' >Users </Link><FiUsers /></li>
          <li className=' bg-custom-grey w-full p-4 px-8 font-bold border-b flex items-center gap-2'><Link to='/group ' >Groups </Link><FiUsers /></li>
          <li className=' bg-custom-grey w-full p-4 px-8 font-bold border-b flex items-center gap-2'><Link to='/books ' >Books </Link><FiUsers /></li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className='w-full text-custom-blue'>
        <ul>
          <li className=' bg-custom-grey w-full p-4 px-8 font-bold border-b'><Link to='/' >Dashboard</Link></li>
          <li className=' bg-custom-grey w-full p-4 px-8 font-bold border-b flex items-center gap-2'><Link to='/test ' >Quizs </Link><FiUsers /></li>
        </ul>
      </div>
    )
  }
}

export default Navigation
