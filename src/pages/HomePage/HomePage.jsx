import { NavLink } from 'react-router';
import s from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={s.container}>
            <div className={s.textContainer}>
                <h1 className={s.title}>The chemical  negatively charged</h1>
                <p className={s.mainText}>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
            </div>
            
            <div>
                <NavLink to='/login' className={s.startBtn} type="button">Get Started</NavLink>
            </div>
        </div>
    );
}
