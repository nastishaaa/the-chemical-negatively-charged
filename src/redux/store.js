import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import apartmentsReducer from './apartments/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user', 'token', 'isLoggedIn'],
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    apartments: apartmentsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: import.meta.env.MODE === 'development',

});

export const persistor = persistStore(store);