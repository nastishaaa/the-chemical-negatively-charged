import s from './LoginPage.module.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import CityImage from '../../assets/formBackground.png'

import { Link } from 'react-router';

export default function LoginPage() {
    return (
        <div className={s.mainContainer}>
            <section className={s.backgroundImg}>
                <img src={CityImage} alt="View on city"/>
            </section>
            
            <section className={s.formPart}>
                <div className={s.formContainer}>
                    <h3 className={s.loginTitle}>Login</h3>
                    <LoginForm />
                    <div className={s.textAccount}>Don’t have account? <Link className={s.signupLink} to='/register'>Sign Up</Link></div>
                </div>
            </section>
            
        </div>
    );
}
