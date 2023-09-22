import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tareaReducer from '../features/tareas/tareaSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tarea: tareaReducer
    }
})