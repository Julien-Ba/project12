import './daily-activity-chart.scss';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import DailyActivityTooltip from './DailyActivityTooltip';

export default function DailyActivityChart({ data }) {
    return (
        <>
            <article className='daily-activity'>
                <div className='daily-activity__header'>
                    <h3 className='daily-activity__header__title'>Activité quotidienne</h3>
                    <div className='daily-activity__header__legend'>
                        <span className='daily-activity__header__legend-item daily-activity__header__legend-item--weight'>
                            Poids (kg)
                        </span>
                        <span className='daily-activity__header__legend-item daily-activity__header__legend-item--calories'>
                            Calories brûlées (kCal)
                        </span>
                    </div>
                </div>
                <div className='daily-activity__chart'>
                    <ResponsiveContainer>
                        <BarChart data={data} barSize={7} barGap={8}>
                            <Tooltip offset={40} content={<DailyActivityTooltip />} animationDuration={300} />
                            <CartesianGrid strokeDasharray='2' vertical={false} />
                            <XAxis
                                dataKey='day'
                                tick={{ fill: 'currentColor' }}
                                tickLine={false}
                                tickMargin={16}
                                tickFormatter={(day) => new Date(day).getDate()}
                            />
                            <YAxis
                                yAxisId='kilogram'
                                orientation='right'
                                tickMargin={30}
                                tick={{ fill: 'currentColor' }}
                                tickLine={false}
                                axisLine={false}
                                domain={['dataMin-2', 'dataMax+1']}
                                tickCount={3}
                            />
                            <YAxis hide yAxisId='calories' />
                            <Bar
                                name='Poids (kg)'
                                dataKey='kilogram'
                                yAxisId='kilogram'
                                fill='currentColor'
                                radius={[3, 3, 0, 0]}
                            />
                            <Bar
                                name='Calories brûlées (kCal)'
                                dataKey='calories'
                                yAxisId='calories'
                                fill='currentColor'
                                radius={[3, 3, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </article>
        </>
    );
}

DailyActivityChart.propTypes = {
    data: PropTypes.array,
};
