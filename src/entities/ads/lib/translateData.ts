import {AdCategories} from '@shared/lib';

interface IFiltersNames {
  [key: string]: {
    [key: string]: string;
  };
}

interface IFiltersValues {
  [key: string]: {
    [key: string | number]: string;
  };
}

const filtersNames: IFiltersNames = {
  [AdCategories.ESTATE]: {
    type: `Тип недвижимости`,
    area: `Площадь, м2`,
    roomsCount: `Количество комнат`,
  },
  [AdCategories.LAPTOP]: {
    type: `Тип ноутбука`,
    ramValue: `Объем оперативной памяти`,
    screenSize: `Диагональ экрана`,
    cpuType: `Тип процессора`,
  },
  [AdCategories.PHOTO_CAMERA]: {
    type: `Тип фотоаппарата`,
    matrixResolution: `Разрешение матрицы`,
    supporting: `Разрешение видео`,
  },
  [AdCategories.CAR]: {
    bodyType: `Тип кузова`,
    transmission: `Коробка передач`,
    productionYear: `Год выпуска`,
  },
};

const filtersValues: IFiltersValues = {
  [AdCategories.ESTATE]: {
    flat: `Квартира`,
    house: `Дом`,
    apartment: `Апартаменты`,
  },
  [AdCategories.LAPTOP]: {
    i3: `Intel Core i3`,
    i5: `Intel Core i5`,
    i7: `Intel Core i7`,
    4: `4 Гб`,
    8: `8 Гб`,
    16: `16 Гб`,
    ultrabook: `Ультрабук`,
    home: `Домашний ноутбук`,
    gaming: `Игровой ноутбук`,
  },
  [AdCategories.PHOTO_CAMERA]: {
    slr: `Зеркальный`,
    digital: `Цифровой`,
    mirrorLess: `Беззеркальный`,
    hd: `HD`,
    fullHd: `Full HD`,
    '4k': `4K`,
    '5k': `5K`,
  },
  [AdCategories.CAR]: {
    auto: `Автомат`,
    mechanic: `Механическая`,
    sedan: `Седан`,
    universal: `Универсал`,
    hatchback: `Хэтчбэк`,
    suv: `Внедорожник`,
    coupe: `Купэ`,
  },
};

export const translateFilterName = (category: AdCategories, filter: string): string =>
  filtersNames[category][filter];
export const translateFilterValue = (
  category: AdCategories,
  value: string | number,
): string | number => (filtersValues[category][value] ? filtersValues[category][value] : value);
