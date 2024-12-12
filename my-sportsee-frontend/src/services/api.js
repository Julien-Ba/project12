import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

const BASE_URL = 'http://localhost:3000';
const isProd = false;

export const api = {
    async getUserById(id) {
        try {
            if (!isProd) return { data: USER_MAIN_DATA.find((user) => user.id === +id) };
            const response = await fetch(`${BASE_URL}/user/${id}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

    async getUserActivityById(id) {
        try {
            if (!isProd) return { data: USER_ACTIVITY.find((userActivity) => userActivity.userId === +id) };
            const response = await fetch(`${BASE_URL}/user/${id}/activity`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    },

    async getUserAverageSession(id) {
        try {
            if (!isProd) return { data: USER_AVERAGE_SESSIONS.find((userSession) => userSession.userId === +id) };
            const response = await fetch(`${BASE_URL}/user/${id}/average-sessions`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw error;
        }
    },

    async getUserPerformance(id) {
        try {
            if (!isProd) return { data: USER_PERFORMANCE.find((userPerformance) => userPerformance.userId === +id) };
            const response = await fetch(`${BASE_URL}/user/${id}/performance`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user performance:', error);
            throw error;
        }
    },
};
