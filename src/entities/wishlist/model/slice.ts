import {AdName, ISliceState} from '@entities/wishlist';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Ad, appLocalStorage} from '@shared/lib';

export const moduleName: string = 'wishlist';

const initialState: ISliceState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    getWishlist(state) {
      state.wishlist = appLocalStorage.getItem(moduleName);
    },
    addToWishlist(state, action: PayloadAction<Ad>) {
      const newState = state.wishlist.push(action.payload);
      appLocalStorage.removeItem(moduleName);
      appLocalStorage.setItem(moduleName, newState);
      state.wishlist = appLocalStorage.getItem(moduleName);
    },
    removeFromWishlist(state, action: PayloadAction<AdName>) {
      const newState = state.wishlist.filter((item: Ad) => item.name !== action.payload);
      appLocalStorage.removeItem(moduleName);
      appLocalStorage.setItem(moduleName, newState);
      state.wishlist = appLocalStorage.getItem(moduleName);
    },
  },
});

export const {reducer} = wishlistSlice;
export const {getWishlist, addToWishlist, removeFromWishlist} = wishlistSlice.actions;
