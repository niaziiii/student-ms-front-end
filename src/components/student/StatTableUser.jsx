import React from 'react'
import { Link } from 'react-router-dom'

const StatTableUser = ({ quizs }) => {
    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='bg-custom-blue'>
                        <th scope="col" className="py-3 px-6">
                            Group name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Total Questions
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Atemps Questions
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Percentage
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Id
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        quizs.map((el, i) => {
                            return (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {el.groupName}
                                    </th>
                                    <td className="py-4 px-6">
                                        {el.total}
                                    </td>
                                    <td className="py-4 px-6">
                                        {el.atemps}
                                    </td>
                                    <td className="py-4 px-6">
                                        {el.percentage}
                                    </td>
                                    <td className="py-4 px-6">
                                        {el.id}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StatTableUser
