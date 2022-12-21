import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getItems } from '../helper'
import { GrUpdate, GrContactInfo } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const UsersPage = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const items = await getItems('http://localhost:4000/api/users')
      setUsers(items.data);
    }

    // getUsers();
  }, [])
  return (
    <div className='bg-white'>
      <div>
        <div className='flex items-center gap-2 p-4'>
          <Link to='/users/add'><button className='bg-black p-2 text-white'>Add User</button></Link>
          <Link to=''><button className='bg-black text-white p-2'>Black Listed</button></Link>
        </div>

        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  User name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email-Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Update
                </th>
                <th scope="col" className="py-3 px-6">
                  Info
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ALi hassan
                </th>
                <td className="py-4 px-6">
                  12345678@gmail.com
                </td>
                <td className="py-4 px-6  bg-blue-300">
                  <Link className='flex items-center gap-2'>Updates <GrUpdate /></Link>
                </td>
                <td className="py-4 px-6 bg-red-300">
                  <Link className='flex items-center gap-2'>Info <GrContactInfo /></Link>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ALi hassan
                </th>
                <td className="py-4 px-6">
                  12345678@gmail.com
                </td>
                <td className="py-4 px-6  bg-blue-300">
                  <Link className='flex items-center gap-2'>Updates <GrUpdate /></Link>
                </td>
                <td className="py-4 px-6 bg-red-300">
                  <Link className='flex items-center gap-2'>Info <GrContactInfo /></Link>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ALi hassan
                </th>
                <td className="py-4 px-6">
                  12345678@gmail.com
                </td>
                <td className="py-4 px-6  bg-blue-300">
                  <Link className='flex items-center gap-2'>Updates <GrUpdate /></Link>
                </td>
                <td className="py-4 px-6 bg-red-300">
                  <Link className='flex items-center gap-2'>Info <GrContactInfo /></Link>
                </td>
              </tr>
              {/* {
                users.map((el, i) => {
                  return (
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {el.name}
                      </th>
                      <td className="py-4 px-6">
                        {el.email}
                      </td>
                      <td className="py-4 px-6  bg-blue-300">
                      <Link className='flex items-center gap-2'>Updates <GrUpdate/></Link>
                      </td>
                      <td className="py-4 px-6 bg-red-300">
                        <Link className='flex items-center gap-2'>Info <GrContactInfo/></Link>
                      </td>
                    </tr>
                  )
                })
              } */}

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default UsersPage
