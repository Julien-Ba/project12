import './nutrition-card.scss';
import PropTypes from 'prop-types';

export default function NutritionCard({ name, value, units, icon }) {
    return (
        <div className='nutrition-card'>
            <div className={`nutrition-card__icon nutrition-card__icon--${name.toLowerCase()}`}>
                <img src={icon} alt={name} />
            </div>
            <div className='nutrition-card__text'>
                <p className='nutrition-card__text-value'>
                    {value}
                    {units}
                </p>
                <h4 className='nutrition-card__text-name'>{name}</h4>
            </div>
        </div>
    );
}

NutritionCard.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
