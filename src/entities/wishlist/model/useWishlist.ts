import {getWishlist, selectWishlist} from '@entities/wishlist';
import {useAppDispatch, useAppSelector} from '@shared/model';
import {useEffect} from 'react';

export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const {wishlist, showWishlist} = useAppSelector(selectWishlist);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  return {wishlist, showWishlist};
};
