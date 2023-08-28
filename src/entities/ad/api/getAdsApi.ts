import {IAdsResponseJSON} from '@entities/ad';
import {getResource} from '@shared/lib/api';

export const getAdsApi = async (): Promise<IAdsResponseJSON> => {
  const response = await getResource('/store/db');
  return response.json();
};
