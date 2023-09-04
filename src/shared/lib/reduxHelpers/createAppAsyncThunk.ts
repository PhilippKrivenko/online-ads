import {AppDispatch, RootState} from '@app/appStore';
import {createAsyncThunk} from '@reduxjs/toolkit';

type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();
