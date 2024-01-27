import {createAsyncThunk} from '@reduxjs/toolkit';

const getRequestData = createAsyncThunk('slice/getData', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('/api/data', {
            method: 'POST'
        });
        const result = await response.json();

        return result;
    } catch(error) {
        return rejectWithValue('Server Error');
    }
});

export {
    getRequestData
};
