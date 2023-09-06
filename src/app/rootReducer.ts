import {adsSlice} from '@entities/ads';
import {wishlistSlice} from '@entities/wishlist';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  ads: adsSlice.reducer,
  wishlist: wishlistSlice.reducer,
});
