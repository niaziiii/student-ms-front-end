import React, { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import { AddBookAdmin } from '../components';
import axios from 'axios';


const BookPage = () => {
    const [addBook, setAddBook] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:4000/api/books/63a10502a5caee19d0f80ea1');
          setData(response.data.alldata);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []);
  

    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;
  
    

    return (
        <div className='bg-white p-4 relative'>
            {addBook && <AddBookAdmin closeAdd={()=>setAddBook(false)} />}

            <div className="container mb-10">
                <Button variant="contained" onClick={() => setAddBook(true)} className='block bg-custom-blue' endIcon='✔'>Add Book</Button>
            </div>
            <div className="books-container flex gap-6 flex-wrap justify-center">
            <div className="book shadow-box-main w-56 flex flex-col">
                            <div className=' h-20 max-h-20 min-h-fit mb-3'><img className=' w-full h-full' src={data.coverImage} alt="book-cover" /></div>
                            <h2 className=' py-4 px-1 font-bold mb-auto'>COmputer with summary</h2>
                            <Button variant='contained' className='bg-custom-blue w-full'>OverView</Button>
                        </div>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, i) => (
                        <div className="book shadow-box-main w-56 flex flex-col" key={i}>
                            <div className=' h-20 max-h-20 min-h-fit mb-3'><img className=' w-full h-full' src="https://images.unsplash.com/photo-1514593214839-ce1849100055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="book-cover" /></div>
                            <h2 className=' py-4 px-1 font-bold mb-auto'>Urdu Book with summary</h2>
                            <Button variant='contained' className='bg-custom-blue w-full'>OverView</Button>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default BookPage
