import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

const BASE_URL = 'http://localhost:3000';
const isProd = false;

export const api = {
    async getUserById(id) {
        try {
            if (isProd) {
                const response = await fetch(`${BASE_URL}/user/${id}`);
                return await response.json();
            }
            const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));
            if (!userData) {
                throw new Error(`User with id ${id} not found`);
            }
            return { data: userData };
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

    async getUserActivityById(id) {
        try {
            if (isProd) {
                const response = await fetch(`${BASE_URL}/user/${id}/activity`);
                return await response.json();
            }
            const activityData = USER_ACTIVITY.find((userActivity) => userActivity.userId === parseInt(id));
            if (!activityData) {
                throw new Error(`Activity data for user ${id} not found`);
            }
            return { data: activityData };
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    },

    async getUserAverageSession(id) {
        try {
            if (isProd) {
                const response = await fetch(`${BASE_URL}/user/${id}/average-sessions`);
                return await response.json();
            }
            const sessionData = USER_AVERAGE_SESSIONS.find((userSession) => userSession.userId === parseInt(id));
            if (!sessionData) {
                throw new Error(`Session data for user ${id} not found`);
            }
            return { data: sessionData };
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw error;
        }
    },

    async getUserPerformance(id) {
        try {
            if (isProd) {
                const response = await fetch(`${BASE_URL}/user/${id}/performance`);
                return await response.json();
            }
            const performanceData = USER_PERFORMANCE.find((userPerformance) => userPerformance.userId === parseInt(id));
            if (!performanceData) {
                throw new Error(`Performance data for user ${id} not found`);
            }
            return { data: performanceData };
        } catch (error) {
            console.error('Error fetching user performance:', error);
            throw error;
        }
    },
};
