import { useState, useEffect } from 'react';
import './home.scss';
import { api } from '../services/api';
import Greetings from '../components/greetings/Greetings';
import Sidebar from '../components/sidebar/Sidebar';
import DailyActivityChart from '../components/charts/daily-activity-chart/DailyActivityChart';
import NutritionMetrics from '../components/nutrition-metrics/NutritionMetrics';
import PerformanceRadarChart from '../components/charts/performance-radar-chart/PerformanceRadarChart';
import ScoreGauge from '../components/charts/score-gauge/ScoreGauge';
import SessionDurationGraph from '../components/charts/session-duration-graph/SessionDurationGraph';

export default function Home() {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = 12;
                const userData = await api.getUserById(userId);

                setUserData(userData);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (!userData) return <div>No user data found</div>;

    const {
        data: {
            userInfos: { firstName },
        },
    } = userData;

    return (
        <main className='home'>
            <Sidebar />
            <div className='home__summary'>
                <Greetings user={firstName} />
                <DailyActivityChart />
                <NutritionMetrics />
                <SessionDurationGraph />
                <PerformanceRadarChart />
                <ScoreGauge />
            </div>
        </main>
    );
}
