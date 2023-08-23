import {RootState} from '../../../app/store';

export const createSliceSelector = (field: string) => (state: RootState) => state[field];
