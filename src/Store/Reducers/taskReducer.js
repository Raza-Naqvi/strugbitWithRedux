import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('Data/fetch', async () => {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=1`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    };
});

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const taskSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        newItem: (state, action) => {
            return {
                ...state.data, data: [...state.data, action.payload],
            }
        },
        updateItem: (state, action) => {
            const { id, updatedUserData } = action.payload;
            const userIndex = state.data.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state.data[userIndex] = { ...state.data[userIndex], ...updatedUserData };
            };
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            state.data = state.data.filter(item => item.id !== idToRemove);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { newItem, updateItem, removeItem } = taskSlice.actions;
export default taskSlice.reducer;