import {addToWishlist} from '@entities/wishlist';
import {Ad} from '@shared/lib';
import {useAppDispatch} from '@shared/model';
import {MouseEventHandler} from 'react';

interface IProps {
  data: Ad;
}

export function AddToWishlistButton({data}: IProps) {
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addToWishlist(data));
  };

  return (
    <button type="button" onClick={handleClick} aria-label="Добавить в избранное">
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
