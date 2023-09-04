import {rootReducer} from '@app/rootReducer';
import {configureStore} from '@reduxjs/toolkit';

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const appStore = setupStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
