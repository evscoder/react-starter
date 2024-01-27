import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getRequestData} from '../api/data/getData';
import isError from '../helper/isError';

type sliceProps = {
    data: object
    loading: boolean | null
    error: string
}

const initialState: sliceProps = {
    data: {},
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
