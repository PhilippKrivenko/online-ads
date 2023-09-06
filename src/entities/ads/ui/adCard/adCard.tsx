import {Ad} from '@shared/lib';
import {MouseEventHandler} from 'react';

interface IProps {
  adData: Ad;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export function AdCard({adData, handleClick}: IProps) {
  const {address, price, name, photos, publishDate} = adData;
  const {city, street, building} = address;

  const date = new Date(+publishDate);

  return (
    <>
      <div>
        <div>+{photos.length - 1} фото</div>
        <img src={photos[0]} srcSet={`${photos[0]} 2x`} width="318" height="220" alt={`${name}`} />
        <div>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div>
        <h3>
          <button type="button" onClick={handleClick}>
            {name}
          </button>
        </h3>
        <div>{price}</div>
        <div>
          {city}, {street}, {building}
        </div>
        <div>
          Размещено {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
        </div>
      </div>
    </>
  );
}
