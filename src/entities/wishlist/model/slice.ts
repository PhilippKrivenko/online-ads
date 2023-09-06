import {RootState} from '@app/appStore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Ad, AdsList, appLocalStorage} from '@shared/lib';

interface ISliceState {
  showWishlist: boolean;
  wishlist: AdsList;
}

const moduleName = 'wishlist';

const initialState: ISliceState = {
  showWishlist: false,
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setShowWishlist(state, action: PayloadAction<boolean>) {
      state.showWishlist = action.payload;
    },
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

export const selectWishlist = (state: RootState) => state.wishlist;
export const {addToWishlist, removeFromWishlist, getWishlist, setShowWishlist} =
  wishlistSlice.actions;
