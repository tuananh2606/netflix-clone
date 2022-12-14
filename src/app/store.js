import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/searchSlide';
import userReducer from '~/features/userSlice';
import movieReducer from '~/features/movieSlide';

export default configureStore({
    reducer: {
        search: searchReducer,
        user: userReducer,
        movie: movieReducer,
    },
});
