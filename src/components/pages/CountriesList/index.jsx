import { useRequest, useStates, useHistory } from '@utils';
import { Card, Input, Dropdown } from '@components';
import './styles.css';
import { useEffect } from 'react';

const initialState = {
  params: 'all',
  searchText: '',
};

const REGION_LIST = [
  {
    id: 0,
    title: 'all',
    value: 'all',
  },
  {
    id: 1,
    title: 'European Union',
    value: 'EU',
  },
  {
    id: 2,
    title: 'European Free Trade Association',
    value: 'EFTA',
  },
  {
    id: 3,
    title: 'Caribbean Community',
    value: 'CARICOM',
  },
  {
    id: 4,
    title: 'Pacific Alliance',
    value: 'PA',
  },
  {
    id: 5,
    title: 'African Union',
    value: 'AU',
  },
  {
    id: 6,
    title: 'Union of South American Nations',
    value: 'USAN',
  },
  {
    id: 7,
    title: 'Eurasian Economic Union',
    value: 'EEU',
  },
  {
    id: 8,
    title: 'Arab League',
    value: 'AL',
  },
  {
    id: 9,
    title: 'Association of Southeast Asian Nations',
    value: 'ASEAN',
  },
  {
    id: 10,
    title: 'Central American Integration System',
    value: 'CAIS',
  },
  {
    id: 11,
    title: 'Central European Free Trade Agreement',
    value: 'CEFTA',
  },
  {
    id: 12,
    title: 'North American Free Trade Agreement',
    value: 'NAFTA ',
  },
  {
    id: 13,
    title: 'South Asian Association for Regional Cooperation',
    value: 'SAARC',
  },
];
function CountriesList() {
  const history = useHistory();
  const [state, setState] = useStates(initialState);
  const { params, searchText } = state;
  const { response, error, isLoading } = useRequest({
    url: `https://restcountries.com/v2/${params}`,
  });

  useEffect(() => {
    if (error) {
      alert('country is not found !!');
    }
  }, [error]);

  const onSelectRegion = (region) => {
    setState({
      params: `regionalbloc/${region}`,
    });
  };

  const searchCountry = (text) => {
    const value = text === '' ? 'all' : `name/${text}`;
    setState({
      params: value,
      searchText: text,
    });
  };

  const gotToDetail = ({ callingCodes }) => {
    history.push(`/country-detail?id=${callingCodes[0]}`);
  };

  return (
    <div>
      <div className='filter-wrapper'>
        <Input
          placeholder='Search for a country...'
          onChange={searchCountry}
          value={searchText}
        />
        <Dropdown
          data={REGION_LIST}
          placeholder='Filter by Region'
          onSelect={onSelectRegion}
        />
      </div>
      {isLoading && <span> is Loading .... </span>}
      <div className='items-wrapper'>
        {response &&
          response.map((item) => {
            return <Card data={item} onClick={() => gotToDetail(item)} />;
          })}
      </div>
    </div>
  );
}

export default CountriesList;
