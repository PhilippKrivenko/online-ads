import {AdCategories} from '@shared/lib';

interface IAd {
  name: string;
  price: number;
  coordinates: [number, number];
  seller: {
    fullName: string;
    rating: number;
  };
  description: string;
  address: {
    city: string;
    street: string;
    building: string;
  };
  publishDate: string;
  category: AdCategories;
  photos: string[];
}

export interface IAdEstate extends IAd {
  filters: {
    type: string;
    area: number;
    roomsCount: number;
  };
}

export interface IAdCar extends IAd {
  filters: {
    productionYear: number;
    transmission: string;
    bodyType: string;
  };
}

export interface IAdLaptop extends IAd {
  filters: {
    type: string;
    ramValue: number | string;
    screenSize: number;
    cpuType: string;
  };
}

export interface IAdPhotoCamera extends IAd {
  filters: {
    type: string;
    matrixResolution: string;
    supporting: string;
  };
}

export interface IAdFilters {
  category: AdCategories;
  priceMin: number;
  priceMax: number;
  type?: string[];
  area?: number;
  roomsCount?: number;
  productionYear?: number;
  transmission?: string;
  bodyType?: string;
  ramValue?: number | string;
  screenSize?: number;
  cpuType?: string;
  matrixResolution?: string;
  supporting?: string;
}

export type Ad = IAdCar | IAdEstate | IAdPhotoCamera | IAdLaptop;
export type AdsList = Array<Ad>;
