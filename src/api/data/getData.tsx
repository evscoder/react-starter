import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {paths} from '../../root/paths';

const getRequestData = createAsyncThunk('slice/getData', async (_, { rejectWithValue }) => {
    try {
        const {data} = await axios.get(`${paths.api}/data.json`, {
            method: 'POST'
        });

        return data;
    } catch(error) {
        return rejectWithValue('Server Error');
    }
});

export {
    getRequestData
};
