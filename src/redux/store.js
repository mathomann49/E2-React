import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import todoReducer from "./todoSlice"


const reducers = combineReducers({
    todos: todoReducer,
});


const persistConfig = {
    key: "root",
    storage,
    whitelist:["todos"],
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);