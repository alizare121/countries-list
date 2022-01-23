import { useEffect } from 'react';
import { useRequest } from '@utils';
function CountriesList() {
  console.log('load');
  const { response, error, isLoading } = useRequest({
    url: 'https://restcountries.com/v2/all',
  });
  console.log('request data', response, error, isLoading);
  return <div> CountriesList screen </div>;
}

export default CountriesList;
