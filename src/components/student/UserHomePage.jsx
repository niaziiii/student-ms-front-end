import React from 'react'
import { FiUser } from 'react-icons/fi';
import StatTableUser from './StatTableUser';

const UserHomePage = ({ user }) => {
    const quizs = user?.report;

    return (
        <div className='bg-white w-full h-full  p-4'>
            <h1 className='text-4xl font-bold mb-4'>Profile</h1>

            <div className=' shadow-box-main p-4 h-fit w-fit flex gap-10'>
                <div className='flex items-center justify-center mb-4'>
                    <i className=' text-custom-blue'><FiUser fontSize={70} /></i>
                </div>
                <div>
                    <div className='flex items-center gap-4 border-b pb-2'><p className=' w-32'>Name </p> <p>:</p> <h2 className='font-bold capitalize'>{user.name}</h2></div>
                    <div className='flex items-center gap-4 border-b pb-2 pt-2'><p className='w-32'>Father Name </p> <p>:</p> <h2 className='font-bold capitalize'>{user.name}</h2></div>
                    <div className='flex items-center gap-4 border-b pb-2 pt-2'><p className='w-32'>Email Address </p> <p>:</p> <h2 className='font-bold '>{user.email}</h2></div>
                    <div className='flex items-center gap-4 pt-2'><p className='w-32'>Quiz Atemps </p> <p>:</p> <h2 className='font-bold '>{user.report.length}</h2></div>
                </div>
            </div>

            {quizs ? <h1 className='text-4xl font-bold mb-4 mt-8 '>Quiz Atemps</h1> : ""}
            <div className=' w-full'>
                {quizs && <StatTableUser quizs={quizs} />}

            </div>
        </div>
    )
}

export default UserHomePage
