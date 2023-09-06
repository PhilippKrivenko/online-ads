import {IAdFilters} from '@shared/lib';
import {UseFormRegister} from 'react-hook-form';

interface IProps {
  register: UseFormRegister<IAdFilters>;
}

export function EstateFilter({register}: IProps) {
  return (
    <div className="filter__estate">
      <fieldset className="filter__type filter__type--estate">
        <legend>Тип недвижимости</legend>

        <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
          <li className="filter__checkboxes-item">
            <label htmlFor="house">
              Дом
              <input
                {...register('type')}
                className="visually-hidden"
                type="checkbox"
                value="house"
                id="house"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="flat">
              Квартира
              <input
                {...register('type')}
                className="visually-hidden"
                type="checkbox"
                value="flat"
                id="flat"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="apartments">
              Апартаменты
              <input
                {...register('type')}
                className="visually-hidden"
                type="checkbox"
                value="apartments"
                id="apartments"
              />
            </label>
          </li>
        </ul>
      </fieldset>

      <div className="filter__min-square">
        <label htmlFor="square">
          Минимальная площать, м<sup>2</sup>
          <input {...register('area')} type="number" id="square" min="1" value="" placeholder="0" />
        </label>
      </div>

      <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
        <legend>Количество комнат</legend>

        <ul className="filter__ram-list">
          <li className="filter__radiobuttons-item">
            <label htmlFor="any_room">
              Любое
              <input
                {...register('roomsCount')}
                className="visually-hidden"
                type="radio"
                value="any"
                id="any_room"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="one">
              1
              <input
                {...register('roomsCount')}
                className="visually-hidden"
                type="radio"
                value="one"
                id="one"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="two">
              2
              <input
                {...register('roomsCount')}
                className="visually-hidden"
                type="radio"
                value="two"
                id="two"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="three">
              3
              <input
                {...register('roomsCount')}
                className="visually-hidden"
                type="radio"
                value="three"
                id="three"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="four">
              4
              <input
                {...register('roomsCount')}
                className="visually-hidden"
                type="radio"
                value="four"
                id="four"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="fivemore">
              5+
              <input
                {...register('roomsCount')}
                className="visually-hidden"
                type="radio"
                value="fivemore"
                id="fivemore"
              />
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
