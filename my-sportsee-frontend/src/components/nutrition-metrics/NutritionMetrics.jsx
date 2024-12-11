import './nutrition-metrics.scss';
import PropTypes from 'prop-types';
import { isInteger } from '../../propTypes/validators';
import { Apple, Burger, Chicken, Fire } from '../../assets/icons';
import NutritionCard from '../nutrition-card/NutritionCard';

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
        <aside className='nutrition'>
            {formattedData.map((category) => (
                <NutritionCard key={category.name} {...category} />
            ))}
        </aside>
    );
}

NutritionMetrics.propTypes = {
    data: PropTypes.shape({
        calorieCount: isInteger,
        proteinCount: isInteger,
        carbohydrateCount: isInteger,
        lipidCount: isInteger,
    }),
};
