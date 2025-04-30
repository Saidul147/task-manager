import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[]
}

const taskSlicer = createSlice({
    name:"taskSlice",
    initialState,
    reducers:{

    }
})

export default taskSlicer.reducer;