import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as adsManageReducer, name as adsManage} from '../entities/ads';

const rootReducer = combineReducers({
  [adsManage]: adsManageReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
