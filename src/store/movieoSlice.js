import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    barnerData: [],
    imageUrl: ""
}

export const movieoSlice = createSlice({
    name: 'movieo',
    initialState,
    reducers: {
        setBarnerData: (state, action) => {
            state.barnerData = action.payload
        },
        setImageUrl: (state, action) => {
            state.imageUrl = action.payload
        }
    }
})

export const { setBarnerData, setImageUrl } = movieoSlice.actions
export default movieoSlice.reducer