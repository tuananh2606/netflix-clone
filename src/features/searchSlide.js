import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as searchService from '~/services/searchService';
import request from '~/utils/request';

export const getSearchMovies = createAsyncThunk('GET_SEARCH_MOVIES', async (keySearch) => {
    try {
        // const result = await axios.get(
        //     `${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${
        //         process.env.REACT_APP_IMDB_API_KEY
        //     }&language=en-US${keySearch ? `&query=${keySearch}` : ''}&page=1&include_adult=false`,
        // );
        const result = await searchService.search(request.requestSearchMovies, keySearch);
        return result;
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
