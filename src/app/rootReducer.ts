import {reducer as adsManageReducer} from '@entities/ads';
import {reducer as wishlistManageReducer} from '@entities/wishlist';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  adsManage: adsManageReducer,
  wishlistManage: wishlistManageReducer,
});
