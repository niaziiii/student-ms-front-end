import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HeaderNavigation = () => {
    return (
        <div className=' bg-custom-blue w-full p-4 px-6 flex items-center justify-between'>
            <div>
                <Link to='/'><h1 className=' font-bold'>Student Management System</h1></Link>
            </div>
            <div className='flex items-center gap-2'>
                <h2>Ali Hassan</h2>
                <AiOutlineUser />
            </div>
        </div>
    )
}

export default HeaderNavigation
