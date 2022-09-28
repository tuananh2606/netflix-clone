import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTrendingMovies = createAsyncThunk('GET_TRENDING_MOVIES', async () => {
    try {
        const result = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/trending/all/week?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
        );
        return result.data.results;
    } catch (error) {
        console.log('Get Trending movies error: ', error);
    }
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        result: [],
        state: null,
    },
    extraReducers: {
        [getTrendingMovies.pending]: (state) => {
            state.status = 'loading';
        },
        [getTrendingMovies.fulfilled]: (state, { payload }) => {
            state.result = payload;
            state.status = 'success';
        },
        [getTrendingMovies.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default movieSlice.reducer;
