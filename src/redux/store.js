import { configureStore } from "@reduxjs/toolkit";
import { countReducer, firstReducer } from "./reducers";

const store = configureStore({
    reducer: {
        first: firstReducer,
        second: countReducer
    }
})

export default store