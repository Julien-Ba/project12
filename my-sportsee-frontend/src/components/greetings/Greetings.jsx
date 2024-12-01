import './greetings.scss';
import PropTypes from 'prop-types';

export default function Greetings({ user = '' }) {
    return (
        <section className='greetings'>
            <h2 className='greetings__title'>
                Bonjour
                <span className='greetings__title-name'> {user}</span>
            </h2>
            <p className='greetings__description'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
}

Greetings.propTypes = {
    user: PropTypes.string,
};
