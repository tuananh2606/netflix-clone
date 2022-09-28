import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/searchSlide';
import userReducer from '~/features/userSlice';

export default configureStore({
    reducer: {
        search: searchReducer,
        user: userReducer,
    },
});
