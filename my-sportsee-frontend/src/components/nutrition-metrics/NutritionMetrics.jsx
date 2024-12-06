import './nutrition-metrics.scss';
import PropTypes from 'prop-types';
import { Apple, Burger, Chicken, Fire } from '../../assets/icons';

const NUTRITION_MAPPING = {
    calorieCount: { name: 'Calories', units: 'KCal', icon: Fire },
    proteinCount: { name: 'Proteines', units: 'g', icon: Chicken },
    carbohydrateCount: { name: 'Glucides', units: 'g', icon: Apple },
    lipidCount: { name: 'Lipides', units: 'g', icon: Burger },
};

export default function NutritionMetrics({ data }) {
    const formattedData = Object.entries(data).map(([key, value]) => ({
        ...NUTRITION_MAPPING[key],
        value: value.toLocaleString(),
    }));

    return (
        <article className='nutrition'>
            {formattedData.map((category) => (
                <div className='nutrition__card nutrition__card' key={category.name}>
                    <div className={`nutrition__card__icon nutrition__card__icon-${category.name}`}>
                        <img src={category.icon} alt={category.name} />
                    </div>
                    <div className='nutrition__card__text'>
                        <p className='nutrittion__card__text-value'>
                            {category.value}
                            {category.units}
                        </p>
                        <h4 className='nutrittion__card__text-name'>{category.name}</h4>
                    </div>
                </div>
            ))}
        </article>
    );
}

NutritionMetrics.propTypes = {
    data: PropTypes.shape({
        calorieCount: PropTypes.number,
        proteinCount: PropTypes.number,
        carbohydrateCount: PropTypes.number,
        lipidCount: PropTypes.number,
    }),
};
