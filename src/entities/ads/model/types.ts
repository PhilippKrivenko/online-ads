type Ad = {
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
  category: string;
  photos: string[];
};

export type AdEstate = Ad & {
  filters: {
    type: string;
    area: number;
    roomsCount: number;
  };
};

export type AdCar = Ad & {
  filters: {
    productionYear: number;
    transmission: string;
    bodyType: string;
  };
};

export type AdLaptop = Ad & {
  filters: {
    type: string;
    ramValue: number | string;
    screenSize: number;
    cpuType: string;
  };
};

export type AdPhotoCamera = Ad & {
  filters: {
    type: string;
    matrixResolution: string;
    supporting: string;
  };
};
