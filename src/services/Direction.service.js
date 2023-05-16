import axios from 'axios';

const baseUrl = 'http://localhost:3000/directions';

const DirectionService = {
    create: async (data) => {
        try {
            const response = await axios.post(baseUrl, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default DirectionService;