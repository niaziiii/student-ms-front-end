import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'
import Button from '@mui/material/Button';
import axios from 'axios';
import ComponentLoader from '../../ComponentLoader';


const validateGroup = {
    groupName: yup.string()
        .required('Group name must be required ')
}

const NewGroup = ({ closeForm, setData }) => {
    const [loading, setLoading] = useState(false)

    const formIK = Formik({
        initialValues: {
            groupName: ''
        },
        validationSchema: yup.object(validateGroup),
        onSubmit: (values, { resetForm }) => {
            async function addGroup() {
                try {
                    setLoading(true)
                    const group = await axios.post('https://student-m-s.vercel.app/api/group', values);

                    resetForm()
                    setData(prev => {
                        return ([
                            ...prev,
                            group.data.data.data
                        ])
                    })
                    closeForm();

                } catch (error) {
                    setLoading(false)
                } finally {
                    setLoading(false)
                }
            }

            addGroup();
        }
    })

    const action = formIK.props.value;

    return (
        <div className='absolute z-10 top-0 left-0 w-full h-full bg-black'>
            {loading && <ComponentLoader />}
            <form action="#" className='p-12  bg-white' onSubmit={(e) => {
                e.preventDefault()
                action.handleSubmit()
            }}>
                <button className='close-btn absolute right-0 top-0 bg-custom-blue py-1 px-3' onClick={() => closeForm()}>X</button>
                <h1 className='text-3xl font-bold text-center '>New Group</h1>
                <TextField
                    className='w-full '
                    label='Group Name'
                    type='text'
                    name='groupName'
                    variant="standard"
                    onChange={action.handleChange}
                    onBlur={action.handleBlur}
                    value={action.values.groupName}
                    helperText={action.touched.groupName && action.errors.groupName ? action.errors.groupName : null}
                />
                <div className='block w-full mt-8'>
                    <Button variant="contained" className='block w-full bg-custom-blue' type='submit' > Add Group</Button>
                </div>
            </form>
        </div>
    )
}

export default NewGroup
