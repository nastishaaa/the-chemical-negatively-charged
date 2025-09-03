import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <div className={s.pageWrapper}>
            <div className={s.formBox}>
                <h1 className={s.title}>Create an Account</h1>
                <p className={s.subtitle}>Join us today! It takes only a few steps.</p>
                <RegistrationForm />
            </div>
        </div>
    );
}
