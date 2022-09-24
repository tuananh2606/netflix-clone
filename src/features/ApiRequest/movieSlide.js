import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'dfc861413c4bcb92717c98ba8d0b4338';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = createAsyncThunk('GET_TRENDING_MOVIES', async () => {
    try {
        const result = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
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
