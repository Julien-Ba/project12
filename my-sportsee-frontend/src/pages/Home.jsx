import './home.scss';
import { useState, useEffect } from 'react';
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
    const [userActivity, setUserActicity] = useState(null);
    const [userAverageSession, setUserAverageSession] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const userId = 12;
                const userData = await api.getUserById(userId);
                const userActivity = await api.getUserActivityById(userId);
                const userAverageSession = await api.getUserAverageSession(userId);
                const userPerformance = await api.getUserPerformance(userId);

                setUserData(userData);
                setUserActicity(userActivity);
                setUserAverageSession(userAverageSession);
                setUserPerformance(userPerformance);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUserData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (!userData || !userActivity || !userAverageSession || !userPerformance) return <div>No user data found</div>;

    return (
        <main className='home'>
            <Sidebar />
            <section className='home__summary'>
                <Greetings user={userData.data.userInfos.firstName} />
                <DailyActivityChart data={userActivity.data.sessions} />
                <NutritionMetrics data={userData.data.keyData} />
                <SessionDurationGraph data={userAverageSession.data.sessions} />
                <PerformanceRadarChart data={userPerformance.data} />
                <ScoreGauge data={userData.data.todayScore || userData.data.score} />
            </section>
        </main>
    );
}
