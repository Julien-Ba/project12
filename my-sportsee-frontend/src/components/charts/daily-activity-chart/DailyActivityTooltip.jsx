export default function DailyActivityTooltip(data) {
    try {
        const kg = data.payload[0]['value'];
        const kCal = data.payload[1]['value'];

        return (
            <div className='daily-activity__chart__tooltip'>
                <p className='daily-activity__chart__tooltip-label'>{`${kg}kg`}</p>
                <p className='daily-activity__chart__tooltip-label'>{`${kCal}Kcal`}</p>
            </div>
        );
    } catch {
        return null;
    }
}
