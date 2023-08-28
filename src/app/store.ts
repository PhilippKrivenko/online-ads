import {name as adsManage, reducer as adsManageReducer} from '@entities/ad';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

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
