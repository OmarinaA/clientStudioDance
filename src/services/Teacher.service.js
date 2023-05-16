import axios from 'axios';

const apiUrl = 'http://localhost:3000/teachers';

const TeacherService = {
    create: async (data) => {
        const response = await axios.post(apiUrl, data);
        return response.data;
    },
};

export default TeacherService;