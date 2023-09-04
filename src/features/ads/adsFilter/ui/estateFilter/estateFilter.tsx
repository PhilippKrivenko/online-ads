export function EstateFilter() {
  return (
    <div className="filter__estate">
      <fieldset className="filter__type filter__type--estate">
        <legend>Тип недвижимости</legend>

        <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
          <li className="filter__checkboxes-item">
            <label htmlFor="house">
              Дом
              <input
                className="visually-hidden"
                type="checkbox"
                name="estate-type"
                value="house"
                id="house"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="flat">
              Квартира
              <input
                className="visually-hidden"
                type="checkbox"
                name="estate-type"
                value="flat"
                id="flat"
              />
            </label>
          </li>
          <li className="filter__checkboxes-item">
            <label htmlFor="apartments">
              Апартаменты
              <input
                className="visually-hidden"
                type="checkbox"
                name="estate-type"
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
          <input type="number" id="square" name="min-square" min="1" value="" placeholder="0" />
        </label>
      </div>

      <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
        <legend>Количество комнат</legend>

        <ul className="filter__ram-list">
          <li className="filter__radiobuttons-item">
            <label htmlFor="any_room">
              Любое
              <input
                className="visually-hidden"
                type="radio"
                name="rooms"
                value="any"
                id="any_room"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="one">
              1
              <input className="visually-hidden" type="radio" name="rooms" value="one" id="one" />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="two">
              2
              <input className="visually-hidden" type="radio" name="rooms" value="two" id="two" />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="three">
              3
              <input
                className="visually-hidden"
                type="radio"
                name="rooms"
                value="three"
                id="three"
              />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="four">
              4
              <input className="visually-hidden" type="radio" name="rooms" value="four" id="four" />
            </label>
          </li>
          <li className="filter__radiobuttons-item">
            <label htmlFor="fivemore">
              5+
              <input
                className="visually-hidden"
                type="radio"
                name="rooms"
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
