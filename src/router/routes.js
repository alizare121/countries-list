import { lazy } from 'react';

import CountriesList from '../components/pages/CountriesList';
import CountryDetail from '../components/pages/CountryDetail';

export const routes = [
  {
    id: 0,
    path: 'countries-list',
    component: CountriesList,
    exact: true,
  },
  {
    id: 1,
    path: 'country-detail',
    component: CountryDetail,
    exact: true,
  },
];
