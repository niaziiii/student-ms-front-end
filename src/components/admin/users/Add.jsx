import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'
import { inputsAdd, validationObjectAdd } from './fields.js'
import Button from '@mui/material/Button';


const Add = () => {
  const formIK = Formik({
    initialValues: {
      ...inputsAdd
    },

    validationSchema: yup.object(validationObjectAdd),
    onSubmit: (value) => {
      console.log(value);
    }
  })


  const action = formIK.props.value;

  return (
    <div className='bg-white p-4'>
      <h1 className=' text-4xl font-bold text-center mt-4 mb-6'>Add new student</h1>
      <form className='flex flex-wrap  gap-8' action="#" onSubmit={(e) => {
        e.preventDefault()
        action.handleSubmit()
      }}>

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


        <div className='block w-full mt-8'>
        <Button variant="contained" className='block w-full' endIcon='✔' type='submit' > Add Student</Button>
        </div>
      </form>
    </div>
  )
}

export default Add
