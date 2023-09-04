import {Ad} from '@shared/lib';

export function isAdType(data: Nullable<Ad>): data is Ad {
  return data !== null;
}
