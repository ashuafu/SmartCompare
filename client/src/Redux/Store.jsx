import { configureStore } from "@reduxjs/toolkit";
import { api } from "../Services/api";
import { userReducer } from "./UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer.reducer);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userReducer.name]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
