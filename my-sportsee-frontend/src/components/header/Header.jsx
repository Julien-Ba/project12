import './header.scss';
import { Link } from 'react-router-dom';
import { Sportsee } from '../../assets/icons';
import Navbar from '../navbar/Navbar';

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <span className='header__logo'>
                    <img className='header__logo-image' src={Sportsee} alt='logo sportsee' />
                    <h1 className='header__logo-title'>SportSee</h1>
                </span>
            </Link>
            <Navbar />
        </header>
    );
}
