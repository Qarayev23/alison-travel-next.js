import { createSlice } from "@reduxjs/toolkit";

const getWishlistFromStorage = (category) => {
  if (typeof window !== 'undefined') {
    const wishlistState = localStorage.getItem("wishlistItems");
    return wishlistState ? JSON.parse(wishlistState)[category] : [];
  }
  return [];
}

const initialState = {
  tours: getWishlistFromStorage('tours'),
  hotels: getWishlistFromStorage('hotels'),
  transfers: getWishlistFromStorage('transfers'),
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    handleWishlist: (state, action) => {
      const category = action.payload.category;
      const item = action.payload.item;
      const check = state[category].some(x => x.slug === item.slug);

      if (!check) {
        state[category].push({ ...item });
        
      } else {
        state[category] = state[category].filter(x => x.slug !== item.slug);
      }
    }
  },
});


export const { handleWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer;