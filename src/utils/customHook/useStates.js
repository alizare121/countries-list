import {
  useReducer,
  useRef,
  useCallback,
  useEffect,
  SetStateAction,
} from 'react';

const actionReducer = (state, action) => {
  return {
    ...state,
    ...action,
  };
};

export function useStates(initialState) {
  const [state, _setState] = useReducer(actionReducer, initialState);

  const callbackRef = useRef();
  const isFirstCallbackCall = useRef(true);

  const setState = useCallback((setStateAction, callback) => {
    callbackRef.current = callback;
    _setState(setStateAction);
  }, []);

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false;
      return;
    }
    callbackRef.current?.(state);
  }, [state]);

  return [state, setState];
}
