import {Ad, AdJSON, IAdCarJSON, IAdEstateJSON, IAdLaptopJSON} from '@entities/ad';
import {AdCategories} from '@shared/lib';

function isEstate(data: AdJSON): data is IAdEstateJSON {
  return data.category === AdCategories.ESTATE;
}
function isCar(data: AdJSON): data is IAdCarJSON {
  return data.category === AdCategories.CAR;
}
function isLaptop(data: AdJSON): data is IAdLaptopJSON {
  return data.category === AdCategories.LAPTOP;
}

export const transformData = (data: AdJSON): Ad => {
  const ad = {
    name: data.name,
    price: data.price,
    coordinates: data.coordinates,
    seller: {
      fullName: data.seller.fullname,
      rating: data.seller.rating,
    },
    description: data.description,
    address: {
      city: data.address.city,
      street: data.address.street,
      building: data.address.building,
    },
    publishDate: data['publish-date'],
    category: data.category,
    photos: data.photos,
  };

  if (isEstate(data)) {
    return {
      ...ad,
      filters: {
        type: data.filters.type,
        area: data.filters.area,
        roomsCount: data.filters['rooms-count'],
      },
    };
  }
  if (isCar(data)) {
    return {
      ...ad,
      filters: {
        productionYear: data.filters['production-year'],
        transmission: data.filters.transmission,
        bodyType: data.filters['body-type'],
      },
    };
  }
  if (isLaptop(data)) {
    return {
      ...ad,
      filters: {
        type: data.filters.type,
        ramValue: data.filters['ram-value'],
        screenSize: data.filters['screen-size'],
        cpuType: data.filters['cpu-type'],
      },
    };
  }
  return {
    ...ad,
    filters: {
      type: data.filters.type,
      matrixResolution: data.filters['matrix-resolution'],
      supporting: data.filters.supporting,
    },
  };
};
