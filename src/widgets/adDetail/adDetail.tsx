import {translateFilterName, translateFilterValue} from '@entities/ads';
import {AddToWishlistButton} from '@features/wishlist/adToWishlist';
import {Ad} from '@shared/lib';
import {PopupClose} from '@shared/ui';
import {MouseEventHandler} from 'react';

interface IProps {
  adData: Ad;
}

export function AdDetail({adData}: IProps) {
  const {publishDate, name, price, photos, filters, category, seller, description, address} =
    adData;
  const {rating, fullName} = seller;
  const {city, street, building} = address;

  const handlePopupClose: MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <section>
      <div>
        <PopupClose handleEvent={handlePopupClose} />
        <div>{new Date(publishDate).getDate()}</div>
        <h3>{name}</h3>
        <div>{price} ₽</div>

        <div>
          <div>
            <div>
              <AddToWishlistButton data={adData} />
              <div>
                <img
                  src={photos[0]}
                  srcSet={`${photos[0]} 2x`}
                  width="520"
                  height="340"
                  alt={name}
                />
              </div>
              <ul>
                {photos.map((item, index) => (
                  <li key={index}>
                    <img src={item} srcSet={`${item} 2x`} alt={name} width="124" height="80" />
                  </li>
                ))}
              </ul>
            </div>

            <ul>
              {Object.keys(filters).map((key, index) => (
                <li key={index}>
                  <div>{translateFilterName(category, key)}</div>
                  <div>{translateFilterValue(category, filters[key as keyof typeof filters])}</div>
                </li>
              ))}
            </ul>

            <div>
              <h3>Продавец</h3>
              <div>
                <p>{fullName}</p>
                <div>
                  <span>{rating}</span>
                </div>
              </div>
            </div>

            <div>
              <h3>Описание товара</h3>
              <p>{description}</p>
            </div>
          </div>

          <div>
            <div>
              <img src="" width="268" height="180" alt="Москва, Нахимовский проспект, дом 5" />
            </div>
            <div>
              {city}, {street}, {building}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
