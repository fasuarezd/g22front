import axios from 'axios';

const API_URL = 'https://vast-blue-jaguar-vest.cyclic.cloud/api/tareas/'

//crear una nueva tarea
const createTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)

    return response.data
}

//obtener tareas
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

//delete tareas
const deleteTarea = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)

    return response.data
}

const tareaService = {
    createTarea,
    getTareas,
    deleteTarea
}

export default tareaService

