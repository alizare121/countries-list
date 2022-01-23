import { useEffect } from 'react';
import { useRequest } from '@utils';
import { Card } from '@components';
import './styles.css'
function CountriesList() {
  console.log('load');
  const { response, error, isLoading } = useRequest({
    url: 'https://restcountries.com/v2/all',
  });
  console.log('request data', response, error, isLoading);
  return (
    <div>
      <div className='items-wrapper'>
        {response &&
          response.map((item) => {
            return <Card data={item} />;
          })}
      </div>
    </div>
  );
}

export default CountriesList;
