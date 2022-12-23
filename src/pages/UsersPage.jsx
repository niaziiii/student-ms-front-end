import React, { useState, useEffect } from 'react'
import { getItems } from '../helper'
import { GrUpdate, GrContactInfo } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { ComponentLoader } from '../components'
import { Button } from '@mui/material'

const UsersPage = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const items = await getItems('https://student-m-s.vercel.app/api/users');
        setUsers(items.data);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }

    getUsers();
  }, [])


  if (error) return <p>An error occurred: Kindly reload</p>;
  return (
    <div className='bg-white relative min-h-full'>
      {loading&& <ComponentLoader/>}
      <div>
        <div className='flex items-center gap-2 p-4'>

                
          <Link to='/users/add'><Button variant="contained" className='block bg-custom-blue' endIcon='👤'>Add User</Button></Link>
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
              {
                users.map((el, i) => {
                  if(el.role === 'admin') return;
                  return (
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {el.name}
                      </th>
                      <td className="py-4 px-6">
                        {el.email}
                      </td>
                      <td className="py-4 px-6  bg-blue-300">
                        <Link className='flex items-center gap-2'>Updates <GrUpdate /></Link>
                      </td>
                      <td className="py-4 px-6 bg-red-300">
                        <Link className='flex items-center gap-2' to={`/users/${el._id}`}>Info <GrContactInfo /></Link>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default UsersPage
