import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    info: null,
}

export const TvSlice = createSlice({
    name: "Tv",
    initialState,
    reducers: {
        loadTv: (state,actions) => {
            state.info = actions.payload;
        },
        removeTv: (state,actions) => {
            state.info = null;
        }
    },
})

export const {loadTv,removeTv} = TvSlice.actions;

export default TvSlice.reducer;