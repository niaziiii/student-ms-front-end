import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios';


function GroupPageAdmin() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/groups.json');
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div className='bg-white p-4'>
      <div className="container mb-4">
        <Button variant="contained" className='block bg-custom-blue' endIcon='✔'><Link  to='/group/add'>Add Question</Link></Button>
      </div>
      <h1 className=' text-4xl font-bold text-center mt-4 mb-6'>Already Added Quiz</h1>
      <div className='quiz-container grid grid-cols-4 gap-8'>
        {
          data && data.map((el) => {
            return (
              <div className='p-4 bg-custom-blue rounded-sm text-white' key={el.id}>
                <h3 className=' text-3xl font-bold mb-1'>Group {el.group}</h3>
                <b className=''>Total Questions. {el.questions.length}</b>
                <p className=' text-end mt-4 '><Link to={'/group/'+ el.id} className=' bg-custom-grey inline-block  py-1 font-normal px-4 rounded'>more info</Link></p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default GroupPageAdmin