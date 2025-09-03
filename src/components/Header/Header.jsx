import { NavLink, useNavigate } from 'react-router';
import s from './Header.module.css';

import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

export default function Header() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <header className={s.header}>
            <div>
                <NavLink to='/' className={s.logo}>My Logo</NavLink>
            </div>
            {
                isLoggedIn ? <div className={s.userContainer}>
                    <p className={s.userName}>{user.name}</p>
                    <p className={s.userEmail}>{user.email}</p>
                    <button className={s.logoutBtn} type='button' onClick={handleClick}>Logout</button>
                </div>
                    :
                    <nav className={s.navContainer}>
                        <NavLink className={s.loginLink} to='/login'>Log In</NavLink>
                        <NavLink className={s.signupLink} to='/register'>Sign Up</NavLink>
                    </nav>
            }
            
        </header>
    );
}
