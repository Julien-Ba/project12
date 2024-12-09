import { Link } from 'react-router-dom';
import './default.scss';

export default function Default() {
    return (
        <div className='default'>
            <Link to='/home/12' className='button'>
                Mocked user: 12
            </Link>
            <Link to='/home/18' className='button'>
                Mocked user: 18
            </Link>
        </div>
    );
}
