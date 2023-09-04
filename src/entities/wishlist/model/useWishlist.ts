import {getWishlist} from '@entities/wishlist';
import {useAppDispatch, useAppSelector} from '@shared/model';
import {useEffect} from 'react';

export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlistManage.wishlist);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  return {wishlist};
};
