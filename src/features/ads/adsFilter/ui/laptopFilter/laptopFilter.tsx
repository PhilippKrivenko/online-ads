import {IAdFilters} from '@shared/lib';
import {UseFormRegister} from 'react-hook-form';

interface IProps {
  register: UseFormRegister<IAdFilters>;
}
export function LaptopFilter({register}: IProps) {
  return (
    <div>
      <fieldset>
        <legend>Тип ноутбука</legend>
        <ul>
          <li>
            <label htmlFor="ultra">
              Ультрабук
              <input {...register('type')} type="checkbox" value="ultra" id="ultra" />
            </label>
          </li>
          <li>
            <label htmlFor="home">
              Домашний ноутбук
              <input {...register('type')} type="checkbox" value="home" id="home" />
            </label>
          </li>
          <li>
            <label htmlFor="gaming">
              Игровой ноутбук
              <input {...register('type')} type="checkbox" value="gaming" id="gaming" />
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Минимальный объем оперативной памяти</legend>
        <ul>
          <li>
            <label htmlFor="any_ram">
              Любой
              <input {...register('ramValue')} type="radio" value="any" id="any_ram" />
            </label>
          </li>
          <li>
            <label htmlFor="4gb">
              4 Гб
              <input {...register('ramValue')} type="radio" value="4gb" id="4gb" />
            </label>
          </li>
          <li>
            <label htmlFor="8gb">
              8 Гб
              <input {...register('ramValue')} type="radio" value="8gb" id="8gb" />
            </label>
          </li>
          <li>
            <label htmlFor="16gb">
              16 Гб
              <input {...register('ramValue')} type="radio" value="16gb" id="16gb" />
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Минимальная диагональ экрана</legend>
        <ul>
          <li>
            <label htmlFor="any_diagonal">
              Любая
              <input
                {...register('screenSize')}
                type="radio"
                value="any"
                id="any_diagonal"
                checked
              />
            </label>
          </li>
          <li>
            <label htmlFor="13in">
              13<sup>″</sup>
              <input {...register('screenSize')} type="radio" value="13in" id="13in" />
            </label>
          </li>
          <li>
            <label htmlFor="14in">
              14<sup>″</sup>
              <input {...register('screenSize')} type="radio" value="14in" id="14in" />
            </label>
          </li>
          <li>
            <label htmlFor="15in">
              15<sup>″</sup>
              <input {...register('screenSize')} type="radio" value="15in" id="15in" />
            </label>
          </li>
          <li>
            <label htmlFor="17in">
              17<sup>″</sup>
              <input {...register('screenSize')} type="radio" value="17in" id="17in" />
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>Тип процессора</legend>
        <ul>
          <li>
            <label htmlFor="i3">
              Intel Core i3
              <input {...register('cpuType')} type="checkbox" value="i3" id="i3" />
            </label>
          </li>
          <li>
            <label htmlFor="i5">
              Intel Core i5
              <input {...register('cpuType')} type="checkbox" value="i5" id="i5" />
            </label>
          </li>
          <li>
            <label htmlFor="i7">
              Intel Core i7
              <input {...register('cpuType')} type="checkbox" value="i7" id="i7" />
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
