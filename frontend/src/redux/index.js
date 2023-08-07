import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './userSlice';

export const store = configureStore({
    reducer : {
        user : userSliceReducer
    },
});

// const createRootReducer = (history) => {
//     return combineReducers({
//       router: connectRouter(history),
//       createUser: userSliceReducer,
//     });
//   };
