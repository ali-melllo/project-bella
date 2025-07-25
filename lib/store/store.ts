import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'; 


import "../../services/endpoints/admin/admin";
import { api } from "@/services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
