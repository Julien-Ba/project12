const BASE_URL = 'http://localhost:3000';

export const api = {
    async getUserById(id) {
        try {
            const response = await fetch(`${BASE_URL}/user/${id}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    },

    async getUserActivityById(id) {
        try {
            const response = await fetch(`${BASE_URL}/user/${id}/activity`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user activity:', error);
            throw error;
        }
    },

    async getUserAverageSession(id) {
        try {
            const response = await fetch(`${BASE_URL}/user/${id}/average-sessions`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw error;
        }
    },

    async getUserPerformance(id) {
        try {
            const response = await fetch(`${BASE_URL}/user/${id}/performance`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user performance:', error);
            throw error;
        }
    },
};
