import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '~/features/ApiRequest/searchSlide';

export default configureStore({
    reducer: {
        search: searchReducer,
    },
});
