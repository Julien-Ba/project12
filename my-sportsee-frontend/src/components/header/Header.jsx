import './header.scss';
import { Sportsee } from '../../assets/icons';
import Navbar from '../navbar/Navbar';

export default function Header() {
    return (
        <header className='header'>
            <span className='header__logo'>
                <img className='header__logo-image' src={Sportsee} alt='logo sportsee' />
                <h1 className='header__logo-title'>SportSee</h1>
            </span>
            <Navbar />
        </header>
    );
}
