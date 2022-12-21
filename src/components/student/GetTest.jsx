import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function GetTest() {
    const navigate = useNavigate();
    const { state } = useLocation()
    const { testId } = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [question, setquestions] = useState(null);
    const [count, setCount] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [model, setmodel] = useState(false);



    const checkAnswer = (opt) => {
        if (count === 3) {
            setmodel(true)
            return;
        };
        if (opt === question.correct) {
            setCorrect(prev => prev + 1);
        }
        setCount(prev => prev + 1);
        setquestions(data.questions[count + 1]);
        console.log(count + 1);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/groups.json');
                const data = response.data.data.find(el => el.id === testId)
                setData(data);
                setquestions(data.questions[0]);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }



    return (
        <div className='bg-white p-4 '>

            <div className='flex items-center justify-between shadow-box-main p-4 rounded'>
                <h1 className=' text-3xl font-bold'>Group {data.group}</h1>
                <p>Id : {data.id}</p>
            </div>

            {model && <div className=' mt-4 p-6 shadow-box-main bg-white'>
                <h3 className='text-start font-semibold mb-4'>Total Questions {count + 1}/{data.questions.length} </h3>
                <p className='text-center'>You Atemped  {count + 1} Questions </p>
                <h2 className='text-center'>You answerd {correct} Questions correctly ✔</h2>
                <div className='text-center mt-4'>
                    <button onClick={() => navigate('/test')} className='bg-custom-blue py-1 px-4 rounded-sm hover:opacity-80'>Reload 🔃</button>
                </div>
            </div>}

            {
                model === false && <div className='shadow-box-main p-4 rounded mt-6 block'>
                    <h3 className='text-start font-semibold mb-4'>Total Questions {count + 1}/{data.questions.length} </h3>
                    <div className='flex flex-col gap-2'>
                        <div className='bg-slate-600 py-3'>
                            <h2 className='pb-4 px-4 text-3xl'>Q. {question.title}</h2>
                            <div className='grid grid-cols-2 gap-4 px-4'>
                                <button onClick={() => checkAnswer('a')} className='flex items-center  gap-2 bg-custom-blue p-2 rounded-sm hover:opacity-80'>
                                    <b>(A)</b>
                                    <p>{question.options[0]}</p>
                                </button>
                                <button onClick={() => checkAnswer('b')} className='flex items-center  gap-2 bg-custom-blue p-2 rounded-sm hover:opacity-80'>
                                    <b>(B)</b>
                                    <p>{question.options[1]}</p>
                                </button>
                                <button onClick={() => checkAnswer('c')} className='flex items-center  gap-2 bg-custom-blue p-2 rounded-sm hover:opacity-80'>
                                    <b>(C)</b>
                                    <p>{question.options[2]}</p>
                                </button>
                                <button onClick={() => checkAnswer('d')} className='flex items-center  gap-2 bg-custom-blue p-2 rounded-sm hover:opacity-80'>
                                    <b>(D)</b>
                                    <p>{question.options[3]}</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
}

export default GetTest

