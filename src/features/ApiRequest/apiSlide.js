import { createSlice, isAnyOf, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'dfc861413c4bcb92717c98ba8d0b4338';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = createAsyncThunk('GET_TRENDING_MOVIES', async () => {
    try {
        const result = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
        console.log(result);
        return result.data.results;
    } catch (error) {
        console.log('Get Trending movies error: ', error);
    }
});

export const getNetflixOriginals = createAsyncThunk('GET_NETFLIX_ORIGINALS', async () => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`);
        console.log(result.data.results);
        return result.data.results;
    } catch (error) {
        console.log('Get Netflix Originals error: ', error);
    }
});

export const getTopRatedMovies = createAsyncThunk('GET_TOP_RATED_MOVIES', async () => {
    try {
        const result = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`);
        console.log(result);
        return result.data.results;
    } catch (error) {
        console.log('Get Top rate movies error: ', error);
    }
});

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        result: [],
        state: null,
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(getNetflixOriginals.fulfilled, getTrendingMovies.fulfilled, getTopRatedMovies.fulfilled),
            (state, { payload }) => {
                state.status = 'success';
                state.result = payload;
            },
        );

        // [getNetflixOriginals.pending]: (state) => {
        //     state.status = 'loading';
        // },
        // [getNetflixOriginals.fulfilled]: (state, { payload }) => {
        //     state.result = payload;
        //     state.status = 'success';
        // },
        // [getNetflixOriginals.rejected]: (state) => {
        //     state.status = 'failed';
        // },
    },
});

export default apiSlice.reducer;
