import {createSliceSelector} from '../../../share';
import {moduleName} from './slice';
import {RootState} from '../../../app/store';

const selectState = createSliceSelector(moduleName);

export default {
  adsList: (state: RootState) => selectState(state)?.adsList,
  status: (state: RootState) => selectState(state)?.status,
  error: (state: RootState) => selectState(state)?.error,
};
