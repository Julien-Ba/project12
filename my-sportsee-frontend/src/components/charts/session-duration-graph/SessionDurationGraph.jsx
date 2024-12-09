import './session-duration-graph.scss';
import PropTypes from 'prop-types';
import { createCombinedValidator, createRangeValidator, isInteger } from '../../../propTypes/validators';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function SessionDurationGraph({ data }) {
    function formatXAxis(tickItem) {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        const index = (tickItem - 1) % 7;
        return days[index];
    }

    function renderTooltipContent({ payload }) {
        try {
            const value = payload[0].value;
            return (
                <div className='session-duration__chart__tooltip'>
                    <p className='session-duration__chart__tooltip-label'>{`${value} min`}</p>
                </div>
            );
        } catch {
            return null;
        }
    }

    return (
        <>
            <article className='session-duration'>
                <div className='session-duration__filter'></div>
                <h3 className='session-duration__title'>Durée moyenne des sessions</h3>
                <div className='session-duration__chart'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart data={data}>
                            <Tooltip
                                offset={20}
                                animationDuration={300}
                                content={renderTooltipContent}
                                cursor={false}
                            />
                            <XAxis
                                dataKey='day'
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={formatXAxis}
                                tick={{ fill: 'currentColor' }}
                            />
                            <YAxis dataKey='sessionLength' domain={['dataMin-15', 'dataMax+30']} hide={true} />
                            <Line
                                type='natural'
                                dataKey='sessionLength'
                                stroke='currentColor'
                                dot={false}
                                activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </article>
        </>
    );
}

const isDayOfWeek = createCombinedValidator([isInteger, createRangeValidator(1, 7)]);

SessionDurationGraph.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            day: isDayOfWeek,
            sessionLength: isInteger,
        }).isRequired
    ).isRequired,
};
