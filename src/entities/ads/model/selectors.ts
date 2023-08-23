import {createSliceSelector} from '@shared/lib';

import {RootState} from '../../../app/store';
import {moduleName} from './slice';

const selectState = createSliceSelector(moduleName);

export default {
  adsList: (state: RootState) => selectState(state)?.adsList,
  status: (state: RootState) => selectState(state)?.status,
  error: (state: RootState) => selectState(state)?.error,
};
