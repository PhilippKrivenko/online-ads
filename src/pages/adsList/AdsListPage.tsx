import {isAdType, useAdDetail} from '@entities/ads';
import {AdDetail} from '@widgets/adDetail';
import {AdsList} from '@widgets/adsList';

export function AdsListPage() {
  const {adData} = useAdDetail();

  return (
    <>
      <main>
        <h1>Главная</h1>
        <div />

        <div>
          <AdsList />
        </div>
      </main>

      {isAdType(adData) && <AdDetail adData={adData} />}
    </>
  );
}
