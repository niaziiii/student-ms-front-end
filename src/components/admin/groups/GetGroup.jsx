import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ComponentLoader from '../../ComponentLoader';

function GetGroup() {
  const { groupId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://student-m-s.vercel.app/api/group/${groupId}`);
        setData(response.data.alldata);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className='bg-white p-4 h-full relative'><ComponentLoader /></div>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div className='bg-white p-4 h-full relative'>
      <div className='flex items-center justify-between shadow-box-main p-4 rounded'>
        <h1 className=' text-3xl font-bold'>Group {data.groupName}</h1>
        <p>Id : {data.id}</p>
      </div>
      <div className='shadow-box-main p-4 rounded mt-6 block'>
        <h3 className='text-center font-semibold mb-4'>Questions ({data.questions.length}) </h3>
        <div className='flex flex-col gap-2'>
          {
            data.questions.map((el, i) => (
              <div className='bg-slate-600 py-3' key={i}>
                <h2 className='pb-4 px-4 text-3xl'>Q. {el.title} <b className='  underline'>({el.correct})</b></h2>
                <div className='grid grid-cols-2 gap-4 px-4'>
                  {
                    el.options.map((el, i) => {
                      const op = ['A', 'B', 'C', 'D'];
                      return (
                        <span className='flex items-center gap-2 bg-custom-blue p-2' key={i}>
                          <b>({op[i]})</b>
                          <p>{el}</p>
                        </span>
                      )
                    })
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default GetGroup
