import {setFilters} from '@entities/ads';
import {
  CarFilter,
  EstateFilter,
  FilterRange,
  LaptopFilter,
  PhotoCameraFilter,
  useAdCategory,
} from '@features/ads';
import {AdCategories, adPriceMax, adPriceMin, IAdFilters} from '@shared/lib';
import {useAppDispatch} from '@shared/model';
import {ConfigProvider, Slider} from 'antd';
import {SubmitHandler, useForm} from 'react-hook-form';

export function AdsFilterForm() {
  const dispatch = useAppDispatch();
  const {isEstateCategory, isCarCategory, isPhotoCameraCategory, isLaptopCategory} =
    useAdCategory();
  const {register, handleSubmit, setValue} = useForm<IAdFilters>({
    defaultValues: {
      category: AdCategories.ALL,
      priceMin: adPriceMin,
      priceMax: adPriceMax,
    },
  });

  const onSubmit: SubmitHandler<IAdFilters> = (data) => {
    dispatch(setFilters(data));
  };

  const onRange = (data: FilterRange) => {
    setValue('priceMin', data[0]);
    setValue('priceMax', data[1]);
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="categories">
          Категория товаров
          <select {...register('category')} id="categories">
            <option value="all">Все</option>
            <option value="estate">Недвижимость</option>
            <option value="laptops">Ноутбуки</option>
            <option value="camera">Фотоаппараты</option>
            <option value="cars">Автомобили</option>
          </select>
        </label>
        <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
          />
        </svg>
      </div>

      <div>
        <p>Цена, ₽</p>

        <div>
          <label htmlFor="range-min">
            От
            <input {...register('priceMin')} type="text" id="range-min" />
          </label>
          <label htmlFor="range-max">
            До
            <input {...register('priceMax')} type="text" id="range-max" />
          </label>
        </div>

        <ConfigProvider
          theme={{
            components: {
              Slider: {},
            },
          }}
        >
          <Slider
            range={{draggableTrack: true}}
            defaultValue={[adPriceMin, adPriceMax]}
            max={adPriceMax}
            onChange={onRange}
          />
        </ConfigProvider>
      </div>

      {isCarCategory && <CarFilter register={register} />}
      {isPhotoCameraCategory && <PhotoCameraFilter register={register} />}
      {isEstateCategory && <EstateFilter register={register} />}
      {isLaptopCategory && <LaptopFilter register={register} />}
    </form>
  );
}
