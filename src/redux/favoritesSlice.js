import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite : (state, action) => {
    const recipe = action.payload;
    const existingFavRecpIndex = state.favoriterecipes.findIndex((item) => item.idFood === recipe.idFood);
    if(existingFavRecpIndex >= 0){
      state.favoriterecipes.splice(existingFavRecpIndex, 1);
    } else {
      state.favoriterecipes.push(recipe);
    }
   }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
