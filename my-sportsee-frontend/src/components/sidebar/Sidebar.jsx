import './sidebar.scss';
import { Biking, Swimming, Weight, Yoga } from '../../assets/icons';

export default function Sidebar() {
    return (
        <>
            <aside className='sidebar'>
                <ul className='sidebar__activities'>
                    <li className='sidebar__activities-item'>
                        <img src={Yoga} alt='Yoga' />
                    </li>
                    <li className='sidebar__activities-item'>
                        <img src={Swimming} alt='Swimming' />
                    </li>
                    <li className='sidebar__activities-item'>
                        <img src={Biking} alt='Biking' />
                    </li>
                    <li className='sidebar__activities-item'>
                        <img src={Weight} alt='Weight' />
                    </li>
                </ul>
                <p className='sidebar__copyright'>Copiryght, SportSee 2020</p>
            </aside>
        </>
    );
}
