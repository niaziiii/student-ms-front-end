import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'
import Button from '@mui/material/Button';
import { Loader, ErrorMessage } from '../components';
import axios from 'axios';
import Cookies from 'universal-cookie';


const validationObjectLogin = {
    email: yup.string()
        .required('Your email address'),
    password: yup.string()
        .required('Enter your password')
}


const Login = ({ setUser }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const cookies = new Cookies();

    const formIK = Formik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: yup.object(validationObjectLogin),
        onSubmit: (value) => {
            async function fetchData() {
                try {
                    setLoading(true)
                    const response = await axios.post('https://student-m-s.vercel.app/api/auth/login', value);
                    cookies.set('jwt', response.data.token, { path: '/' })
                    setUser(response.data.data.user);
                } catch (error) {
                    setError(error?.response?.data?.message);
                    setLoading(false);
                } finally {
                    setLoading(false);
                }
            }

            fetchData();
        }
    })


    const action = formIK.props.value;
    if (error) setTimeout(() => setError(null), 3000);

    return (
        <div className='bg-custom-blue w-full min-h-screen flex items-center justify-center '>
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}

            <div className="container w-1/3 bg-white p-5 m-auto">
                <form className='flex flex-col gap-8' action="#" onSubmit={(e) => {
                    e.preventDefault()
                    action.handleSubmit()
                }}>

                    <h1 className='text-center mb-2 font-bold'>Login User</h1>
                    <TextField
                        label='Your Email-Address'
                        type='email'
                        name='email'
                        variant="standard"
                        onChange={action.handleChange}
                        onBlur={action.handleBlur}
                        value={action.values.email}
                        helperText={action.touched.email && action.errors.email ? action.errors.email : null}
                    />

                    <TextField
                        label='Your Password'
                        type='password'
                        name='password'
                        variant="standard"
                        onChange={action.handleChange}
                        onBlur={action.handleBlur}
                        value={action.values.password}
                        helperText={action.touched.password && action.errors.password ? action.errors.password : null}
                    />
                    <Button variant='contained' type='submit' className=' bg-custom-blue'>submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
