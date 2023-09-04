import {AdCard, useAdsList} from '@entities/ads';
import {AdsFilterForm, AdsSortingForm} from '@features/ads';
import {AddToWishlistButton} from '@features/wishlist';
import {Ad, usePromiseStatus} from '@shared/lib';
import {ErrorIndicator, Spinner} from '@shared/ui';
import {MouseEventHandler} from 'react';

export function AdsList() {
  const {adsList, status} = useAdsList();
  const {isPending, isFulfilled, isRejected} = usePromiseStatus(status);

  const handleAdCard: MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <section>
      <h2>Фильтр</h2>
      <AdsFilterForm />

      <section>
        <div>
          <h2>Результаты</h2>
          <AdsSortingForm />
        </div>

        {isPending && <Spinner />}
        {isFulfilled && (
          <ul>
            {adsList.map((item: Ad, index) => (
              <li key={index}>
                <AddToWishlistButton data={item} />
                <AdCard adData={item} handleClick={handleAdCard} />
              </li>
            ))}
          </ul>
        )}
        {isRejected && <ErrorIndicator />}
      </section>
    </section>
  );
}
