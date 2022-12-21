import React, { useState } from 'react'
import { inputsQuizAdd, validationObjectQuiz, formitQuestion } from './fields';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





const AddQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [questionGroup, setQuestionGroup] = useState('');


  const formIK = Formik({
    initialValues: {
      ...inputsQuizAdd
    },

    validationSchema: yup.object(validationObjectQuiz),
    onSubmit: (values, { resetForm }) => {
      const obj = formitQuestion(values)
      setQuestions(prev => {
        const newQuestions = [...prev];
        newQuestions.push(obj)
        return newQuestions
      })
      resetForm();
    }
  })


  const action = formIK.props.value;

  return (
    <div className='bg-white p-2'>
      <h1 className=' text-4xl font-bold text-center mt-4 mb-6'>Add Group Question</h1>

      <form action="#" className='p-4' onSubmit={(e) => {
        e.preventDefault()
        action.handleSubmit()
      }}>

        <div className='w-full mb-6'>
          <TextField
            className='w-full '
            label='Question title'
            type='text'
            name='title'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.title}
            helperText={action.touched.title && action.errors.title ? action.errors.title : null}
          />
        </div>

        <div className='grid grid-cols-2 gap-8'>
          <TextField
            label='Option A'
            type='text'
            name='optionA'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.optionA}
            helperText={action.touched.optionA && action.errors.optionA ? action.errors.optionA : null}
          />
          <TextField
            label='Option B'
            type='text'
            name='optionB'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.optionB}
            helperText={action.touched.optionB && action.errors.optionB ? action.errors.optionB : null}
          />
          <TextField
            label='Option C'
            type='text'
            name='optionC'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.optionC}
            helperText={action.touched.optionC && action.errors.optionC ? action.errors.optionC : null}
          />
          <TextField
            label='Option D'
            type='text'
            name='optionD'
            variant="standard"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.optionD}
            helperText={action.touched.optionD && action.errors.optionD ? action.errors.optionD : null}
          />
        </div>

        <div className='mt-4 mb-4 flex items-end justify-center gap-8'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Correct</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              name='correct'
              onChange={action.handleChange}
              onBlur={action.handleBlur}
              value={action.values.correct}
            >
              <MenuItem value='a'>Option A</MenuItem>
              <MenuItem value='b'>Option B</MenuItem>
              <MenuItem value='c'>Option C</MenuItem>
              <MenuItem value='d'>Option D</MenuItem>

            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Group</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={questionGroup}
              label="Age"
              onChange={(e) => setQuestionGroup(e.target.value)}
            >
              <MenuItem value={10}>A</MenuItem>
              <MenuItem value={20}>B</MenuItem>
              <MenuItem value={30}>C</MenuItem>
            </Select>
          </FormControl>

        </div>
        <div className='block w-full mt-8'>
          <Button variant="contained" className='block w-full' endIcon='✔' type='submit' > Add Quiz</Button>
        </div>

      </form>


    </div>
  )
}

export default AddQuestion
