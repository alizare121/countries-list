import { useEffect, useCallback } from 'react';
import { useStates } from '@utils';

const initialState = {
  response: null,
  error: '',
  isLoading: false,
};

export const useRequest = ({ url, method = 'get' }) => {
  const [state, setState] = useStates(initialState);
  const { response, error, isLoading, params } = state;
  const fetchData = async () => {
    setState({ isLoading: true });
    try {
      const result = await (await fetch(url, { method })).json().then((res) => {
        setState({ response: res });
      });
    } catch (error) {
      setState({ error: error });
    } finally {
      setState({ isLoading: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, isLoading };
};
