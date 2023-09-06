import {selectFilters} from '@entities/ads';
import {AdCategories} from '@shared/lib';
import {useAppSelector} from '@shared/model';

export const useAdCategory = () => {
  const {category} = useAppSelector(selectFilters);

  const isCarCategory = category === AdCategories.CAR;
  const isEstateCategory = category === AdCategories.ESTATE;
  const isLaptopCategory = category === AdCategories.LAPTOP;
  const isPhotoCameraCategory = category === AdCategories.PHOTO_CAMERA;

  return {isCarCategory, isEstateCategory, isLaptopCategory, isPhotoCameraCategory};
};
