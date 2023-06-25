import {configurestore} from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';

export const store = configurestore({
    reducer : {
        user : userSliceReducer
    },
});
