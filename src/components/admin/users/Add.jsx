import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'
import { inputsAdd, validationObjectAdd } from './fields.js'
import Button from '@mui/material/Button';
import axios from 'axios';
import ComponentLoader from '../../ComponentLoader.jsx';
import { useNavigate } from 'react-router';


const Add = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const formIK = Formik({
    initialValues: {
      ...inputsAdd
    },

    validationSchema: yup.object(validationObjectAdd),
    onSubmit: (value) => {
      async function AddUser() {
        try {
          setLoading(true);
          const response = await axios.post('https://student-m-s.vercel.app/api/users/', value);
          navigate('/users');
        } catch (error) {
          setLoading(false);
        } finally { 
          setLoading(false);
        }
      }
      AddUser()
    }
  })


  const action = formIK.props.value;

  return (
    <div className='bg-white p-4 min-h-full relative'>
      {loading && <ComponentLoader/>}
      <h1 className=' text-4xl font-bold text-center mt-4 mb-6'>Add new student</h1>
      <form action="#" onSubmit={(e) => {
        e.preventDefault()
        action.handleSubmit()
      }}>
        <div className='grid grid-cols-2  gap-8 '>
          <TextField
            label='Your full name'
            type='text'
            name='name'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.name}
            helperText={action.touched.name && action.errors.name ? action.errors.name : null}
          />

          <TextField
            label='Your father name'
            type='text'
            name='father'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.father}
            helperText={action.touched.father && action.errors.father ? action.errors.father : null}
          />

          <TextField
            label='Your email-address'
            type='email'
            name='email'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.email}
            helperText={action.touched.email && action.errors.email ? action.errors.email : null}
          />

          <TextField
            label='Your cnic-number'
            type='text'
            name='cnic'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.cnic}
            helperText={action.touched.cnic && action.errors.cnic ? action.errors.cnic : null}
          />

          <TextField
            label='Your password'
            type='text'
            name='password'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.password}
            helperText={action.touched.password && action.errors.password ? action.errors.password : null}
          />

          <TextField
            label='Your mobile no'
            type='text'
            name='phoneNumber'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.phoneNumber}
            helperText={action.touched.phoneNumber && action.errors.phoneNumber ? action.errors.phoneNumber : null}
          />


          <TextField
            label='Expire date'
            type='date'
            name='expire'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.expire}
            helperText={action.touched.expire && action.errors.expire ? action.errors.expire : null}
          />

          <TextField
            label='Your Address'
            type='text'
            name='address'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.address}
            helperText={action.touched.address && action.errors.address ? action.errors.address : null}
          />
        </div>


        <div className='block w-full mt-8'>
          <Button variant="contained" className='block w-full bg-custom-blue' endIcon='✔' type='submit' > Add Student</Button>
        </div>
      </form>
    </div>
  )
}

export default Add
