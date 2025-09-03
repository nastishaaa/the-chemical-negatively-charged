import s from './RegistrationForm.module.css'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const initialValues = {
    name: '',
    email: '',
    password: '',
}

const RegistrationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export default function RegistrationForm() {
    const nameField = useId();
    const emailField = useId();
    const passwordField = useId();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        try {
            dispatch(register(values));
            toast.success('Registered user');
            navigate('/auth');
            actions.resetForm();
        } catch (error) {
            toast.error('Something went wrong!');
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegistrationSchema} 
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={s.form}>

                    <label htmlFor={nameField} className={s.label}>Name</label>
                    <Field
                        placeholder='Name'
                        type='text'
                        name='name'
                        id={nameField}
                        className={s.field}
                    />
                    <ErrorMessage name="name" component="div" className={s.error} />

                    <label htmlFor={emailField} className={s.label}>Email</label>
                    <Field
                        placeholder='Email'
                        type='email'
                        name='email'
                        id={emailField}
                        className={s.field}
                    />
                    <ErrorMessage name="email" component="div" className={s.error} />

                    <label htmlFor={passwordField} className={s.label}>Password</label>
                    <Field
                        placeholder='Password'
                        type='password'
                        name='password'
                        id={passwordField}
                        className={s.field}
                    />
                    <ErrorMessage name="password" component="div" className={s.error} />

                    <button type='submit' className={s.signUpBtn}>Sign Up</button>
                </Form>
            )}
        </Formik>
    );
}
