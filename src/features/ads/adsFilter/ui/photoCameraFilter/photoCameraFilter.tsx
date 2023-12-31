import {IAdFilters} from '@shared/lib';
import {UseFormRegister} from 'react-hook-form';

interface IProps {
  register: UseFormRegister<IAdFilters>;
}

export function PhotoCameraFilter({register}: IProps) {
  return (
    <div className="filter__camera">
      <fieldset className="filter__type filter__type--camera">
        <legend>Тип фотоаппарата</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--camera">
          <li className="filter__checkboxes-item">
            <label htmlFor="mirror">
              Зеркальный
              <input
                {...register('type')}
                className="visually-hidden"
                type="checkbox"
                value="mirror"
                id="mirror"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="digital">
              Цифровой
              <input
                {...register('type')}
                className="visually-hidden"
                type="checkbox"
                value="digital"
                id="digital"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="mirrorless">
              Беззеркальный
              <input
                {...register('type')}
                className="visually-hidden"
                type="checkbox"
                value="mirrorless"
                id="mirrorless"
              />
            </label>
          </li>
        </ul>
      </fieldset>

      <div className="filter__select-wrapper filter__select-wrapper--min-resolution">
        <label htmlFor="resolution-matrix">
          Минимальное разрешение матрицы
          <select {...register('matrixResolution')} id="resolution-matrix">
            <option value="1mp" selected>
              1 МП
            </option>
            <option value="3mp">3 МП</option>
            <option value="5mp">5 МП</option>
            <option value="7mp">7 МП</option>
            <option value="10mp">10 МП</option>
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

      <div className="filter__select-wrapper">
        <label htmlFor="resolution-video">
          Минимальное разрешение видео
          <select {...register('supporting')} id="resolution-video">
            <option value="any" selected>
              Любое
            </option>
            <option value="HD">HD</option>
            <option value="Full_HD">Full HD</option>
            <option value="4K">4K</option>
            <option value="5K">5K</option>
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
    </div>
  );
}
