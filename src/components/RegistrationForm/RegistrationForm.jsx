import s from './RegistrationForm.module.css'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

export default function RegistrationForm() {
    const nameField = useId()
    const emailField = useId();
    const passwordField = useId();

    return (
        <Formik>
            <Form className={s.form}>

                <label htmlFor={nameField}
                className={s.label} >Name</label>
                <Field placeholder='Name'
                    type='text'
                    name='name'
                    id={nameField}
                    className={s.field} />

                <label htmlFor={emailField}
                className={s.label} >Email</label>
                <Field placeholder='Email'
                    type='email'
                    name='email'
                    id={emailField}
                    className={s.field} />
                
                <label htmlFor={passwordField}
                className={s.label} >Password</label>
                <Field placeholder='Password'
                    type='password'
                    name='password'
                    id={passwordField}
                    className={s.field} />
                
                <button type='submit' className={s.signUpBtn}>Sign Up</button>
            </Form>
        </Formik>
    );
}
