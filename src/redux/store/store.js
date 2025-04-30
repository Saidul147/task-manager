import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskSlicer from "../feature/taskSlicer"


const store = configureStore({
    reducer:{
        taskStore:taskSlicer
    },
})

export default store;

