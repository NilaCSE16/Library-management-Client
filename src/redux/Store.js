import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/UserSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import bookReducer from "./Books/BooksSlice.js";

const rootReducer = combineReducers({ user: userReducer, books: bookReducer });

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: { persistedReducer: persistedReducer, bookReducer: bookReducer },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
