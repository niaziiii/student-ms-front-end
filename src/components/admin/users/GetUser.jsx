import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ComponentLoader from '../../ComponentLoader';
import StatTableUser from '../../student/StatTableUser';
import { FiUser } from 'react-icons/fi';

const GetUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    let quizs = user?.report

    useEffect(() => {
        async function getUser() {
            try {
                setLoading(true)
                const res = await axios.get(`https://student-m-s.vercel.app/api/users/${userId}`)
                setUser(res.data.alldata)
            } catch (error) {
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        getUser()
    }, [])



    if (loading) return <div className='w-full h-full bg-white'><ComponentLoader /></div>

    return (
        <div className='bg-white w-full h-full  p-4'>
            {quizs ? <h1 className='text-4xl font-bold mb-10 '>Quiz Atemps</h1> : ""}
            <div className=' w-full'>
                {quizs && <StatTableUser quizs={quizs} />}
            </div>
        </div>
    )
}

export default GetUser
