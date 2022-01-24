import { useEffect } from 'react';
import { useStates } from '@utils';

const initialState = {
  response: null,
  error: '',
  isLoading: false,
};

export const useRequest = ({ url, method = 'get' }) => {
  const [state, setState] = useStates(initialState);
  const { response, error, isLoading } = state;
  const fetchData = async () => {
    setState({ isLoading: true });
    try {
      await (await fetch(url, { method })).json().then((res) => {
        if (res.status === 404) {
          setState({ error: res.message });
        } else {
          setState({ response: res });
        }
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
