import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import ComponentLoader from '../ComponentLoader';
import AlertQuiz from './AlertQuiz';

function TestPage() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const [groupId, setGroupId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://student-m-s.vercel.app/api/group');
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className='bg-white p-4 h-full relative'><ComponentLoader /></div>;
  if (error) return <p>An error occurred: {error.message}</p>;


  return (
    <div className='bg-white p-4 h-full relative'>
      {alert && <AlertQuiz id={groupId} closeAlert={() => {
        setAlert(false);
        setGroupId(null);
      }} />}
      <h1 className=' text-4xl font-bold text-center mt-4 mb-6'>Available Group Quiz</h1>
      <div className='quiz-container grid grid-cols-3 gap-8'>
        {
          data && data.map((el) => {
            return (
              <div className='p-4 bg-custom-blue rounded-sm text-white' key={el.id}>
                <h3 className=' text-3xl font-bold mb-1'>Group {el.groupName}</h3>
                <b className=''>Total Questions. {el.questions.length}</b>
                <div className='flex items-center justify-between mt-4'>
                  <button onClick={() => {
                    navigate(`/test/${el.id}`, {
                      state: { takeQuiz: false }
                    })
                  }} variant='standard' className=' bg-custom-grey inline-block  py-1 font-normal px-4 rounded'>Practice Quiz</button>

                  <button onClick={() => {
                    setGroupId(el.id)
                    setAlert(true)
                  }} className=' bg-custom-grey inline-block  py-1 font-normal px-4 rounded'>Take Quiz</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default TestPage