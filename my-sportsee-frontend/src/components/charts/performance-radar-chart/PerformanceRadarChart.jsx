import './performance-radar-chart.scss';
import PropTypes from 'prop-types';
import { isInteger } from '../../../propTypes/validators';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

export default function PerformanceRadarChart({ data }) {
    const translations = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité',
    };
    const maxScore = Math.max(...data.data.map((item) => item.value));
    const formattedData = data.data
        .map((item) => ({
            subject: translations[data.kind[item.kind]],
            score: item.value,
            fullMark: maxScore,
        }))
        .reverse();

    return (
        <article className='performance-radar'>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart cx='50%' cy='50%' outerRadius='72%' data={formattedData}>
                    <PolarGrid radialLines={false} stroke='currentColor' />
                    <PolarAngleAxis dataKey='subject' tick={{ fill: 'currentColor' }} />
                    <Radar name='Performance' dataKey='score' fill='currentColor' />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    );
}

PerformanceRadarChart.propTypes = {
    data: PropTypes.shape({
        kind: PropTypes.objectOf(PropTypes.string).isRequired,
        data: PropTypes.arrayOf(
            PropTypes.exact({
                value: isInteger,
                kind: isInteger,
            })
        ).isRequired,
    }).isRequired,
};
