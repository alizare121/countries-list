import { useEffect } from 'react';
import { getQueryParams, useRequest } from '@utils';
import { InfoItem, Button } from '@components';
import './style.css';
export default function CountryDetail() {
  const COUNTRY_ID = getQueryParams('id', window.location.href);
  const {
    response = [],
    error,
    isLoading,
  } = useRequest({
    url: `https://restcountries.com/v2/callingcode/${COUNTRY_ID}`,
  });

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = (response && response[0]) || {};

  return (
    <div className='detail-container'>
      <Button title='Back' iconName='arrow-left' primary />
      {isLoading && <span> isLoading .... </span>}
      <div className='detail-card-wrapper'>
        <img src={flag} alt={name} className='detail-flag' loading='lazy' />
        <div>
          <div className='detail-info-wrapper'>
            <div>
              <span className='country-name'>{name}</span>

              <InfoItem title='Native Name' value={nativeName} />
              <InfoItem title='Population' value={population} />
              <InfoItem title='Region' value={region} />
              <InfoItem title='Sub Region' value={subregion} />
              <InfoItem title='Capital' value={capital} />
            </div>

            <div>
              <InfoItem
                title='Top Level Domain'
                value={topLevelDomain && topLevelDomain[0]}
              />
              <InfoItem title='Currencies' value={currencies} />
              <InfoItem title='Languages' value={languages} />
            </div>
          </div>
          <div className='border-info'>
            <InfoItem title='Borders Countries' value={borders} tag />
          </div>
        </div>
      </div>
    </div>
  );
}
