import s from './HomePageAuth.module.css'

import Card1 from '../../assets/Card1.png';
import Card2 from '../../assets/Card2.png';
import Card3 from '../../assets/Card3.png';
import Card4 from '../../assets/Card4.png';

const content = [
    { id: 1, card: Card1, title: 'The Marina Torch', list: ['6 500 000 Dhs', 'Yield 9.25%', 'Sold 75%', 'Tiket - 60 000 Dhs', 'Days left 150 '] },
    { id: 2, card: Card2, title: 'HHHR Tower', list: ['6 500 000 Dhs', 'Yield 9.25%', 'Sold 75%', 'Tiket - 60 000 Dhs', 'Days left 150 '] },
    { id: 3, card: Card3, title: 'Ocean peaks', list: ['6 500 000 Dhs', 'Yield 9.25%', 'Sold 75%', 'Tiket - 60 000 Dhs', 'Days left 150 '] },
    { id: 4, card: Card1, title: 'Al Yaqoub Tower', list: ['6 500 000 Dhs', 'Yield 9.25%', 'Sold 75%', 'Tiket - 60 000 Dhs', 'Days left 150 '] }
    
]

export default function HomePageAuth() {
    return (
        <div className={s.mainContainer}>
            <ul className={s.apartList}>
                {content.map(item => (
                    <li key={item.id}
                        style={{ backgroundImage: `url(${item.card})` }}
                        className={s.apartItem}>
                        <div className={s.textContent}>
                            <h3 className={s.cardTitle}>{ item.title}</h3>
                            <ul className={s.featuresList}>
                                {item.list.map(i => (
                                    <li className={s.featuresItem} key={item.id}>{i }</li>
                                ))}
                            </ul>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}
