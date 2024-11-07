import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    info: null,
}

export const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        loadMovie: (state,actions) => {
            state.info = actions.payload;
        },
        removeMovie: (state,actions) => {
            state.info = null;
        }
    },
})

export const {loadMovie,removeMovie} = MovieSlice.actions;

export default MovieSlice.reducer;