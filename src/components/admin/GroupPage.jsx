import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios';
import NewGroup from './groups/NewGroup'
import ComponentLoader from '../ComponentLoader';


function GroupPageAdmin() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addGroup, setAddGroup] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://student-m-s.vercel.app/api/group');
        setData(response.data.data);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div className='bg-white p-4 relative h-full'>
      {loading && <ComponentLoader/>}
      {addGroup && <NewGroup setData={setData} closeForm={() => setAddGroup(false)} />}
      <div className="container mb-4 flex items-center gap-4">
        <Button variant="contained" className='block bg-custom-blue' endIcon='✔'  onClick={() => setAddGroup(true)}>Add Group</Button>
        <Button variant="contained" className='block bg-custom-blue' endIcon='✔' onClick={()=> navigate('/group/add',{state:{groups:data}})}><Link to=''>Add Question</Link></Button>

      </div>
      <h1 className=' text-4xl font-bold text-center mt-4 mb-6'>Already Added Quiz</h1>
      <div className='quiz-container grid grid-cols-4 gap-8'>
        {
          data && data.map((el) => {
            return (
              <div className='p-4 bg-custom-blue rounded-sm text-white' key={el.id}>
                <h3 className=' text-3xl font-bold mb-1'>Group {el.groupName}</h3>
                <b className=''>Total Questions. {el.questions.length}</b>
                <p className=' text-end mt-4 '><Link to={'/group/' + el.id} className=' bg-custom-grey inline-block  py-1 font-normal px-4 rounded'>more info</Link></p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default GroupPageAdmin