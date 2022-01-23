import { lazy } from 'react';

const CountriesList = lazy(() => import('../components/pages/CountriesList'));
const CountryDetail = lazy(() => import('../components/pages/CountryDetail'));
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
