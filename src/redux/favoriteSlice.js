import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            if (state.some(item => item.name === action.payload.name)) {
                alert("property already present in favorites")
            } else {
                state.push(action.payload)
            }
        },
        deleteFavorite: (state, action) => {
            return state.filter((item) => item.name !== action.payload.name)
        }
    }
})

export const {
    addFavorite, deleteFavorite
} = favoriteSlice.actions;

export default favoriteSlice.reducer;