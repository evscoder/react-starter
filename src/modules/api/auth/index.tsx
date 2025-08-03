import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { paths } from '../root.ts';
import { IAuthState } from '../../../models/auth';

const getAuthData = createAsyncThunk<IAuthState, void, { rejectValue: string }>(
    'slice/getAuth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<IAuthState>(`${paths.api}/data.json`);
            return response.data;
        } catch (error) {
            return rejectWithValue('Server Error');
        }
    }
);

export { getAuthData };
