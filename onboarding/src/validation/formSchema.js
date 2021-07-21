import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .required('First name is required'),
    last_name: yup
    .string()
    .trim()
    .required('Last name is required'),
    email: yup
    .string()
    .trim()
    .required('Email is required'),
    password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(16, 'Password cannot be longer than 16 characters'),
    tos: yup.boolean()
    .required('The terms and conditions must be accepted')
    .oneOf([true], 'The terms and conditions must be accepted')
});

export default formSchema;