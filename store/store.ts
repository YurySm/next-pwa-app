import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore
} from 'redux-persist'
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "@/store/user/user.slice";

const combinedReducers = combineReducers({
    user: userSlice.reducer
})

let mainReducer = combinedReducers

const isClient = typeof window !== 'undefined'

if (isClient) {
    const {persistReducer} = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
        key: 'pwa-next',
        storage,
        blacklist: ['user']
    }

    const userPersistConfig = {
        key: 'user',
        storage: storage,
        blacklist: ['isError']
    };

    const combinedReducers = combineReducers({
        user: persistReducer(userPersistConfig, userSlice.reducer),
    })

    mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
    reducer: mainReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER  ]
            }
        })
    }
})
export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>