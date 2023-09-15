import axios from 'axios';

const API_URL = 'https://vast-blue-jaguar-vest.cyclic.cloud/api/users/'

//registrar un usuario
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}

const authService = {
    register
}

export default authService