import './home.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import DailyActivityChart from '../../components/charts/daily-activity-chart/DailyActivityChart';
import Greetings from '../../components/greetings/Greetings';
import NutritionMetrics from '../../components/nutrition-metrics/NutritionMetrics';
import PerformanceRadarChart from '../../components/charts/performance-radar-chart/PerformanceRadarChart';
import ScoreGauge from '../../components/charts/score-gauge/ScoreGauge';
import SessionDurationGraph from '../../components/charts/session-duration-graph/SessionDurationGraph';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
    const { id } = useParams();

    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActicity] = useState(null);
    const [userAverageSession, setUserAverageSession] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            if (!id) return;
            try {
                const userData = await api.getUserById(id);
                const userActivity = await api.getUserActivityById(id);
                const userAverageSession = await api.getUserAverageSession(id);
                const userPerformance = await api.getUserPerformance(id);

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
    }, [id]);

    if (!id) return <h2 className='error'>No user found</h2>;
    if (isLoading) return <h2 className='error'>Loading...</h2>;
    if (error) return <h2 className='error'>Error loading data</h2>;
    if (!userData || !userActivity || !userAverageSession || !userPerformance)
        return <h2 className='error'>No user data found</h2>;

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
