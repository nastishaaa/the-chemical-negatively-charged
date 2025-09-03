import s from './LoginForm.module.css'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

export default function LoginForm() {
    const emailField = useId();
    const passwordField = useId();

    return (
        <Formik>
            <Form className={s.form}>

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
                
                <span className={s.forgotPass}>
                    Forgot password?
                </span>

                <button type='submit' className={s.signInBtn}>Sign In</button>
            </Form>
        </Formik>
    );
}
