import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'
import Button from '@mui/material/Button';

const validationObjectAdd = {
    name: yup.string()
        .required('book name must be required ')
}




const AddBookAdmin = ({ closeAdd }) => {
    const [cover, setCover] = useState(null);

    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setCover(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const formIK = Formik({
        initialValues: {
            name: '',
        },

        validationSchema: yup.object(validationObjectAdd),
        onSubmit: (value) => {
            console.log(value, cover);
        }
    })


    const action = formIK.props.value;
    return (
        <div className=' z-40 p-10 bg-white shadow-box-main top-1/2 left-2/4 -translate-x-2/4 -translate-y-2/4 fixed'>
            <h3 className='text-center font-bold mb-8 text-3xl'>Add new Book </h3>

            <form action="#" className='flex items-center flex-col gap-8' onSubmit={(e) => {
                e.preventDefault()
                action.handleSubmit()
            }}>
                <button onClick={() => closeAdd()} className='absolute top-0 p-2 right-0 bg-custom-blue'>close</button>

                <TextField
                    className='w-full'
                    label='Your Book name'
                    type='text'
                    name='name'
                    variant="standard"
                    onChange={action.handleChange}
                    onBlur={action.handleBlur}
                    value={action.values.name}
                    helperText={action.touched.name && action.errors.name ? action.errors.name : null}
                />
                <TextField
                    type='file'
                    name='name'
                    variant="standard"
                    onChange={handleChange}
                    accept="image/*"
                />
                {cover && <div className=' w-44'><img src={cover} alt="cover" /></div>}
                <Button variant='contained' type='submit' className=' bg-custom-blue'>submit</Button>
            </form>
        </div>
    )
}

export default AddBookAdmin
