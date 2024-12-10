import './session-duration-graph.scss';
import PropTypes from 'prop-types';
import { createCombinedValidator, createRangeValidator, isInteger } from '../../../propTypes/validators';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function SessionDurationGraph({ data }) {
    const paddedData = [
        // mock extra data to allow the line to overflow
        { day: 0, sessionLength: data[0].sessionLength },
        ...data,
        { day: 8, sessionLength: data[data.length - 1].sessionLength },
    ];

    function formatXAxis(tickItem) {
        if (tickItem < 1 || tickItem > 7) return '';
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        const index = (tickItem - 1) % 7;
        return days[index];
    }

    function renderTooltipContent({ payload }) {
        if (!payload || !payload[0]) return null;
        const day = payload[0].payload.day;
        if (day < 1 || day > 7) return null;
        const value = payload[0].value;
        return (
            <div className='session-duration__chart__tooltip'>
                <p className='session-duration__chart__tooltip-label'>{`${value} min`}</p>
            </div>
        );
    }

    function handleMouseMove(state) {
        if (state.activePayload && state.activePayload[0]) {
            const currentDay = state.activePayload[0].payload.day;
            // not actually 100% and offset to match the overflow of days 0 & 8, cf .session-duration__chart
            // ((8 - currentDay) / 8) * width% - left%
            const widthPercentage = ((paddedData.length - (currentDay + 1)) / (paddedData.length - 1)) * 110 - 5;
            const filter = document.querySelector('.session-duration__filter');
            if (filter) {
                filter.style.width = `${widthPercentage}%`;
            }
        }
    }

    function handleMouseLeave() {
        const filter = document.querySelector('.session-duration__filter');
        if (filter) {
            filter.style.width = '0%';
        }
    }

    function renderActiveDot({ cx, cy, payload }) {
        if (payload.day >= 1 && payload.day <= 7) {
            return (
                <g>
                    <circle cx={cx} cy={cy} r={10} fill='currentColor' opacity={0.1} />
                    <circle cx={cx} cy={cy} r={4} fill='currentColor' />
                </g>
            );
        }
        return null;
    }

    return (
        <article className='session-duration'>
            <div className='session-duration__filter'></div>
            <h3 className='session-duration__title'>Durée moyenne des sessions</h3>
            <div className='session-duration__chart'>
                <ResponsiveContainer>
                    <LineChart
                        data={paddedData}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        margin={{ left: 0, right: 0 }}
                    >
                        <Tooltip offset={20} animationDuration={300} content={renderTooltipContent} cursor={false} />
                        <XAxis
                            dataKey='day'
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={formatXAxis}
                            tick={{ fill: 'currentColor' }}
                            padding={{ left: 0, right: 0 }}
                        />
                        <YAxis dataKey='sessionLength' domain={['dataMin-15', 'dataMax+30']} hide={true} />
                        <Line
                            type='natural'
                            dataKey='sessionLength'
                            stroke='currentColor'
                            dot={false}
                            activeDot={renderActiveDot}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </article>
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
