import { NavLink } from 'react-router';
import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <div>
                <NavLink to='/' className={s.logo}>My Logo</NavLink>
            </div>
            <nav className={s.navContainer}>
                <NavLink className={s.loginLink} to='/login'>Log In</NavLink>
                <NavLink className={s.signupLink} to='/register'>Sign Up</NavLink>
            </nav>
        </header>
    );
}
