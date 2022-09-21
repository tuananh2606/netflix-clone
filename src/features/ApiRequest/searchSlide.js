import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as searchService from '~/services/searchService';
import request from '~/utils/request';

export const getSearchMovies = createAsyncThunk('GET_SEARCH_MOVIES', async (keySearch) => {
    try {
        const result = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=dfc861413c4bcb92717c98ba8d0b4338&language=en-US${
                keySearch ? `&query=${keySearch}` : ''
            }&page=1&include_adult=false`,
        );
        //await searchService.search(request.requestSearchMovies, keySearch);
        return result.data.results;
    } catch (error) {
        console.log('Get Search movies error: ', error);
    }
});

export const searchSlide = createSlice({
    name: 'search',
    initialState: {
        result: [],
        state: null,
    },
    extraReducers: {
        [getSearchMovies.pending]: (state) => {
            state.status = 'loading';
        },
        [getSearchMovies.fulfilled]: (state, { payload }) => {
            state.result = payload;
            state.status = 'success';
        },
        [getSearchMovies.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default searchSlide.reducer;
