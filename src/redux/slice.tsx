import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getRequestData} from '../models/api/data/getData';
import isError from '../helper/isError';

export type DataProps = {
    title: string
}

type Props = {
    data: DataProps
    loading: boolean | null
    error: string
}

const initialState: Props = {
    data: {
        title: ''
    },
    loading: null,
    error: ''
};

const slice = createSlice({
    name: 'slice',
    initialState: initialState,
    reducers: {
        sliceAction: (state, { payload }) => {
            state.loading = payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getRequestData.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRequestData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const {
    sliceAction
} = slice.actions;

export default slice.reducer;
