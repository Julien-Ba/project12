import './navbar.scss';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar__list' role='menubar'>
                <li className='navbar__item' role='menuitem'>
                    Accueil
                </li>
                <li className='navbar__item' role='menuitem'>
                    Profil
                </li>
                <li className='navbar__item' role='menuitem'>
                    Réglage
                </li>
                <li className='navbar__item' role='menuitem'>
                    Communauté
                </li>
            </ul>
        </nav>
    );
}
