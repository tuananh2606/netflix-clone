import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        details: null,
        result: [],
        state: null,
    },
    reducers: {
        getDetailsMovie(state, action) {
            const detailMovie = action.payload;
            state.details = detailMovie;
        },
    },
});

export const { getDetailsMovie } = movieSlice.actions;
export default movieSlice.reducer;
