import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/CounterSlice'
import blogReducer from './slices/BlogSlice'

const store = configureStore({
    reducer: {
        count: counterReducer,
        blog: blogReducer,
    }

})

export default store