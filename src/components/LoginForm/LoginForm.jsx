import s from './LoginForm.module.css'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const initialValues = {
    email: '',
    password: '',
}

const LoginSchema = Yup.object({
    email: Yup.string()
        .email("Incorrect email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "min 6 symbols")
        .required("Password is required"),
});

export default function LoginForm() {
    const emailField = useId();
    const passwordField = useId();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        try {
            const result = await dispatch(login(values));
            
            if (result.error) {
                toast.error("Login failed!");
                return;
            }

            toast.success("User logged in!");
            actions.resetForm();
            navigate("/auth");
        } catch (error) {
            toast.error("Something went wrong!");
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={s.form}>
                    <label htmlFor={emailField} className={s.label}>Email</label>
                    <Field
                        placeholder="Email"
                        type="email"
                        name="email"
                        id={emailField}
                        className={s.field}
                    />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor={passwordField} className={s.label}>Password</label>
                    <Field
                        placeholder="Password"
                        type="password"
                        name="password"
                        id={passwordField}
                        className={s.field}
                    />
                    <ErrorMessage name="password" component="div" className="error" />

                    <span className={s.forgotPass}>Forgot password?</span>

                    <button type="submit" className={s.signInBtn}>
                        Sign In
                    </button>
                </Form>
            )}
        </Formik>

    );
}
