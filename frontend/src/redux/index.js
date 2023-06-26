import {createStore} from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const store = createStore({
    reducer : {
        user : userSliceReducer
    },
});

const createRootReducer = (history) => {
    return combineReducers({
      router: connectRouter(history),
      createUser: userSliceReducer,
    });
  };
