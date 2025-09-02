import { BeatLoader } from 'react-spinners';

import s from './Loader.module.css';

export default function Loader() {
    return (
        <div className={s.loaderContainer}>
            <BeatLoader color='#000000' />
        </div>
    );
}
