import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlertQuiz = ({ closeAlert,id }) => {
  const navigate = useNavigate();

    return (
        <div className='absolute w-full top-0 left-0 min-h-full  bg-custom-grey opacity-90 z-30'>
            <div className=' bg-custom-light p-8 z-40 opacity-100 w-1/2 m-auto mt-20'>
                <h1 className='font-bold opacity-100 mb-2'>Are you sure? You wanna take quiz</h1>
                <ul className=' bg-blend-luminosity'>
                    <li>1. If you taking this quiz will be added to your profile.</li>
                    <li>2. If you taking this quiz and does not submit on last the mark will be 0%.</li>
                    <li>3. Clicking the Yes button you quiz  session will be activated.</li>
                    <li className='mt-2 font-bold'>Good luck...</li>

                </ul>
                <div className='flex items-center gap-6 mt-4'>
                    <Button onClick={()=>{
                         navigate(`/test/${id}`, {
                            state: { takeQuiz: true }
                          })
                    }} variant='contained'  className=' bg-custom-blue w-12'>YES</Button>
                    <Button onClick={closeAlert} variant='contained'  className=' bg-custom-red'>NO</Button>

                </div>
            </div>
        </div>
    )
}

export default AlertQuiz
