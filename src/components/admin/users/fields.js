import * as yup from 'yup'

const inputsAdd = {
    name: "",
    father: "",
    email: "",
    cnic: "",
    password: "",
    phoneNumber: "",
    expire: "",
    address: ""

}

const validationObjectAdd = {
    name: yup.string()
        .required('must be required '),

    father: yup.string()
        .required('must be required '),

    email: yup.string()
        .required('must be required '),

    cnic: yup.string()
        .required('must be required '),
    password: yup.string()
        .required('must be required '),
    phoneNumber: yup.string()
        .required('must be required '),
    expire: yup.string()
        .required('must be required '),
    address: yup.string()
        .required('must be required '),
}

// eslint-disable-next-line
export  {
    inputsAdd,
    validationObjectAdd
}