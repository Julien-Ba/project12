import './score-gauge.scss';
import PropTypes from 'prop-types';
import { PolarAngleAxis, RadialBarChart, ResponsiveContainer, RadialBar } from 'recharts';

export default function ScoreGauge({ data }) {
    const score = [{ name: 'Score', value: data }];

    return (
        <>
            <article className='score'>
                <div className='score__chart'>
                    <div className='score__chart-bg'></div>
                    <ResponsiveContainer>
                        <RadialBarChart
                            data={score}
                            cx='50%'
                            cy='50%'
                            innerRadius={75}
                            outerRadius={85}
                            startAngle={90}
                            endAngle={90 + 360 * data}
                        >
                            <text textAnchor='start' x='15%' y='15%'>
                                Score
                            </text>
                            <RadialBar dataKey='value' fill='currentColor' cornerRadius={10} />
                            <text textAnchor='middle' fontSize={15} fontWeight={500}>
                                <tspan x='50%' y='45%' fontSize={22}>
                                    {`${data * 100}%`}
                                </tspan>
                                <tspan x='50%' y='58%' fill={'#74798c'}>
                                    de votre
                                </tspan>
                                <tspan x='50%' y='68%' fill={'#74798c'}>
                                    objectif
                                </tspan>
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </article>
        </>
    );
}
ScoreGauge.propTypes = {
    data: PropTypes.number,
};
