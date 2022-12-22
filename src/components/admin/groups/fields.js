import * as yup from 'yup'

const inputsQuizAdd = {
    title: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correct: "",
}

const validationObjectQuiz = {
    title: yup.string()
        .required('Question title must be required '),
    optionA: yup.string()
        .required('Option A isnt provided '),
    optionB: yup.string()
        .required('Option B isnt provided '),
    optionC: yup.string()
        .required('Option C isnt provided '),
    optionD: yup.string()
        .required('Option C isnt provided '),
    correct: yup.string()
        .required('correct option must be required!'),

}


const formitQuestion = (q,group) => {
    return ({
        title: q.title,
        correct: q.correct,
        options: [q.optionA, q.optionB, q.optionC, q.optionD],
        group: group
    })
}

// eslint-disable-next-line
export {
    inputsQuizAdd,
    validationObjectQuiz,
    formitQuestion,
}