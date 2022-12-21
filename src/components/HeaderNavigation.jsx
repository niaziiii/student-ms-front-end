import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

const HeaderNavigation = ({ user, setUser }) => {
    const cookies = new Cookies();
    return (
        <div className=' bg-custom-blue w-full p-4 px-6 flex items-center justify-between'>
            <div>
                <Link to='/'><h1 className=' font-bold'>Student Management System</h1></Link>
            </div>
            <div className='flex items-center gap-2'>
                <h2>{user.name}</h2>
                <AiOutlineUser />
                <h2 className='ml-5 cursor-pointer font-bold' onClick={() => {
                    // cookies.remove('jwt')
                    cookies.set('jwt', '/', { path: '/' })
                    setUser({
                        role: null,
                        login: false,
                    })
                }}>Logout</h2>
            </div>
        </div>
    )
}

export default HeaderNavigation
