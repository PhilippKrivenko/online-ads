export function CarFilter() {
  return (
    <div className="filter__car">
      <div className="filter__select-wrapper">
        <label htmlFor="car_year">
          Минимальный год выпуска
          <select id="car_year" name="car_year">
            <option value="1900" selected>
              1900
            </option>
            <option value="1940">1940</option>
            <option value="1960">1960</option>
            <option value="1980">1980</option>
            <option value="2000">2000</option>
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

      <fieldset className="filter__radiobuttons filter__radiobuttons--transmission">
        <legend>Коробка передач</legend>
        <ul className="filter__radiobuttons-list">
          <li className="filter__radiobuttons-item">
            <label htmlFor="any_transmission">
              Любая
              <input
                className="visually-hidden"
                type="radio"
                name="transmission"
                value="any"
                id="any_transmission"
                checked
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="mechanic_transmission">
              Механика
              <input
                className="visually-hidden"
                type="radio"
                name="transmission"
                value="mechanic"
                id="mechanic_transmission"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="auto_transmission">
              Автомат
              <input
                className="visually-hidden"
                type="radio"
                name="transmission"
                value="auto"
                id="auto_transmission"
              />
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset className="filter__type filter__type--car-body">
        <legend>Тип кузова</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--car-body">
          <li className="filter__checkboxes-item">
            <label htmlFor="sedan">
              Седан
              <input
                className="visually-hidden"
                type="checkbox"
                name="car-body"
                value="sedan"
                id="sedan"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="universal">
              Универсал
              <input
                className="visually-hidden"
                type="checkbox"
                name="car-body"
                value="universal"
                id="universal"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="hatchback">
              Хэтчбэк
              <input
                className="visually-hidden"
                type="checkbox"
                name="car-body"
                value="hatchback"
                id="hatchback"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="jeep">
              Внедорожник
              <input
                className="visually-hidden"
                type="checkbox"
                name="car-body"
                value="jeep"
                id="jeep"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="cupe">
              Купэ
              <input
                className="visually-hidden"
                type="checkbox"
                name="car-body"
                value="cupe"
                id="cupe"
              />
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
