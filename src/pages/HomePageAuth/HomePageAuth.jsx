import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './HomePageAuth.module.css';

import Card1 from '../../assets/Card1.png';
import Card2 from '../../assets/Card2.png';
import Card3 from '../../assets/Card3.png';
import Card4 from '../../assets/Card4.png';
import { selectAparts, selectIsLoading } from '../../redux/apartments/selectors';
import { getAaparts } from '../../redux/apartments/operations';
import Loader from '../../components/Loader/Loader';

const images = [Card1, Card2, Card3, Card4];

export default function HomePageAuth() {
    const dispatch = useDispatch();
    const aparts = useSelector(selectAparts);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getAaparts());
    }, [dispatch]);

    return (
        <div className={s.mainContainer}>
            {isLoading ? <Loader /> :
            <ul className={s.apartList}>
                {aparts.map((apart, index) => (
                    <li
                        key={apart._id}
                        style={{ backgroundImage: `url(${images[index % images.length]})` }} 
                        className={s.apartItem}
                    >
                        <div className={s.textContent}>
                            <h3 className={s.cardTitle}>{apart.title}</h3>
                            <ul className={s.featuresList}>
                                {apart.features.map((feature, idx) => (
                                    <li className={s.featuresItem} key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
            }
        </div>
    );
}
