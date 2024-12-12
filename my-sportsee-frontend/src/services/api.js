import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

const BASE_URL = 'http://localhost:3000';
const isProd = true;

export const api = {
    async getUserById(id) {
        try {
            const response = await fetch(
                isProd ? `${BASE_URL}/user/${id}` : USER_MAIN_DATA.find((user) => user.id === id)
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

    async getUserActivityById(id) {
        try {
            const response = await fetch(
                isProd
                    ? `${BASE_URL}/user/${id}/activity`
                    : USER_ACTIVITY.find((userActivity) => userActivity.userId === id)
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    },

    async getUserAverageSession(id) {
        try {
            const response = await fetch(
                isProd
                    ? `${BASE_URL}/user/${id}/average-sessions`
                    : USER_AVERAGE_SESSIONS.find((userActivity) => userActivity.userId === id)
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw error;
        }
    },

    async getUserPerformance(id) {
        try {
            const response = await fetch(
                isProd
                    ? `${BASE_URL}/user/${id}/performance`
                    : USER_PERFORMANCE.find((userPerformance) => userPerformance.userId === id)
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching user performance:', error);
            throw error;
        }
    },
};
