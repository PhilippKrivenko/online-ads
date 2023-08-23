import {createSlice} from '@reduxjs/toolkit';
import {type AdEstate, type AdCar, type AdPhotoCamera, type AdLaptop} from './types';

type AdsState = {
  adsList: (AdEstate | AdPhotoCamera | AdLaptop | AdCar)[];
  status: string;
  error: string;
};

const initialState: AdsState = {
  adsList: [],
  status: '',
  error: '',
};

export const moduleName: string = 'ads';

export const adsSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
});

export const {name, reducer} = adsSlice;
