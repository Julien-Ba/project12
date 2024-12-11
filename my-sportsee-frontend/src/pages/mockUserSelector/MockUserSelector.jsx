import { Link } from 'react-router-dom';
import './mock-user-selector.scss';

export default function MockUserSelector() {
    return (
        <div className='mock-user-selector'>
            <Link to='/home/12' className='button'>
                Mocked user: 12
            </Link>
            <Link to='/home/18' className='button'>
                Mocked user: 18
            </Link>
        </div>
    );
}
