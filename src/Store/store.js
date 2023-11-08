import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Reducers/taskReducer';

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});